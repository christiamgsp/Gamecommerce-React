import { IterationCcw } from 'lucide-react';

export const ProductCard = ({ product, onAgregar }) => {
  // 1. Usamos el punto medio para preparar el estilo del precio
  const precioFormateado = product.price.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div className='bg-white text-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100'>
      {/* Contenedor de Imagen con aspecto de producto */}
      <div className='h-52 w-full bg-gray-50 flex items-center justify-center p-4'>
        <img
          src={product.image}
          alt={product.name}
          className='max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-500'
        />
      </div>

      <div className='p-5 flex flex-col gap-2 flex-1'>
        <span className='text-xs font-bold text-indigo-600 uppercase tracking-widest'>
          {product.category}
        </span>
        <h3 className='text-md font-semibold text-gray-800 line-clamp-2 h-12'>
          {product.name}
        </h3>

        <div className='mt-auto pt-4 flex items-center justify-between'>
          <span className='text-xl font-black text-gray-900'>
            {precioFormateado}
          </span>
          <button
            onClick={() => onAgregar(product)}
            className='bg-gray-900 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg active:scale-90 transition-all cursor-pointer'
            title='Añadir al carrito'>
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};
