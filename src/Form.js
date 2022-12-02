import { useState } from 'react';
import './App.css';

function Form({addItem}) {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");

  function handleSubmit() {
    addItem({ songTitle: songTitle, artistName: artistName});
    setSongTitle("");
    setArtistName("");
    document.getElementById("Form").reset();
  }

  return (
    <form id="Form" className="Form">
      <input className="form-input" type="text" id="name" placeholder="Song Title" onChange={(e) => setSongTitle(e.target.value)}></input>
      <input className="form-input" type="text" id="name" placeholder="Artist" onChange={(e) => setArtistName(e.target.value)}></input>
      <button className="form-button" type="button" onClick={() => handleSubmit()}>ADD</button>
    </form>
  );
}

export default Form;