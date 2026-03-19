import { ProductCard } from './components/ProductCard';
import { products } from './data/products';
import { useEffect, useState } from 'react';
import { useCart } from './hooks/useCart';
import { Navbar } from './components/Navbar';

function App() {
  const { carrito, Sumador, total, finalizarCompra, restador } = useCart();
  const [busqueda, setBusqueda] = useState('');
  const [productosApi, setProductosApi] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => {
        const productosFiltrados = data.products.filter(
          (item) => item.category !== 'groceries'
        );

        const productosLimpios = productosFiltrados.map((item) => {
          return {
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.thumbnail,
            category: item.category,
            description: item.description,
          };
        });

        setProductosApi(productosLimpios);
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  const textSearcher = (e) => setBusqueda(e.target.value);

  const searchedList = productosApi.filter((e) => {
    const nombreEnMinusculas = e.name?.toLowerCase() || '';
    const loQueBusco = busqueda.toLowerCase();
    return nombreEnMinusculas.includes(loQueBusco);
  });

  return (
    <div className='flex flex-col min-h-screen bg-gray-50 text-gray-900'>
      <Navbar busqueda={busqueda} onSearch={textSearcher} />

      {/* Cambiamos a flex-row y quitamos el centrado forzado para que el carrito respire */}
      <main className='flex flex-1 w-full relative'>
        {/* ZONA DE PRODUCTOS: Ocupa todo el ancho menos el espacio del carrito */}
        <div className='flex-1 p-6 lg:pr-[340px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {searchedList.map((e) => (
              <ProductCard onAgregar={Sumador} key={e.id} product={e} />
            ))}
          </div>
        </div>

        {/* CARRITO FIJO: Pegado a la derecha con 'right-0' */}
        <aside className='hidden lg:flex fixed right-0 top-[88px] w-80 bg-white h-[calc(100vh-88px)] shadow-2xl border-l border-gray-100 flex-col'>
          <div className='p-6 flex-1 flex flex-col overflow-hidden'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl font-bold text-gray-800 italic'>
                Tu Selección
              </h2>
              <span className='bg-indigo-600 text-white text-xs font-black px-3 py-1 rounded-full'>
                {carrito.length}
              </span>
            </div>

            {/* Lista con scroll */}
            <div className='flex-1 overflow-y-auto space-y-3 pr-2'>
              {carrito.length === 0 ? (
                <div className='text-center py-20 opacity-30 text-sm'>
                  Tu carrito está vacío
                </div>
              ) : (
                carrito.map((e) => (
                  <div
                    key={e.id}
                    className='flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100'>
                    <div className='flex flex-col max-w-[150px]'>
                      <span className='text-xs font-bold truncate text-gray-700'>
                        {e.name}
                      </span>
                      <span className='text-[10px] text-gray-400 font-semibold'>
                        Cant: {e.cantidad}
                      </span>
                    </div>
                    <div className='flex flex-col items-end'>
                      <span className='text-xs font-black text-indigo-600'>
                        {e.price}€
                      </span>
                      <button
                        onClick={() => restador(e.id)}
                        className='text-[10px] text-red-400 font-bold hover:text-red-600 transition-colors cursor-pointer'>
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer del Carrito (dentro del p-6) */}
            <div className='mt-6 pt-6 border-t border-gray-100'>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-gray-400 font-bold text-sm uppercase'>
                  Total
                </span>
                <span className='text-2xl font-black text-gray-900'>
                  {total.toFixed(2)} €
                </span>
              </div>
              <button
                className='w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer'
                onClick={finalizarCompra}>
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
export default App;
