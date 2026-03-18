import React from 'react';

const Navbar = ({ busqueda, onSearch }) => {
  return (
    <div className='w-full p-6 bg-gray-900 border-b border-gray-800 flex justify-center items-center'>
      <div className='w-full max-w-xl relative'>
        <input
          type='text'
          placeholder='🔍 Busca tu juego favorito...'
          className='w-full bg-gray-800 text-white px-5 py-3 rounded-2xl border-2 border-indigo-500/30 focus:border-indigo-500 focus:outline-none transition-all duration-300 shadow-lg'
          value={busqueda}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export { Navbar };
