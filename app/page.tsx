import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blanco y Negro Sastrería - Sitio en Construcción',
  description: 'Sastrería profesional especializada en trajes y prendas a medida. Sitio web en construcción.',
  keywords: 'sastrería, trajes, medida, confección, profesional',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-white -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rotate-45"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        <div className="text-center space-y-16">
          {/* Título principal con efectos */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest">
              <span className="text-white drop-shadow-2xl">BLANCO</span>
              <div className="text-white my-6 text-4xl md:text-6xl">&</div>
              <span className="text-white drop-shadow-2xl">NEGRO</span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl mt-8 font-light tracking-[0.4em] text-gray-300">
              SASTRERÍA
            </div>
            {/* Líneas decorativas */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-white opacity-60"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-white opacity-60"></div>
          </div>
          
          {/* Sección de construcción */}
          <div className="mt-24">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-white border-opacity-30 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-xl md:text-2xl text-white font-light tracking-wide mb-4">
                SITIO BAJO CONSTRUCCIÓN
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <div className="w-20 h-px bg-white mx-auto opacity-80"></div>
            </div>
          </div>
          
          {/* Elementos decorativos adicionales */}
          <div className="flex justify-center space-x-8 mt-16">
            <div className="w-px h-16 bg-white opacity-40"></div>
            <div className="w-px h-12 bg-white opacity-60"></div>
            <div className="w-px h-20 bg-white opacity-30"></div>
            <div className="w-px h-8 bg-white opacity-50"></div>
            <div className="w-px h-16 bg-white opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}