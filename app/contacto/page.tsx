import { Metadata } from 'next';
import Header from '../../components/Header';

export const metadata: Metadata = {
  title: 'Contacto - Blanco y Negro Sastrería',
  description: 'Contacto con Blanco y Negro Sastrería - Página en construcción',
};

export default function Contacto() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <Header />
      
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-8">
        <div className="text-center space-y-12">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white drop-shadow-2xl">
              CONTACTO
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-white opacity-60"></div>
          </div>
          
          <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-white border-opacity-30 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg md:text-xl text-white font-light tracking-wide mb-4">
              PÁGINA EN CONSTRUCCIÓN
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <div className="w-20 h-px bg-white mx-auto opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}