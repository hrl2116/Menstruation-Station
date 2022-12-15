import React from 'react';

function ListScroll(props) {
  const buttons = props.buttons;

  return (
    <div style={{overflow: 'scroll', height: '90px', display: 'flex', flexDirection: 'column'}}>
      {buttons.map((button, index) => (
        <button key={index}>{button.label}</button>
      ))}
    </div>
  );
}

export default ListScroll;
