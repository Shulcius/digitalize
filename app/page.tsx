import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/landing/Hero'
import Problems from '@/components/landing/Problems'
import Ecosystem from '@/components/landing/Ecosystem'
import Offers from '@/components/landing/Offers'
import Roadmap from '@/components/landing/Roadmap'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problems />
      <Ecosystem />
      <Offers />
      <Roadmap />
    </main>
  )
}