import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PRMap from "./PRMap.js";

const useStyles = makeStyles((theme) => ({
  container: {
    //CSS GOES HERE
  },
}));

const App = (props) => {
  // const classes = useStyles();
  // const apiLink = "your api link here";
  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);
  const getUserPosition = () => {
    // example to show how to retrieve current user position.
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLat(position.coords.latitude);
      setUserLong(position.coords.longitude);
    });
  };

  getUserPosition();

  return <PRMap userLat={userLat} userLong={userLong}></PRMap>;
};
export default App;
