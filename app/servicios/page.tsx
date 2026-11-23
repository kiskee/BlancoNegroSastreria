import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'
import WhatsAppIcon from '../../components/WhatsAppIcon'
import { PHONE_DISPLAY, whatsappUrl } from '../../lib/contact'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios profesionales de sastrería: confección a medida, reparaciones, lencería de hogar y más.',
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios | Blanco y Negro Sastrería',
    description:
      'Servicios profesionales de sastrería: confección a medida, reparaciones, lencería de hogar y más.',
    url: '/servicios',
  },
}

const services = [
  {
    title: 'Confección a la Medida',
    description:
      'Creamos prendas únicas adaptadas perfectamente a tu figura y estilo personal con materiales de primera calidad.',
  },
  {
    title: 'Reparación Profesional',
    description:
      'Restauramos tus prendas favoritas con técnicas especializadas y materiales de calidad garantizada.',
  },
  {
    title: 'Arreglo de Prendas',
    description:
      'Ajustes de tallas, dobladillos, cierres y modificaciones para el ajuste perfecto de cualquier prenda.',
  },
  {
    title: 'Lencería de Hogar',
    description:
      'Cortinas, cenefas, sábanas y textiles para el hogar con acabados profesionales y diseños personalizados.',
  },
  {
    title: 'Tejido de Prendas',
    description:
      'Creación de prendas tejidas a mano con patrones únicos y materiales selectos de la más alta calidad.',
  },
  {
    title: 'Artículos de Cuero',
    description:
      'Reparación y restauración especializada de chaquetas, bolsos y accesorios de cuero con técnicas artesanales.',
  },
]

export default function Servicios() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ─── BANNER ─── */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden border-b">
        <Image
          src="/arreglos.png"
          alt="Taller de sastrería Blanco y Negro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-7 h-px bg-purple-400/60" />
            <span className="text-[11px] tracking-[.25em] text-purple-300/80 uppercase">
              Nuestros servicios
            </span>
            <span className="block w-7 h-px bg-purple-400/60" />
          </div>

          <h1 className="font-serif font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
            El oficio <span className="text-purple-300/90">a tu servicio.</span>
          </h1>

          <p className="mt-6 text-white/50 font-light max-w-xl mx-auto">
            Servicios profesionales de sastrería con más de 15 años de
            experiencia.
          </p>
        </div>

        {/* fade hacia el fondo de la página */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* ─── GRID DE SERVICIOS ─── */}
      <section className="relative px-6 md:px-14 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* encabezado al estilo de la home */}
          <div className="max-w-md mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-purple-400/60" />
              <span className="text-[11px] tracking-[.25em] text-purple-300/80 uppercase">
                Lo que hacemos
              </span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Cada prenda,{' '}
              <span className="text-purple-300/90">un oficio.</span>
            </h2>
            <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/50 font-light max-w-sm">
              Desde la confección a medida hasta los detalles que marcan la
              diferencia, cuidamos cada pieza como si fuera única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                num={String(index + 1).padStart(2, '0')}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/10 px-6 md:px-14 py-20 text-center">
        <h2 className="font-serif font-light text-3xl md:text-4xl text-white">
          ¿Necesitas más información?
        </h2>
        <p className="mt-4 text-white/50 font-light">
          Escríbenos por WhatsApp y te atendemos con gusto.
        </p>
        <div className="mt-8">
          <Link
            href={whatsappUrl(
              'Hola, necesito más información sobre sus servicios'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-light tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-colors duration-300"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>{PHONE_DISPLAY}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
