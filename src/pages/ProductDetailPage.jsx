import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { IAAssistant } from '../components/IAAssistant';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const { Sumador } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Producto no encontrado');
        }
        return res.json();
      })
      .then((data) => setProducto(data))
      .catch((error) => {
        console.error(error);

        navigate('/ruta-que-no-existe');
      });
  }, [id, navigate]);

  if (!producto)
    return <p className='p-20 text-center font-bold'>Cargando producto...</p>;

  const manejarSuma = () => {
    const item = {
      ...producto,
      name: producto.title,
      image: producto.thumbnail,
    };
    Sumador(item);
    toast.success(`${item.name} añadido correctamente`);
  };

  return (
    <div className='p-10 max-w-6xl mx-auto'>
      <Link
        to='/'
        className='inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors mb-8 group'>
        <span className='group-hover:-translate-x-1 transition-transform'>
          ←
        </span>
        Volver a la tienda
      </Link>

      <div className='flex flex-col lg:flex-row gap-12 items-start'>
        {/* Columna Izquierda: Imagen */}
        <div className='flex-1 w-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100'>
          <img
            src={producto.thumbnail}
            alt={producto.title}
            className='w-80 h-auto object-contain rounded-2xl'
          />
        </div>

        <div className='flex-1'>
          <span className='text-indigo-600 font-black uppercase tracking-widest text-sm'>
            {producto.category}
          </span>
          <h1 className='text-5xl font-black text-gray-900 mt-2 leading-tight'>
            {producto.title}
          </h1>
          <p className='text-gray-500 mt-6 text-xl leading-relaxed'>
            {producto.description}
          </p>
          <IAAssistant producto={producto} />
          <div className='mt-10 flex items-center gap-8'>
            <span className='text-4xl font-black text-gray-900'>
              {producto.price}€
            </span>

            <button
              onClick={manejarSuma}
              className='bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all cursor-pointer shadow-xl active:scale-95'>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
