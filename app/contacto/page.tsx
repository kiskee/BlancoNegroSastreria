import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import {
  ADDRESS_CITY,
  ADDRESS_REFERENCE,
  ADDRESS_STREET,
  PHONE_DISPLAY,
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  whatsappUrl,
} from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con Blanco y Negro Sastrería en Envigado. Escríbenos por WhatsApp o llámanos para agendar tu cita o cotizar tus arreglos.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto | Blanco y Negro Sastrería',
    description:
      'Contacta con Blanco y Negro Sastrería en Envigado. Escríbenos por WhatsApp o llámanos para agendar tu cita o cotizar tus arreglos.',
    url: '/contacto',
  },
}

export default function Contacto() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ─── BANNER ─── */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden border-b">
        <Image
          src="/adri1.png"
          alt="Sastre de Blanco y Negro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-7 h-px bg-purple-400/60" />
            <span className="text-[11px] tracking-[.25em] text-purple-300/80 uppercase">
              Contacto
            </span>
            <span className="block w-7 h-px bg-purple-400/60" />
          </div>

          <h1 className="font-serif font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Hablemos de tu{' '}
            <span className="text-purple-300/90">próxima prenda.</span>
          </h1>

          <p className="mt-6 text-white/50 font-light max-w-xl mx-auto">
            Estamos listos para atenderte. Escríbenos por WhatsApp y agenda tu
            cita.
          </p>
        </div>

        {/* fade hacia el fondo de la página */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* ─── TARJETAS DE CONTACTO ─── */}
      <section className="px-6 md:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href={whatsappUrl(
              'Hola, quiero información de Blanco y Negro Sastrería'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 border border-white/20 rounded-xl p-10 bg-white/5 backdrop-blur-sm hover:border-purple-400/40 hover:bg-white/10 transition-all duration-300"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-200 group-hover:border-purple-300/60 transition-colors duration-300">
              <WhatsAppIcon className="h-7 w-7" />
            </span>
            <h2 className="text-lg font-medium text-white/90 tracking-wide">
              WhatsApp
            </h2>
            <p className="text-sm text-white/50 font-light">{PHONE_DISPLAY}</p>
          </a>

          <div className="flex flex-col items-center gap-3 border border-white/20 rounded-xl p-10 bg-white/5 backdrop-blur-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-200">
              <MapPin className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <h2 className="text-lg font-medium text-white/90 tracking-wide">
              Ubicación
            </h2>
            <p className="text-sm text-white/50 font-light text-center">
              {ADDRESS_STREET}
              <br />
              {ADDRESS_REFERENCE}
              <br />
              {ADDRESS_CITY}
            </p>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-purple-300/80 hover:text-purple-200 underline underline-offset-4 transition-colors duration-200"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* ─── MAPA ─── */}
      <section className="px-6 md:px-14 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-md mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-purple-400/60" />
              <span className="text-[11px] tracking-[.25em] text-purple-300/80 uppercase">
                Encuéntranos
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-4xl leading-[1.05] tracking-tight text-white">
              Estamos en{' '}
              <span className="text-purple-300/90">el corazón de Envigado.</span>
            </h2>
            <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/50 font-light max-w-sm">
              {ADDRESS_STREET} — {ADDRESS_REFERENCE}.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              src={googleMapsEmbedUrl}
              title="Mapa de ubicación de Blanco y Negro Sastrería"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] border-0"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-purple-400/50 bg-transparent text-purple-200/90 px-8 py-4 rounded-lg text-sm tracking-[.15em] uppercase hover:bg-purple-400/10 hover:border-purple-400/80 hover:text-white transition-all duration-200"
            >
              <MapPin className="h-5 w-5" strokeWidth={1.5} />
              <span>Cómo llegar</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/10 px-6 py-20 text-center">
        <h2 className="font-serif font-light text-3xl md:text-4xl text-white">
          ¿Listo para comenzar?
        </h2>
        <p className="mt-4 text-white/50 font-light">
          Cuéntanos qué necesitas y te responderemos lo antes posible.
        </p>
        <div className="mt-8">
          <Link
            href={whatsappUrl(
              'Hola, quiero agendar una cita en Blanco y Negro Sastrería'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-light tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-colors duration-300"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Escríbenos por WhatsApp</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
