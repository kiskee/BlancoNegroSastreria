interface ServiceCardProps {
  num: string
  title: string
  description: string
}

export default function ServiceCard({ num, title, description }: ServiceCardProps) {
  return (
    <div className="group flex flex-col gap-2 border border-white/20 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:border-purple-400/40 hover:bg-white/10 transition-all duration-300">
      <span className="font-serif text-[11px] tracking-[.12em] text-purple-400/40 group-hover:text-purple-300/70 transition-colors duration-300">
        {num}
      </span>
      <h3 className="text-lg font-medium text-white/90 tracking-wide">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50 font-light">
        {description}
      </p>
    </div>
  )
}
