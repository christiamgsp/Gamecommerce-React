import { ProductCard } from './components/ProductCard';
import { useContext, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Toaster } from 'sonner';
import { SkeletonCard } from './components/SkeletonCard';
import { Routes, Route } from 'react-router-dom';
import { CarritoPage } from './pages/CarritoPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartContext } from './context/CartContext';
import { NotFound } from './pages/NotFound';

const formaterProducto = (apiItem) => ({
  id: apiItem.id,
  name: apiItem.title,
  price: apiItem.price,
  category: apiItem.category,
  description: apiItem.description,
  image: apiItem.thumbnail,
});

function App() {
  console.log('Versión Final v2');
  const [busqueda, setBusqueda] = useState('');
  const [productosApi, setProductosApi] = useState([]);
  const { Sumador } = useContext(CartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=300')
      .then((res) => res.json())
      .then((data) => {
        const productosFiltrados = data.products.filter(
          (item) => item.category !== 'groceries'
        );
        const productosLimpios = productosFiltrados.map(formaterProducto);
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
      <Toaster richColors position='top-center' />
      <Navbar busqueda={busqueda} onSearch={textSearcher} />

      <main className='flex flex-1 w-full relative'>
        <div className='flex-1 p-6'>
          <Routes>
            <Route
              path='/'
              element={
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                  {productosApi.length === 0 ? (
                    [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
                  ) : searchedList.length > 0 ? (
                    searchedList.map((e) => (
                      <ProductCard onAgregar={Sumador} key={e.id} product={e} />
                    ))
                  ) : (
                    <div className='col-span-full py-20 text-center bg-white rounded-3xl shadow-sm border border-dashed border-gray-200'>
                      <h3 className='text-xl font-bold text-gray-800'>
                        No hemos encontrado "{busqueda}"
                      </h3>
                      <button
                        onClick={() => setBusqueda('')}
                        className='mt-6 text-indigo-600 font-bold hover:underline cursor-pointer'>
                        Limpiar búsqueda
                      </button>
                    </div>
                  )}
                </div>
              }
            />
            <Route path='/carrito' element={<CarritoPage />} />
            <Route path='/producto/:id' element={<ProductDetailPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
