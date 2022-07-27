import { Button, Grid, TextField, Typography } from "@mui/material"
import{ SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from "../journal/components"


export const NoteView = () => {
  return (
    <Grid className="animate_animated animate_fadeIn animate_faster"
    container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={35} fontWeight='light'>28 / 05/ 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary'>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder="Ingrese un titulo"
                label="Título"
                sx={{ border:'none', mb: 1 }}
            />
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="¿Te sucedió algo hoy?"
                minRows={ 5 }
            />
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
