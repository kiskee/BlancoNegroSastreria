import { Metadata } from "next";
import Header from "../components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blanco y Negro Sastrería - Confección a la Medida",
  description:
    "Sastrería profesional especializada en confección a la medida, reparación y arreglo de todo tipo de prendas de vestir.",
  keywords: "sastrería, trajes, medida, confección, reparación, arreglos, cortinas, cenefas, sábanas",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <Header />

      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-white -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rotate-45"></div>
      </div>

      <div className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Sección Hero - Cards de valor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-white text-lg font-semibold mb-2">+15 Años</h3>
              <p className="text-gray-300 text-sm">de experiencia profesional</p>
            </div>
            
            <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-white text-lg font-semibold mb-2">Calidad Premium</h3>
              <p className="text-gray-300 text-sm">Materiales de primera y acabados perfectos</p>
            </div>
            
            <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🕰️</div>
              <h3 className="text-white text-lg font-semibold mb-2">Entrega Puntual</h3>
              <p className="text-gray-300 text-sm">Cumplimos con los tiempos acordados</p>
            </div>
          </div>

          {/* Call to Action - Servicios */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-white border-opacity-30 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-6">
              SERVICIOS PROFESIONALES
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Descubre nuestra amplia gama de servicios especializados en confección, reparación y arreglos de prendas.
            </p>
            <Link 
              href="/servicios"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              VER TODOS LOS SERVICIOS
            </Link>
          </div>

          {/* Contacto WhatsApp */}
          <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-white text-lg font-light tracking-wide mb-4">
              CONTACTO DIRECTO
            </p>
            <a 
              href="https://wa.me/573003268025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <span className="text-2xl">📱</span>
              <span className="text-xl md:text-2xl font-light tracking-wider">300 326 8025</span>
            </a>
            <div className="w-20 h-px bg-white mx-auto opacity-80 mt-4"></div>
          </div>

          {/* Elementos decorativos */}
          <div className="flex justify-center space-x-8">
            <div className="w-px h-12 bg-white opacity-40"></div>
            <div className="w-px h-8 bg-white opacity-60"></div>
            <div className="w-px h-16 bg-white opacity-30"></div>
            <div className="w-px h-6 bg-white opacity-50"></div>
            <div className="w-px h-12 bg-white opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
