
import {AppBar, Toolbar, Typography} from '@material-ui/core'

import useStyles from './Styles';

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