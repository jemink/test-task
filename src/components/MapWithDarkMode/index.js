import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon 
} from 'react-google-maps';
import MarkerIcon from "../../assets/images/mapsMarker.png";
const mapStyles = require('../../assets/styles/google_maps_dark_mode.json');

const defaultCenter = {
  lat: 40.7484445,
  lng: -73.9878584
};

// Google Map component with Dark mode
const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={defaultCenter}
      defaultOptions={{
        disableDefaultUI: true,
        draggable: true,
        keyboardShortcuts: false,
        scaleControl: true,
        scrollwheel: true,
        styles: mapStyles
      }}
    >
      <Marker
        icon={MarkerIcon}
        position={props.markerPosition}
      />
      <Polygon
        path={props.polygonCoords}
        key={1}
        options={{
            fillColor: "#000",
            fillOpacity: 0.4,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 1
        }}
        onClick={() => {
            console.log("ahmet")
        }}/>
    </GoogleMap>
  ))
);

export default GoogleMapComponent;

