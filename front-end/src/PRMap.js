import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Grid } from "@material-ui/core";
import UserIcon from "@material-ui/icons/Person";
import LocationIcon from "@material-ui/icons/LocationOn";

const PRMap = (props) => {
  const UserPin = () => (
    <div className="pin">
      <UserIcon style={{ height: "35px", width: "35px" }}></UserIcon>
      <Typography>You Are Here</Typography>
    </div>
  );

  const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationIcon style={{ height: "35px", width: "35px" }}></LocationIcon>
      <Typography>{text}</Typography>
    </div>
  );

  const locations = [
    {
      name: "Bobst",
      location: {
        lat: 40.729787,
        lng: -73.997197,
      },
    },
    {
      name: "Kimmel",
      location: {
        lat: 40.730023,
        lng: -73.997865,
      },
    },
    {
      name: "Weinstein",
      location: {
        lat: 40.731121,
        lng: -73.995027,
      },
    },
  ];

  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  // console.log(props.userLat);

  return (
    <Grid item>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAtXV6jGE0cBsoBSSIh7P7-AO6oYx-wi-g" }}
          defaultCenter={{ lat: props.userLat, lng: props.userLong }}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
        >
          <UserPin lat={props.userLat} lng={props.userLong}></UserPin>
          {locations.map((location, index) => {
            return (
              <LocationPin lat={location.location.lat} lng={location.location.lng} text={location.name}></LocationPin>
            );
          })}
        </GoogleMapReact>
      </div>
    </Grid>
  );
};
export default PRMap;
