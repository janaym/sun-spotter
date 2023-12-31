import React from "react";
import { GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '24px'
}

const waterColor = [
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color: '#a3cde3' }
    ]
  }
];

//static for now

export default function OneSpotMap (props) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCZ4m4MUuWXxIlkrriyTTQp4f3TRby2yes',
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  const center = {
    lat: Number(props.lat),
    lng: Number(props.lng)
  };
  

  return (
    <div className="one-spot__map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options = {{
          streetViewControl: true,
          fullscreenControl: false,
          zoomControl: false,
          mapTypeControl: false,
          styles: waterColor 
        }}
      > 
        <MarkerF position={{ lat: Number(center.lat), lng: Number(center.lng) }} icon={{ url: (require('../assets/pins/yellow.svg')).default }} />
      </GoogleMap>
    </div>
  );
};