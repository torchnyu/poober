import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Grid } from "@material-ui/core";
import UserIcon from "@material-ui/icons/Person";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const PRMap = (props) => {
  const UserPin = () => (
    <div className="pin">
      <UserIcon style={{ height: "35px", width: "35px" }}></UserIcon>
      <Typography>You Are Here</Typography>
    </div>
  );

  const containerStyle = {
    width: "100%",
    height: "50vh",
  };

  const defaultCenter = {
    lat: 40.730816,
    lng: -73.997438,
  };

  const center = {
    lat: props.userLat,
    lng: props.userLong,
  };

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
      name: "Location 3",
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
      {/* <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAtXV6jGE0cBsoBSSIh7P7-AO6oYx-wi-g" }}
          defaultCenter={{ lat: 40.730816, lng: -73.997438 }}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
        ></GoogleMapReact>
      </div> */}

      <LoadScript googleMapsApiKey="AIzaSyAtXV6jGE0cBsoBSSIh7P7-AO6oYx-wi-g">
        <GoogleMap
          mapContainerStyle={containerStyle}
          defaultCenter={defaultCenter}
          center={center}
          zoom={16}
        >
          {locations.map((item) => {
            return <Marker key={item.name} position={item.location} />;
          })}

          {/* {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
          )} */}
        </GoogleMap>
      </LoadScript>
    </Grid>
  );
};
export default PRMap;
