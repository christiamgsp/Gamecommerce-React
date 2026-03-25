import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const preguntarIA = async (producto) => {
  const prompt = `Eres un experto vendedor. Producto: ${producto.title}. Descripción: ${producto.description}. Resúmeme en una frase potente de máximo 15 palabras por qué debo comprarlo.`;

  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.3-70b-versatile',
  });

  return chatCompletion.choices[0]?.message?.content || '';
};
