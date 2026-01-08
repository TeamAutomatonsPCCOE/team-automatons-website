import { Navbar } from '@/components/ui/navbar'
import { Section } from '@/components/blocks/Section'
import { WhatWeDo } from '@/components/blocks/WhatWeDo'
import { VisionMission } from '@/components/blocks/VisionMission'
import LogoLoop from '@/components/ui/LogoLoop'
import { Footer } from '@/components/ui/footer-section';

const partnerLogos = [
  { src: "/logos/3deology.png", alt: "3Deology", href: "https://3deology.com" },
  { src: "/logos/altium_logo.png", alt: "Altium", href: "https://altium.com" },
  { src: "/logos/ashok laser.jpg", alt: "Ashok Laser", href: "https://ashoklaser.com" },
  { src: "/logos/baker.png", alt: "Baker", href: "https://baker.com" },
  { src: "/logos/bg-enter.png", alt: "BG Enter", href: "https://bgenter.com" },
  { src: "/logos/odrive.jpg", alt: "Odrive", href: "https://odrive.com" },
  { src: "/logos/microlaser.PNG", alt: "Microlaser", href: "https://microlaser.com" },
];

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Section />
      <WhatWeDo />
      <VisionMission />

      {/* Partner Logo Loop Section */}
      <section className="py-20 bg-gray-950 border-t border-purple-900/20">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Our Sponsors</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <LogoLoop
          logos={partnerLogos}
          speed={40} // Adjusted speed
          direction="left"
          logoHeight={60} // Slightly bigger
          gap={80} // More spacing
          pauseOnHover={true}
          scaleOnHover={true} // Pop on hover
          fadeOut={true}
          fadeOutColor="#030712" // Match bg-gray-950 (hex approximation)
        />
      </section>
      <Footer />
    </main>
  );
}
