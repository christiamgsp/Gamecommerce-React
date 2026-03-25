import { Link } from 'react-router-dom';

import React from 'react';

export const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] text-center p-10'>
      <h1 className='text-9xl font-black text-indigo-200'>404</h1>
      <p className='text-2xl font-bold text-gray-800 mt-4'>
        ¡Ups! Te has perdido en la tienda
      </p>
      <p className='text-gray-500 mt-2 mb-8'>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        to='/'
        className='bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition-all shadow-lg'>
        Volver a la Home
      </Link>
    </div>
  );
};
