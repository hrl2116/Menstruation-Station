import './App.css';
import List from './List';
import Form from './Form';
import Map from './Map';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaHJsMjExNiIsImEiOiJjbGI1emo5dmEwN2lsM3d0NWt0ZGI0OTZhIn0.y4M3jZNZ_FzTrVCpoz6cTg';

const initialSongList = [
  ]

function App() {
  const [songList, setSongList] = useState(initialSongList);

  useEffect(() => {

  },[])

  function handleAdd(newItem) {
    const newList = [...songList, newItem];

    setSongList(newList);
  }

  function handleDelete(itemIndex) {
    const newList = songList.slice(0,itemIndex).concat(songList.slice(itemIndex + 1));

    setSongList(newList);
  }

  return (
    <div className="App">
      <div className="Header">Menstruation Station</div>
      <Map />
      <Form addItem={handleAdd}/>
      <List list={songList} removeItem={handleDelete}/>
    </div>
  );
}

export default App;