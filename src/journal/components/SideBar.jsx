import { useSelector } from "react-redux"
import { TurnedInNot } from "@mui/icons-material"
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"

export const SideBar = ({ drawerwith = 240}) => {
    const{ displayName } = useSelector(state => state.auth)
  return (
    <Box component='nav' sx={{width: { sm: drawerwith, flexShrink:{ sm: 0 }}}}>
        <Drawer variant="permanent" //Temporary
        open
        sx={{
            display:{ xs:'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerwith}
        }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                ['Enero','Febrero' ].map(text =>(
                    <ListItem key={ text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={ text }/>
                                <ListItemText secondary={ 'Duis adipisicing anim minim excepteur in id eu aliquip.'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
                }
            </List>
        </Drawer>
    </Box>
  )
}

