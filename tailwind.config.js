/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",  // Archivos de las páginas
      "./components/**/*.{js,ts,jsx,tsx}" ,
      "./src/**/*.{js,ts,jsx,tsx}"// Componentes reutilizables
  ],
  theme: {
      extend: {},
  },
  plugins: [],
};

