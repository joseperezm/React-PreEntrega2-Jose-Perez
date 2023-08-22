import ItemCount from './ItemCount.js';

const manejarAgregarAlCarrito = (cantidad) => {
    console.log(`Agregados ${cantidad} elementos al carrito.`);
  };
  
const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Descripción: {item.description}</p>
      <img src={item.image} alt={item.name} style={{ maxWidth: '200px' }} />
      {
        <ItemCount initial={1} stock={10} onAdd={manejarAgregarAlCarrito} />
      }
    </div>
  );
};

export default ItemDetail;