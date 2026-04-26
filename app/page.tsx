import HeroWomen from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sastrería en Envigado | Blanco y Negro - Trajes a la Medida",
  description:
    "Sastrería en Envigado, Antioquia. En Blanco y Negro confeccionamos trajes a la medida, arreglos, reparación de ropa y diseño personalizado. Calidad y elegancia cerca de ti.",
  keywords: [
    "sastrería envigado",
    "sastre envigado",
    "trajes a la medida envigado",
    "arreglos de ropa envigado",
    "confección envigado",
    "sastrería antioquia",
    "arreglo de trajes envigado",
    "diseño de ropa a medida envigado",
  ],
  openGraph: {
    title: "Sastrería en Envigado | Blanco y Negro",
    description:
      "Trajes a la medida, arreglos y confección en Envigado. Sastrería profesional con acabados de alta calidad.",
    type: "website",
    locale: "es_CO",
  },
};

export default function Home() {
  return (
    <div className="min-h-full bg-black relative overflow-hidden">
      <HeroWomen />
    </div>
  );
}