import { useSelector } from "react-redux";
import { ToastContainer,Slide } from 'react-toastify'
import { Drawer, Box, Toolbar, Typography, Divider, List } from "@mui/material";
import { SideBarItem } from "./";

export const SideBar = ({ drawerwith = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);


  return (
    <Box

      component="nav"
      sx={{ width: { sm: drawerwith, flexShrink: { sm: 0 } } }}
    >
      <Drawer
        variant="permanent" //Temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerwith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
      <ToastContainer draggable={true} transition={Slide}/>
    </Box>
  );
};
