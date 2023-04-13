import React from 'react';

import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFoYWJ1YnNha2kiLCJhIjoiY2xnZmFtMXowMDgwcjNubHF6OGc2b2xvMCJ9.x3p7ZPHVVd518UFX5d_t8g';

const MapLocation = () => {
    return (
        <Map keyboard
            initialViewState={{
                latitude: 23.90702858280892,
                longitude: 90.37843423588089,
                zoom: 14
            }}
            style={{ width: "100%", height: 600 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}

        >
            <Marker longitude={90.37843423588089} latitude={23.90702858280892} color="red" />
        </Map>
    );
};

export default MapLocation;