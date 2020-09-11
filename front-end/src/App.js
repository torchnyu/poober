import React, {useState, useEffect} from 'react';
import {Typography, Grid, Fade, makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    //CSS GOES HERE
  }
}));

const App = (props) => {
  const classes = useStyles();
  const apiLink = 'your api link here';
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const getUserPosition = () => { // example to show how to retrieve current user position.
    navigator.geolocation.getCurrentPosition(function(position) {
      setUserLat(position.coords.latitude);
      setUserLon(position.coords.longitude);
    });
  }
  return (
    <Typography> Hello World </Typography>
  )
  
}
export default App;

