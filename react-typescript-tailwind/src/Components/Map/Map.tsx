import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 34.037338,
  lng: 74.794342
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={apiKey as any}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Map markers or other components can be added here */}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;
