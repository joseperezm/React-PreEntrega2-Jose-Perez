import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const aumentarCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const confirmarCompra = () => {
    onAdd(cantidad);
  };

  return (
    <div>
      <div>
        <button onClick={disminuirCantidad}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentarCantidad}>+</button>
      </div>
      <button onClick={confirmarCompra} disabled={stock === 0}>
        Confirmar compra
      </button>
    </div>
  );
};

export default ItemCount;