import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PRMap from "./PRMap.js";
import AddLoc from "./AddLoc.js";

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

  useEffect(() => {
    if (userLat == null) {
      getUserPosition();
    }
  });

  // getUserPosition();
  if (userLat != null) {
    return (
      // <div>
      //   <PRMap userLat={userLat} userLong={userLong}></PRMap>
      // </div>
      <AddLoc></AddLoc>
    );
  } else {
    return <Typography>Not loaded first!</Typography>;
  }
};
export default App;
