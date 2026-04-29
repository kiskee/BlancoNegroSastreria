import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  { num: "01", title: "Trajes", desc: "Elegancia que empodera" },
  { num: "02", title: "Vestidos", desc: "Diseños que hablan por ti" },
  { num: "03", title: "Blusas", desc: "Sofisticación diaria" },
  { num: "04", title: "Abrigos", desc: "Estilo que te envuelve" },
]

export default function WomenSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">

      {/* ─── MOBILE: imagen de fondo ─── */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/women1.png"
          alt="Colección femenina"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
        {/* overlay en dos capas para mayor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>

      {/* ─── LAYOUT PRINCIPAL ─── */}
      <div className="relative flex flex-col md:flex-row min-h-svh md:min-h-[640px]">

        {/* ── IMAGEN DESKTOP ── */}
        <div className="relative hidden md:block md:w-[52%] shrink-0">
          <Image
            src="/women1.png"
            alt="Colección femenina"
            fill
            sizes="52vw"
            className="object-cover object-center"
            priority
          />
          {/* fade suave hacia el lado del contenido */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          {/* label sutil sobre la imagen */}
          <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[.3em] text-purple-300/40 uppercase select-none whitespace-nowrap">
            colección · otoño 2025
          </span>
        </div>

        {/* ── CONTENIDO ── */}
        <div className="relative z-10 flex flex-col justify-end md:justify-center w-full md:flex-1 px-6 pb-14 pt-32 md:px-14 md:py-20 text-white">

          {/* decoración de esquina — solo desktop */}
          <div className="hidden md:block absolute top-8 right-8 w-10 h-10 border-t border-r border-purple-400/20 pointer-events-none" />

          <div className="flex flex-col gap-8 md:gap-9 max-w-md">

            {/* ── ENCABEZADO ── */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-7 h-px bg-purple-400/60" />
                <span className="text-[11px] tracking-[.25em] text-purple-300/80 uppercase">
                  Para ella
                </span>
              </div>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Diseñamos{" "}
                <em className="italic text-purple-300/90 not-italic md:block">
                  tu esencia.
                </em>
              </h2>
              <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/50 font-light max-w-sm">
                Cada mujer es única. Creamos prendas que realzan tu personalidad
                y te hacen sentir segura, poderosa y auténtica.
              </p>
            </div>

            {/* ── SEPARADOR ── */}
            <hr className="border-white/[.06]" />

            {/* ── CATEGORÍAS ── */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {features.map((item) => (
                <div key={item.num} className="flex flex-col gap-0.5">
                  <span className="font-serif text-[11px] tracking-[.12em] text-purple-400/40 mb-1">
                    {item.num}
                  </span>
                  <p className="text-sm font-medium text-white/90 tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/35 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ── CTA ── */}
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className={cn(
                  "rounded-sm border-purple-400/50 bg-transparent",
                  "text-purple-200/90 text-xs tracking-[.15em] uppercase",
                  "px-6 py-5 hover:bg-purple-400/10 hover:border-purple-400/80 hover:text-white",
                  "transition-all duration-200"
                )}
              >
                Ver colección
              </Button>
              <button className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide">
                Lookbook →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}