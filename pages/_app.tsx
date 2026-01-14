import type { AppProps } from 'next/app';
// Asegúrate de que la ruta a tu CSS sea correcta. 
// Si está en la raíz: '../global.css'
// Si está en app: '../app/globals.css'
import '../app/globals.css'; 
// Importa tu componente Navbar aquí.
// Ajusta la ruta según donde lo tengas guardado (ej: '@/components/Navbar').
import Navbar from '@/component/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> 
      <Component {...pageProps} />
    </>
  );
}