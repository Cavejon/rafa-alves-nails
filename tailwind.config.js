/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F7F3EE',       // Off-white quente de fundo
        'brand-bg-dark': '#EFEAE4',  // Bege mais escuro para contrastes
        'brand-primary': '#3D2E27',  // Marrom terroso escuro principal
        'brand-accent': '#8C6D58',   // Marrom chocolate médio para detalhes/hover
        'brand-light': '#FAF2ED',    // Bege super claro para ícones/detalhes
        'brand-footer': '#2A201B',   // Marrom muito escuro para o rodapé
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
