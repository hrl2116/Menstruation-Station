import React, { useState } from 'react';
import './ListScroll.css';


function ListScroll({setBuilding}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [buttons, setButtons] = useState([
    { id: 1, label: 'Mudd' },
    { id: 2, label: 'Schapiro' },
    { id: 3, label: 'Hamilton' },
    { id: 4, label: 'Butler Library' },
    { id: 5, label: 'Lerner' },
    { id: 6, label: 'Uris' },
    { id: 7, label: 'Lehman' },
    { id: 8, label: 'Noco' },
  ]);

  const [showComponent, setShowComponent] = React.useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredButtons = buttons.filter((button) => button.label.toLowerCase().includes(searchQuery.toLowerCase()));

  
  return (
    <div className="button-list">
      <div className = "box">
      </div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div className = "box">
      </div>

      <div>
        <input className = "search" type="text" placeholder="Search for more stations" value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="scrolly" style={{overflow: 'scroll', height: '150px', width: '500px', display: 'flex', flexDirection: 'column'}}>
        {filteredButtons.map((button) => (
          <button className="wide-button" key={button.id} onClick={ () => setBuilding(button.label)}>{button.label}</button>
        ))}``
      </div>


    </div>
  );
}


export default ListScroll;
