import { useEffect , useState } from 'react';
import { Header , Map , List} from './components';
import {CssBaseline, Grid} from '@material-ui/core'
import './App.css';
import {getPlacesData} from './api/index'




function App() {
const [places , setPlaces] = useState([]);
const [coordinates, setCoordinates] = useState({})
const [Bounds, setBounds] = useState({})

useEffect(() => {
  navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}}) => {
    setCoordinates({lat : latitude , lng : longitude})
  })
}, [])

 useEffect(() => {
    getPlacesData(Bounds.sw, Bounds.ne)
    .then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [coordinates,Bounds]);


  return (
    <div className="App">
       <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:"100%"}}>
          <Grid item xs={12} md={4} >
            <List places={places}/>
          </Grid>
          <Grid item xs={12} md={8} >
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
