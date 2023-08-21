import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList'; // Asegúrate de tener el archivo ItemList.js en tu proyecto

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const manejarAgregarAlCarrito = (cantidad) => {
    // Aquí podrías realizar la lógica para agregar al carrito
    console.log(`Agregados ${cantidad} elementos al carrito.`);
  };

  useEffect(() => {
    // Simulación de llamada asincrónica a una API ficticia
    const fetchItems = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          const mockItems = [
            { id: 1, name: 'Producto 1', price: 10, description: 'Descripción del producto 1' },
            { id: 2, name: 'Producto 2', price: 20, description: 'Descripción del producto 2' },
            { id: 3, name: 'Producto 3', price: 30, description: 'Descripción del producto 3' }
          ];
          resolve(mockItems);
        }, 2000); // Simulamos un retraso de 2 segundos
      });
    };

    fetchItems().then(data => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-center my-5">{props.saludo}</h2>
      <ItemCount initial={1} stock={10} onAdd={manejarAgregarAlCarrito} />
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;