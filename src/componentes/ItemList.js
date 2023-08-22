import Item from './Item.js';

const ItemList = ({ items }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {items.map(item => (
        <div key={item.id} className="mb-3">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
