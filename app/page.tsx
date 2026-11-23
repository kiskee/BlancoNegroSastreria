import AlterationsSection from '@/components/AlterationsSection'
import Hero from '@/components/Hero'
import WomenSection from '@/components/WomenSection'

export default function Home() {
  return (
    <div className="min-h-full bg-black relative overflow-hidden">
      <Hero />
      <AlterationsSection />
      <WomenSection />
    </div>
  )
}
