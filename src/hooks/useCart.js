import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useCart = () => {
  const [carrito, setCarrito] = useLocalStorage('mis_juegos', []);

  const Sumador = (productoParaAñadir) => {
    const existe = carrito.find((e) => e.id === productoParaAñadir.id);

    const carritoActualizado = carrito.map((e) =>
      e.id === productoParaAñadir.id ? { ...e, cantidad: e.cantidad + 1 } : e
    );

    if (existe) {
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...productoParaAñadir, cantidad: 1 }]);
    }
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,

    0
  );

  const restador = (id) => {
    const juegoEncontrado = carrito.find((e) => e.id === id);
    if (juegoEncontrado && juegoEncontrado.cantidad > 1) {
      const nuevoCarrito = carrito.map((e) =>
        e.id === id ? { ...e, cantidad: e.cantidad - 1 } : e
      );
      return setCarrito(nuevoCarrito);
    } else {
      eliminarDelCarrito(id);
    }
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);

    return setCarrito(nuevoCarrito);
  };

  const finalizarCompra = () => {
    if (carrito.length === 0) {
      alert('El carrito esta Vacio');

      return;
    } else {
      alert(
        `Compra de ${total.toFixed(2)} hecha con Exito pronto recibiras tus productos  `
      );

      setCarrito([]);
    }
  };
  useEffect(() => {
    localStorage.setItem('mis_juegos', JSON.stringify(carrito));
  }, [carrito]);

  return {
    carrito,
    Sumador,
    total,
    finalizarCompra,
    restador,
  };
};
