import './App.css';
import React, { useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Building name..."
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
}


// class Infopage extends React.Component {
//     state = {
//       searchText: ''
//     };
  
//     handleChange = event => {
//       this.setState({ searchText: event.target.value });
//     };
  
//     render() {
//       return (
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.state.searchText}
//           onChange={this.handleChange}
//         />
//       );
//     }
    
// }
  

export default SearchBar;