import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteIntro from "@/components/ui/SiteIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Team Automatons | PCCOE",
  description: "We are Team Automatons, the robotics research and development team of Pimpri Chinchwad College of Engineering, Pune, India. Our team is run by undergraduate students who are passionate about robotics.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Team Automatons | PCCOE",
    description: "We are Team Automatons, the robotics research and development team of Pimpri Chinchwad College of Engineering, Pune, India.",
    url: 'https://teamautomatons.in',
    siteName: 'Team Automatons',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Team Automatons Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SiteIntro enableAudio={false} />
        {children}
      </body>
    </html>
  );
}
