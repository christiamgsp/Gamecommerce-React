import { IterationCcw } from 'lucide-react';

export const ProductCard = ({ product, onAgregar }) => (
  <div className='bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-64border p-4 rounded-xl shadow-sm  '>
    <img
      src={product.image}
      alt={product.name}
      width='200'
      className='w-full h-48 object-cover'
    />
    <div className='p-4 flex flex-col gap-2 '>
      <h3 className='text-lg font-bold'>{product.name}</h3>
      <p className='text-sm text-gray-500'>{product.category}</p>
      <span className='text-sm text-green-600'>{product.price}</span>
      <button
        onClick={() => onAgregar(product)}
        className='mt-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95  transition-colors rounded-lg py-2 text-sm font-semibold cursor-pointer'>
        Añadir al carrito
      </button>
    </div>
  </div>
);
