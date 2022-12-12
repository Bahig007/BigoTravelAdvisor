import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './Styles';
import { useState } from 'react';
const Header = () => {
    const classes = useStyles();


    return ( 
        <AppBar   position="static"  >
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    BIGO Travel Advisor
                </Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;