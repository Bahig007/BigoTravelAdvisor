import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import makeStyles from './Styles';

const Map = () => {
    const classes = makeStyles();
    const isMobile = useMediaQuery('(min-width:600px)') ;
    const coordinates = {lat:0 , lng :0} ;
    return ( 
        <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBDcd5wN-Q0Qlxe-2y3xJRZuyesXsvBhEM' }}
          defaultCenter={coordinates}
          defaultZoom={coordinates}
        >
          
        </GoogleMapReact>
        <h1>Map</h1>

        </div>
     );
}
 
export default Map;