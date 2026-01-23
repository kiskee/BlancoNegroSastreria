import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-20 w-full p-4 bg-black bg-opacity-20 backdrop-blur-sm border-b border-white border-opacity-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Nombre - Lado izquierdo */}
        <div className="text-left">
          <div className="text-white font-bold text-xl tracking-wider leading-tight">
            BLANCO Y NEGRO
          </div>
          <div className="text-gray-300 text-xs tracking-[0.3em] font-light mt-1">
            SASTRERÍA
          </div>
          <div className="w-full h-px bg-gradient-to-r from-white to-transparent opacity-60 mt-1"></div>
        </div>
        
        {/* Menú de navegación - Lado derecho */}
        <div className="flex space-x-8 text-white text-sm tracking-wide font-medium">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300 relative group">
            INICIO
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/servicios" className="hover:text-gray-300 transition-colors duration-300 relative group">
            SERVICIOS
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contacto" className="hover:text-gray-300 transition-colors duration-300 relative group">
            CONTACTO
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}