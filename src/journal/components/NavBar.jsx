import { MenuOpenOutlined, LogoutOutlined } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const NavBar = ({ drawerwith = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerwith}px)` },
        ml: { sm: `${drawerwith}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOpenOutlined />
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems='center'>
          <Typography variant="h6" noWrap component='div'>JournalApp</Typography>
          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
