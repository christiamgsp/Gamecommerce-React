import React from 'react';

const Navbar = ({ busqueda, onSearch }) => {
  return (
    <nav className='w-full p-4 bg-white border-b border-gray-100 sticky top-0 z-50 flex justify-between items-center px-8'>
      <div className='text-2xl font-black tracking-tighter text-indigo-600'>
        SMART<span className='text-gray-900'>SHOP</span>
      </div>
      <div className='w-full max-w-md relative'>
        <input
          type='text'
          placeholder='Buscar productos...'
          className='w-full bg-gray-100 text-gray-800 px-5 py-2.5 rounded-xl border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-300'
          value={busqueda}
          onChange={onSearch}
        />
      </div>
      <div className='w-24'></div> {/* Espaciador para equilibrio visual */}
    </nav>
  );
};

export { Navbar };
