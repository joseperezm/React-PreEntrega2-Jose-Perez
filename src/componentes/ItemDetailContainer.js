import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'; // Ajusta la ruta según tu estructura de archivos

function ItemDetailContainer(props) {
  const [item, setItem] = useState(null);

  const manejarAgregarAlCarrito = (cantidad) => {
    console.log(`Agregados ${cantidad} elementos al carrito.`);
  };

  useEffect(() => {
    const fetchItem = () => {
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

          // Simulación de obtener un ítem específico (puedes elegir uno manualmente)
          const selectedItem = mockItems[0]; // Seleccionamos el primer ítem

          resolve(selectedItem);
        }, 2000); // Simulamos un retraso de 2 segundos
      });
    };

    fetchItem().then(data => {
      setItem(data);
    });
  }, []);

  if (!item) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <ItemDetail item={item} onAdd={manejarAgregarAlCarrito} />
    </>
  );
}

export default ItemDetailContainer;