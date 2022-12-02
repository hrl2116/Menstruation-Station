import './App.css';
import close from './close.png'

function List({list, removeItem}) {
  return (
    <div className="List">
      {list.map((listItem, index) => (
        <ListItem index={index} songTitle={listItem.songTitle} artistName={listItem.artistName} removeItem={removeItem}></ListItem>
      ))}
    </div>
  );
}

export default List;

function ListItem({index, songTitle, artistName, removeItem}) {
  return (
    <div className="list-item">
      <div className='item-primary-text item-number'>{index + 1}</div>
      <div>
        <div className='item-primary-text'>{songTitle}</div>
        <div className='item-secondary-text'>{artistName}</div>
      </div>
      <div className='item-delete item-secondary-text' onClick={() => removeItem(index)}><img src={close}/></div>
    </div>
  );
}