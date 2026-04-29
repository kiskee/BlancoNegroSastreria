import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AlterationsSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden border-b">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/arreglos.png" // 👈 imagen de costura / manos / detalles
        alt="Servicio de arreglos"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENIDO */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">

        <span className="text-sm tracking-widest text-purple-400 uppercase">
          Ajustes y arreglos
        </span>

        <h2 className="text-4xl md:text-6xl mt-4 leading-tight">
          Perfección en cada detalle.
        </h2>

        <p className="text-white/70 mt-6">
          No importa la prenda, nos aseguramos de que te quede como si
          hubiera sido hecha exclusivamente para ti.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">

          {[
            "Ajuste de trajes",
            "Arreglo de vestidos",
            "Modificación de tallas",
            "Reparaciones finas",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/20 rounded-xl py-4 px-3 backdrop-blur-sm bg-white/5"
            >
              {item}
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Solicitar arreglo
          </Button>

          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-black px-6 py-5"
          >
            Ver servicios
          </Button>

        </div>
      </div>

      {/* FADE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}