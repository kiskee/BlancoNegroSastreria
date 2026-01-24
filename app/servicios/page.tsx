import { Metadata } from 'next';
import Header from '../../components/Header';
import ServiceCard from '../../components/ServiceCard';

export const metadata: Metadata = {
  title: 'Servicios - Blanco y Negro Sastrería',
  description: 'Servicios profesionales de sastrería: confección a medida, reparaciones, lencería de hogar y más.',
};

const services = [
  {
    title: "Confección a la Medida",
    description: "Creamos prendas únicas adaptadas perfectamente a tu figura y estilo personal con materiales de primera calidad.",
    icon: "✂️"
  },
  {
    title: "Reparación Profesional",
    description: "Restauramos tus prendas favoritas con técnicas especializadas y materiales de calidad garantizada.",
    icon: "🔧"
  },
  {
    title: "Arreglo de Prendas",
    description: "Ajustes de tallas, dobladillos, cierres y modificaciones para el ajuste perfecto de cualquier prenda.",
    icon: "📏"
  },
  {
    title: "Lencería de Hogar",
    description: "Cortinas, cenefas, sábanas y textiles para el hogar con acabados profesionales y diseños personalizados.",
    icon: "🏠"
  },
  {
    title: "Tejido de Prendas",
    description: "Creación de prendas tejidas a mano con patrones únicos y materiales selectos de la más alta calidad.",
    icon: "🧶"
  },
  {
    title: "Artículos de Cuero",
    description: "Reparación y restauración especializada de chaquetas, bolsos y accesorios de cuero con técnicas artesanales.",
    icon: "👜"
  }
];

export default function Servicios() {
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
      
      <div className="relative z-10 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white drop-shadow-2xl mb-4">
              SERVICIOS
            </h1>
            <div className="w-32 h-px bg-white opacity-60 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
              Servicios profesionales de sastrería con más de 15 años de experiencia
            </p>
          </div>
          
          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-2xl text-white font-light tracking-wide mb-4">
                ¿Necesitas más información?
              </h3>
              <a 
                href="https://wa.me/573003268025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <span className="text-2xl">📱</span>
                <span className="text-xl font-light tracking-wider">300 326 8025</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}