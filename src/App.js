import './App.css';
import List from './List';
import Form from './Form';
import Map from './Map';
import SearchBar from './SearchBar';
import ListScroll from "./ListScroll";
import Alert from './Alert';
import React, { useRef, useEffect, useState } from 'react';




function App() {
  

  return (
    <div className="App">
      <Map />
      <ListScroll />

      {/* <Shapiro /> */}

    </div>



  
  );
}

export default App;