import './App.css';
import List from './List';
import Form from './Form';
import Map from './Map';
import SearchBar from './SearchBar';
import ListScroll from "./ListScroll";
import Alert from './Alert';
import React, { useRef, useEffect, useState } from 'react';
import Shapiro from "./Shapiro";

const initialSongList = [
  ]

function App() {
  const [songList, setSongList] = useState(initialSongList);

  const buttons = [
    {label: 'Mudd'},
    {label: 'Schapiro'},
    {label: 'Hamilton'},
    {label: 'Butler Library'},
    {label: 'Lerner Hall'},
    {label: 'Uris'}
  ];

  const [showPopup, setShowPopup] = useState(false);

  function handleButtonClick() {
    // Toggle the showPopup state when the button is clicked
    setShowPopup(!showPopup);
  }


  useEffect(() => {

  },[])

  // function handleAdd(newItem) {
  //   const newList = [...songList, newItem];

  //   setSongList(newList);
  // }

  // function handleDelete(itemIndex) {
  //   const newList = songList.slice(0,itemIndex).concat(songList.slice(itemIndex + 1));

  //   setSongList(newList);
  // }

  

  return (
    <div className="App">
      <Map />
      <Shapiro />
      <SearchBar />
      <ListScroll buttons={buttons}/>
      {/* <Form addItem={handleAdd}/> */}
      {/* <List list={songList} removeItem={handleDelete}/> */}
    
    <button onClick={handleButtonClick}>Show pop-up</button>
    {/* Render the pop-up screen if the showPopup state is true */}
      <div className="popup">
        <h3>Thanks for your report! </h3>
        <p>Facilities has been notified and will restock this station as soon as possible</p>
        <button className="xButton"onClick={handleButtonClick}>x</button>
      </div>
    )
  </div>

  );
}

export default App;