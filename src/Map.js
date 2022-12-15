import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaHJsMjExNiIsImEiOiJjbGI1emo5dmEwN2lsM3d0NWt0ZGI0OTZhIn0.y4M3jZNZ_FzTrVCpoz6cTg';

function Map() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-73.962227); // change these to fix initial viewpoint
const [lat, setLat] = useState(40.807672);
const [zoom, setZoom] = useState(15);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/hrl2116/clb608t2i000815sf7b80g403',
    center: [lng, lat],
    zoom: zoom
    });
});

return (
    <div>
    <div ref={mapContainer} className="map-container" />
    </div>
    );
}

export default Map;