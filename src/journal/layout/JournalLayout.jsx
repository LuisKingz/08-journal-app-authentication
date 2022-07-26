import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";

const drawerwith = 240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}}>
        {/* NavBar */}
        <NavBar drawerwith={ drawerwith }/>
        {/* SideBar */}
        <SideBar drawerwith={ drawerwith } />
        <Box component='main'
        sx={{ flexGrow: 1, p:3}}>

            <Toolbar />
            { children }

        </Box>

    </Box>
  )
}
