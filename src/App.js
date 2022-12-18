import './App.css';
import List from './List';
import Form from './Form';
import Map from './Map';
import SearchBar from './SearchBar';
import ListScroll from "./ListScroll";
import React, { useRef, useEffect, useState } from 'react';

// const initialSongList = [
//   ]

// const buildings = [
//   {name: 'Mudd'},
//   {name: 'Schapiro'},
//   {name: 'Hamilton'},
//   {name: 'Butler Library'},
//   {name: 'Lerner Hall'},
//   {name: 'Uris'}
// ];

// const buttons = [
//   {id: 1,label: 'Mudd'},
//   {id: 2,label: 'Schapiro'},
//   {id: 3,label: 'Hamilton'},
//   {id: 4,label: 'Butler Library'},
//   {id: 5,label: 'Lerner Hall'},
//   {id: 6,label: 'Uris'}
// ];


function App() {
  // const [songList, setSongList] = useState(initialSongList);

  // const [label, setName] = useState('');

  // const [foundUsers, setFoundUsers] = useState(buttons);

  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== '') {
  //     const results = buttons.filter((user) => {
  //       return user.label.toLowerCase().startsWith(keyword.toLowerCase());
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFoundUsers(results);
  //   } else {
  //     setFoundUsers(buttons);
  //     // If the text field is empty, show all users
  //   }

  //   setName(keyword);
  // };

  // const buttons = [
  //   {label: 'Mudd'},
  //   {label: 'Schapiro'},
  //   {label: 'Hamilton'},
  //   {label: 'Butler Library'},
  //   {label: 'Lerner Hall'},
  //   {label: 'Uris'}
  // ];


  // useEffect(() => {

  // },[])

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
      <div className="Header">Menstruation Station</div>
      
      <Map />
      {/* <SearchBar /> */}
      <ListScroll />


    </div>



  
  );
}

export default App;