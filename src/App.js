import { Header , Map , List} from './components';
import {CssBaseline, Grid} from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div className="App">
       <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:"100%"}}>
          <Grid item xs={12} md={4} >
            <List/>
          </Grid>
          <Grid item xs={12} md={8} >
          <Map/>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
