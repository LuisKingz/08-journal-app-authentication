import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserAndPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "formato del correo incorrecta."],
  password: [(value) => value.length >= 6, "El password debe contener mas de 6 caracteres.",  ], 
  displayName: [(value) => value.length >= 1, "El nombre es obligatrio."],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmited, setformSubmited] = useState(false);
  
  const {status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status]);

  const {displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid,} = useForm(formData, formValidation);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmited(true);
    
    if (!isFormValid) return;

    dispatch(startCreatingUserAndPassword(formState));
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="texte"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contaseña"
              type="password"
              placeholder="password123"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={1} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} display={!!errorMessage ? '': 'none'}>
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button disabled={ isCheckingAuthentication } type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta? </Typography>
            <Link component={RouterLink} to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
