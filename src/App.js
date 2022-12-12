import { useEffect , useState } from 'react';
import { Header , Map , List} from './components';
import {CssBaseline, Grid, useForkRef} from '@material-ui/core'
import './App.css';
import {getPlacesData} from './api/index'




function App() {
const [places , setPlaces] = useState([]);
const [coordinates, setCoordinates] = useState({})
const [Bounds, setBounds] = useState({})
const [childClicked, setChildClicked] = useState('')
const [isLoading, setIsLoading] = useState(false);
const [type,setType] = useState('restaurants');
const [rating,setRating] = useState('');
const [filterdPlaces , setFilterdPlaces] = useState([]);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}}) => {
    setCoordinates({lat : latitude , lng : longitude})
  })
}, [])
useEffect(() => {
      const filterdPlaces = places.filter((place) => place.rating > rating )
      setFilterdPlaces(filterdPlaces)
},[rating]);

 useEffect(() => {
    setIsLoading(true)
    getPlacesData(type,Bounds.sw, Bounds.ne)
    .then((data) => {
      setPlaces(data)
      setIsLoading(false)
      setFilterdPlaces([])
    })
  }, [type,coordinates,Bounds]);


  return (
    <div className="App">
       <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:"100%"}}>
          <Grid item xs={12} md={4} >
            <List
            places={filterdPlaces.length ? filterdPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8} >
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filterdPlaces.length ? filterdPlaces : places} setChildClicked={setChildClicked}/>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
