import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          const mockItems = [
            {
              id: 1,
              name: 'Kimono blanco',
              price: 10,
              description: 'Kimono blanco para artes marciales',
              image: 'https://placehold.co/600x400/f6f4f1/black?text=Kimono+Blanco'
            },
            {
              id: 2,
              name: 'Kimono azul',
              price: 20,
              description: 'Kimono azul para artes marciales',
              image: 'https://placehold.co/600x400/blue/white?text=Kimono+Azul'
            },
            {
              id: 3,
              name: 'Kimono negro',
              price: 30,
              description: 'Kimono negro para artes marciales',
              image: 'https://placehold.co/600x400/black/white?text=Kimono+Negro'
            }
          ];          
          resolve(mockItems);
        }, 2000);
      });
    };

    fetchItems().then(data => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-center mb-5">{props.greeting}</h2>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;