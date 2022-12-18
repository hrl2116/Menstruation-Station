//import React from 'react';

//import React from 'react';

// const MyButton = ({ className }) => {
//   return (
//     <button className={className}>
//       Click me!
//     </button>
//   );
// };

// const ListScroll = () => {
//   return (
//     <div className="scrollable-button-list">
//       <MyButton className="wide-button" />
//       <MyButton className="wide-button" />
//       <MyButton className="wide-button" />
//     </div>
//   );
// };

// export default ListScroll;



// function ListScroll(props) {
//   const buttons = props.buttons;

  // return (
  //   <div classname = "scrollable-button-list" style={{overflow: 'scroll', height: '90px', display: 'flex', flexDirection: 'column'}}>
  //     {buttons.map((button, index) => (
  //       <button className="wide-button" key={index}>{button.label}</button>))}
  //   </div>
  // );
// }

// import React, { useState } from 'react';
// import './ListScroll.css';

// function ListScroll() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [buttons, setButtons] = useState([
//     { id: 1, label: 'Mudd' },
//     { id: 2, label: 'Schapiro' },
//     { id: 3, label: 'Hamilton' },
//     { id: 4, label: 'Butler Library' },
//     { id: 5, label: 'Lerner' },
//     { id: 6, label: 'Uris' },
//     { id: 7, label: 'Lehman' },
//     { id: 8, label: 'Noco' },
//   ]);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   }

//   const filteredButtons = buttons.filter((button) => button.label.toLowerCase().includes(searchQuery.toLowerCase()));

//   return (
//     <div className="scrollable-button-list" style={{overflow: 'scroll', height: '90px', display: 'flex', flexDirection: 'column'}}>
//       <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
//       {filteredButtons.map((button) => (
//         <button key={button.id}>{button.label}</button>
//       ))}
//     </div>
//   );
// }


import React, { useState } from 'react';
import './ListScroll.css';

function ListScroll() {
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredButtons = buttons.filter((button) => button.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="button-list">
      <div>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="scrolly" style={{overflow: 'scroll', height: '100px', width: '500px', display: 'flex', flexDirection: 'column'}}>
        {filteredButtons.map((button) => (
          <button className="wide-button" key={button.id}>{button.label}</button>
        ))}
      </div>
    </div>
  );
}


export default ListScroll;
