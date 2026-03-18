import { ProductCard } from './components/ProductCard';
import { products } from './data/products';
import { useState } from 'react';
import { useCart } from './hooks/useCart';
import { Navbar } from './components/Navbar';

function App() {
  const { carrito, Sumador, total, finalizarCompra, restador } = useCart();
  const [busqueda, setBusqueda] = useState('');

  const textSearcher = (e) => {
    setBusqueda(e.target.value);
  };

  const searchedList = products.filter((e) => {
    const nombreEnMinusculas = e.name.toLowerCase();
    const loQueBusco = busqueda.toLowerCase();

    return nombreEnMinusculas.includes(loQueBusco);
  });

  return (
    <div className='flex flex-col min-h-screen bg-gray-900'>
      <Navbar busqueda={busqueda} onSearch={textSearcher} />

      <div className='relative flex flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 flex-1 pr-80'>
          {searchedList.map((e) => (
            <ProductCard onAgregar={Sumador} key={e.id} product={e} />
          ))}
        </div>

        <div className='fixed right-4 top-32 w-72 bg-gray-900 p-4 rounded-2xl shadow-2xl flex flex-col h-[75vh] border border-gray-800'>
          <h1 className='bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full text-center w-fit mx-auto mb-4'>
            🛒 Juegos Seleccionados: {carrito.length}
          </h1>

          <div className='flex-1 overflow-y-auto flex flex-col gap-2 pr-1'>
            {carrito.map((e, id) => (
              <div
                key={id}
                className='bg-gray-800 text-white rounded-xl p-3 flex justify-between items-center shadow-md hover:scale-105 transition-transform duration-200'>
                <span className='font-semibold flex flex-col'>
                  {e.name}
                  <div className='text-xs mt-1 text-gray-400'>
                    {' '}
                    Cant: {e.cantidad}
                  </div>
                </span>

                <div className='flex flex-col items-end gap-1'>
                  <span className='text-green-400 font-bold'>{e.price} €</span>
                  <button
                    onClick={() => restador(e.id)}
                    className='opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-150'>
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-4 flex flex-col gap-2 pt-4 border-t border-gray-800'>
            <h3 className='text-lg font-bold text-green-400 text-center'>
              Total: {total.toFixed(2)} €
            </h3>
            <button
              className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-xl cursor-pointer w-full transition-colors'
              onClick={finalizarCompra}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
