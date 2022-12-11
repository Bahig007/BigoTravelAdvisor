import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';


import makeStyles from './Styles';
const PlaceDetailes = ({places}) => {
    const classes = makeStyles();
    console.log(places)
    return ( 
       
        <Card elevation={6}>
            <CardMedia
                style={{height: 350}}
                image={places.photo ? places.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={places.name}
            />
                <CardContent>
                <Typography gutterBottom variant="h5">{places.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{places.price_level} </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{places.ranking} </Typography>
                </Box>
                {places?.cuisine?.map(({name}) => (
                        <Chip key={name} size='small' label={name} className={classes.chip}/>
                ))
                }
                {places?.address && (
                    <Typography gutterBottom variant="subtitle2" color='textSecondary' className={classes.subtitle} >
                        <LocationOnIcon/> {places.address}
                    </Typography>
                )}
                {places?.phone && (
                    <Typography gutterBottom variant="subtitle2" color='textSecondary' className={classes.spacing} >
                        <PhoneIcon/> {places.phone}
                    </Typography>
                )}
                <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(places.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(places.website, '_blank')}>
                    Website
                </Button>
                </CardActions>
                </CardContent>
        </Card>
     );
}
 
export default PlaceDetailes;