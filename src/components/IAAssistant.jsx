import { useState } from 'react';
import { preguntarIA } from '../lib/ia';

export const IAAssistant = ({ producto }) => {
  const [respuesta, setRespuesta] = useState('');
  const [cargando, setCargando] = useState(false);

  const consultar = async () => {
    setCargando(true);
    try {
      const texto = await preguntarIA(producto);
      setRespuesta(texto);
    } catch (error) {
      setRespuesta('La IA se ha tomado un café, vuelve en un momento.');
    }
    setCargando(false);
  };

  return (
    <div className='mt-8 p-6 bg-indigo-50 rounded-3xl border border-indigo-100'>
      <h3 className='text-sm font-black text-indigo-600 uppercase tracking-tighter mb-2'>
        Sugerencia de la IA ✨
      </h3>
      {respuesta ? (
        <p className='text-gray-800 italic font-medium'>"{respuesta}"</p>
      ) : (
        <button
          onClick={consultar}
          disabled={cargando}
          className='text-indigo-600 font-bold hover:underline'>
          {cargando ? 'Pensando...' : '¿Por qué comprarlo?'}
        </button>
      )}
    </div>
  );
};
