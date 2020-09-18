import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Typography, Grid} from "@material-ui/core";
import UserIcon from "@material-ui/icons/Person";


const PRMap = (props) =>{
    const UserPin = () =>(
        <div className = "pin"><UserIcon style = {{height: '35px', width: '35px'}}></UserIcon>
        <Typography>You Are Here</Typography> 
        </div>
    )
    return(
        <Grid item>
            <div style = {{height: '50vh', width: '100%'}}>
                <GoogleMapReact
                 bootstrapURLKeys = {{key:'AIzaSyBmgOiH7X5LLYQobkagdguj77-wMrojGDI'}}
                 defaultCenter = {{lat: props.userLat, long: props.userLong}}
                 defaultZoom = {16} 
                 yesIWantToUseGoogleMapApiInternals  
                 >

                 </GoogleMapReact>
            </div>
        </Grid>    
        );



};
export default PRMap;