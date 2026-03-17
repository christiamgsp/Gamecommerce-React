import { ProductCard } from './components/ProductCard';
import { products } from './data/products';
import { useState } from 'react';

function App() {
  const [carrito, setCarrito] = useState([]);

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

  const totalCantidad = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );
  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );
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
        `Compra de ${total} hecha con Exito pronto recibiras en tu mail los codigos `
      );
      setCarrito([]);
    }
  };

  return (
    <div className='relative flex'>
      {/* Productos */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 flex-1 pr-80'>
        {products.map((e) => (
          <ProductCard onAgregar={Sumador} key={e.id} product={e} />
        ))}
      </div>

      {/* Sidebar fijo */}
      <div className='fixed right-4 top-20 w-72 bg-gray-900 p-4 rounded-2xl shadow-xl flex flex-col h-[80vh]'>
        {/* Contador */}
        <h1 className='bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full text-center w-fit mx-auto mb-4'>
          🛒 Juegos Seleccionados: {carrito.length}
        </h1>

        {/* Lista de productos con scroll */}
        <div className='flex-1 overflow-y-auto flex flex-col gap-2 pr-1'>
          {carrito.map((e, index) => (
            <div
              key={index}
              className='bg-gray-800 text-white rounded-xl p-3 flex justify-between items-center shadow hover:scale-105 transition-transform duration-200'>
              <span className='font-semibold flex flex-col'>
                {e.name}
                <div className='text-xs mt-1'> {e.cantidad}</div>
              </span>

              <div className='flex flex-col items-end gap-1'>
                <span className='text-green-400 font-bold'>{e.price} €</span>

                <button
                  onClick={() => eliminarDelCarrito(e.id)}
                  className='opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-150'>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total y Vaciar Carrito */}
        <div className='mt-4 flex flex-col gap-2'>
          <h3 className='text-lg font-bold text-green-400 text-center'>
            Total a pagar: {total.toFixed(2)} €
          </h3>

          <button
            className='bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded cursor-pointer w-full'
            onClick={finalizarCompra}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
