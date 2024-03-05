/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",],
  theme: {
    extend: { 
      colors:{
      darkBrown:{
        50: '#f6edeb',
        100: '#e2c7c0',
        200: '#d4aca1',
        300: '#c18676',
        400: '#b56e5c',
        500: '#a24a33',
        600: '#93432e',
        700: '#733524',
        800: '#59291c',
        900: '#441f15',
      },
      Bege:{
        50: '#fdf9f4',
        100: '#faecde',
        200: '#f8e2cd',
        300: '#f4d5b7',
        400: '#f2cda9',
        500: '#efc193',
        600: '#d9b086',
        700: '#aa8968',
        800: '#836a51',
        900: '#64513e',
      },
      Brown:{
        50: '#f5f0ed',
        100: '#e0d1c7',
        200: '#d1baac',
        300: '#bd9b86',
        400: '#b0886f',
        500: '#9c6a4b',
        600: '#8e6044',
        700: '#6f4b35',
        800: '#563a29',
        900: '#422d20',
      },
      lightBrown:{
        50: '#f9f4f1',
        100: '#ebdbd4',
        200: '#e1cac0',
        300: '#d3b2a3',
        400: '#cba391',
        500: '#be8c75',
        600: '#ad7f6a',
        700: '#876353',
        800: '#694d40',
        900: '#503b31',
      },
      gray:{
        50: '#f1f1f1',
        100: '#d5d3d2',
        200: '#c0bdbc',
        300: '#a39f9e',
        400: '#918d8b',
        500: '#76706e',
        600: '#6b6664',
        700: '#54504e',
        800: '#413e3d',
        900: '#322f2e',
      },
    },
    screens: {
      'sm': { 'max': '430px'},
      // => @media ( max-width: 430px) { ... }

      'md': {'min': '430px', 'max': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }  
    },
    fontFamily: {
      sans: ['cardo', 'sans-serif'],
      serif: ['Cambria', 'serif'],
    },
  },
  },
  plugins: [],
}