import { Navbar } from '@/components/ui/navbar'
import { Section } from '@/components/blocks/Section'
import { WhatWeDo } from '@/components/blocks/WhatWeDo'
import { VisionMission } from '@/components/blocks/VisionMission'
import LogoLoop from '@/components/ui/LogoLoop'
import { Footer } from '@/components/ui/footer-section';
import { getCloudinaryUrl } from '@/lib/cloudinary';

const partnerLogos = [

  { alt: 'Solidworks', src: '/logos/image copy 2.png', href: "https://www.solidworks.com/" },
  { alt: 'Altium', src: '/logos/altium_logo.png', href: "https://altium.com/" },
  { alt: 'TechnoWings', src: '/logos/image copy 3.png', href: "https://technowingsind.com/" },
  { alt: 'Odrive', src: '/logos/image copy 4.png', href: "https://odriverobotics.com/" },
  { alt: '3deology', src: '/logos/3deology.png', href: "https://www.3deology.co.in/" },
  { alt: 'MAHLE', src: '/logos/image copy 6.png', href: "https://mahle.com/" },
  { alt: 'PCCOE ', src: 'logos/pccoe-logo-new-removebg-preview.png', href: "https://www.pccoepune.com/" },
  { alt: 'Arihant ', src: 'logos/arihant-removebg-preview.png', href: "https://www.google.com/maps/place/Arihant+Electrical+Services,+Mahindra+Gate+2,+Maharashtra+410501/data=!4m2!3m1!1s0x3bc2b71f8aa53579:0x2ae99224ae170c37?utm_source=mstt_1&entry=gps&lucs=47068609&g_ep=CAESCTExLjgzLjMwMRgAINeCAyoINDcwNjg2MDlCAklO" },
  { alt: 'YOJAK', src: '/logos/image copy 5.png', href: "https://yojak.org/" },
  { alt: 'CYTRON', src: '/logos/image copy 7.png', href: "https://www.cytron.io/" },
  { alt: 'SEQURE', src: '/logos/image copy 8.png', href: "https://sequremall.com/" },
  { alt: 'Microlaser', src: '/logos/microlaser.PNG', href: "https://microlaser.com" },
  { alt: 'Ashok Laser', src: '/logos/ashok laser.jpg', href: "https://ashoklaser.com/" },
  { alt: 'Baker', src: '/logos/baker.png', href: "https://bakergauges.com/" },
  { alt: 'Fabxotic', src: '/logos/image copy 10.png', href: "https://www.fabxotic.com/" },
  { alt: 'SK Tooling', src: '/logos/image copy 11.png', href: "https://maps.app.goo.gl/aVtCzpCbYfgwKoHh9" },
  { alt: 'MOLEX', src: '/logos/copy image 13.png', href: "https://www.molex.com/en-us/home" },
  { alt: 'Only Screws', src: '/logos/download-removebg-preview.png', href: "https://www.onlyscrews.in/" },
  { alt: 'Dhanashree Lathe ', src: '/logos/dhan-removebg-preview.png', href: "https://maps.app.goo.gl/LdXgyBqwPoz2zK2r9" },
  { alt: 'VR Coatings', src: 'logos/image copy 14.png', href: 'https://www.vrcoatings.net/' },
  { alt: 'Tech Star', src: 'logos/tech-removebg-preview.png', href: 'https://maps.app.goo.gl/ToVJDgKjR2dfNbdM7' },
  { alt: 'Sourcepoint', src: 'logos/image copy 15.png', href: 'https://www.sourcepointindia.com/' },
].map(p => ({ ...p, src: getCloudinaryUrl(p.src) }));

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
          speed={60} // Adjusted speed
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
