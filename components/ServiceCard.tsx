interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-black bg-opacity-60 backdrop-blur-sm border border-white border-opacity-30 rounded-lg p-6 hover:border-opacity-50 transition-all duration-300">
      <div className="text-center mb-4">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-white tracking-wide">{title}</h3>
      </div>
      <p className="text-gray-300 text-center leading-relaxed">{description}</p>
    </div>
  );
}