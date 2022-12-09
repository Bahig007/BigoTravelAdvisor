import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/';

import makeStyles from './Styles';

const Map = ({setCoordinates,setBounds,coordinates}) => {
    const classes = makeStyles();
    const isMobile = useMediaQuery('(min-width:600px)') ;

    return ( 
        <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBDcd5wN-Q0Qlxe-2y3xJRZuyesXsvBhEM' }}
          defaultCenter={coordinates}
          defaultZoom={14}
          center={coordinates}
          margin={[50,50,50,50]}
          /*options={" "}*/
          onChange={(e) => {
            setCoordinates({lat: e.center.lat , lng : e.center.lng})
            setBounds({ ne:e.marginBounds.ne , sw:e.marginBounds.sw})
          }}
   /* onChildClick={" "}*/
        >
          
        </GoogleMapReact>
        

        </div>
     );
}
 
export default Map;