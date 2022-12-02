import './App.css';
import List from './List';
import Form from './Form';
import { useEffect, useState } from 'react';

const initialSongList = [
  {
    songTitle: "Fireworks", 
    artistName: "Katy Perry" 
  }, 
  { 
    songTitle: "Party In The USA", 
    artistName: "Miley Cyrus" 
  }, 
  { songTitle: "Dynamite", 
    artistName: "Taio Cruz" 
  }]

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
      <div className="Header">My Favorite Songs</div>
      <Form addItem={handleAdd}/>
      <List list={songList} removeItem={handleDelete}/>
    </div>
  );
}

export default App;