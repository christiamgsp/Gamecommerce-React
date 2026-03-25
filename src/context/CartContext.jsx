import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; // Importa tu hook

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🌟 AQUÍ ESTÁ EL CAMBIO MÁGICO:
  // En lugar de useState([]), usamos tu hook:
  const [carrito, setCarrito] = useLocalStorage('carrito_smartshop', []);

  const Sumador = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const RestadorUno = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const restador = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const finalizarCompra = () => setCarrito([]);

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        total,
        Sumador,
        RestadorUno,
        restador,
        finalizarCompra,
      }}>
      {children}
    </CartContext.Provider>
  );
};
