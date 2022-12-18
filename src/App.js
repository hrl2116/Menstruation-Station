import './App.css';
import List from './List';
import Form from './Form';
import Map from './Map';
import SearchBar from './SearchBar';
import ListScroll from "./ListScroll";
import React, { useRef, useEffect, useState } from 'react';
import Shapiro from "./Shapiro";



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