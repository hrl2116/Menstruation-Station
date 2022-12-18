import React, { useState } from 'react';
import './ListScroll.css';


function ListScroll({setBuilding}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [buttons, setButtons] = useState([
    { id: 1, label: 'Mudd Hall' },
    { id: 2, label: 'Schapiro' },
    { id: 3, label: 'Uris' },
    { id: 4, label: 'Butler Library' },
    { id: 5, label: 'Lerner' },
    { id: 6, label: 'Hamilton' },
    { id: 7, label: 'Lehman' },
    { id: 8, label: 'Noco' },
    { id: 9, label: 'Schermerhorn' },
    { id: 10, label: 'John Jay' },
    { id: 11, label: 'CEPSR' },
    { id: 12, label: 'Wallach' },
    { id: 13, label: 'International Affairs Building' }
  ]);

  const [showComponent, setShowComponent] = React.useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredButtons = buttons.filter((button) => button.label.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleClick = (id) => {
    console.log(`Button ${id} was clicked`);
  };
  
  return (
    <div className="button-list">
      <div className = "box">
      </div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className = "box">
      </div>

      <div>
        <input className = "search" type="text" placeholder="Search for more stations" value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="scrolly" style={{overflow: 'scroll', height: '350px', display: 'flex', flexDirection: 'column'}}>
        {filteredButtons.map((button) => (
          <button className="wide-button" key={button.id} onClick={ () => setBuilding(button.label)}>{button.label}</button>
        ))}
        {/* <img src="/Users/manasisoman/Menstruation-Station/src/search icon.png" alt="Search" style={{ width: '100px', height: '100px' }} /> */}

      </div>


    </div>
  );
}


export default ListScroll;
