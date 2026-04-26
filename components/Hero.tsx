import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroWomen() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/adri1.png"
        alt="Sastre mujer confeccionando traje"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div className="text-white space-y-6">
          <span className="text-sm tracking-widest text-purple-400 uppercase">
            Sastrería para mujer
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Diseñamos tu esencia. <br />
            <span className="text-white/80">Confeccionamos tu poder.</span>
          </h1>
          <p className="text-white/70 max-w-md">
            Cada prenda es una extensión de quién eres. Creamos piezas únicas que
            resaltan tu elegancia, seguridad y autenticidad.
          </p>
          {/* Botones */}
          <div className="flex gap-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 text-sm tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Reservar cita
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black px-6 py-5 text-sm tracking-wide"
            >
              Ver colección
            </Button>
          </div>
        </div>

        {/* Espacio vacío para balance visual */}
        <div className="hidden md:block" />
      </div>

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}