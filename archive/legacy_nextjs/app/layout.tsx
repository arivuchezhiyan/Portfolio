import type { Metadata } from 'next';
import './globals.css';
import { PortfolioProvider } from '@/context/PortfolioContext';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { DualSceneCanvas } from '@/components/3d/DualSceneCanvas';
import { Navbar } from '@/components/ui/Navbar';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { TerminalDrawer } from '@/components/ui/TerminalDrawer';
import { ArchitectureModal } from '@/components/ui/ArchitectureModal';
import { MatrixOverlay } from '@/components/ui/MatrixOverlay';

export const metadata: Metadata = {
  title: 'Arivuchezhiyan E | Software Engineer & AAA Game Developer',
  description: 'Flagship portfolio of Arivuchezhiyan E, M.Tech Integrated Computer Science and Engineering student at Sri Sivasubramaniya Nadar (SSN) College of Engineering, Chennai. Specializing in AI systems, high-concurrency backends, Unreal Engine 5 C++, and photorealistic shaders.',
  keywords: [
    'Arivuchezhiyan E',
    'SSN College of Engineering',
    'Software Engineer',
    'AAA Game Developer',
    'Unreal Engine 5',
    'C++',
    'Next.js 15',
    'AI Multi-Agent',
    'Distributed Systems',
    'Three.js',
    'Chennai India'
  ],
  authors: [{ name: 'Arivuchezhiyan E' }],
  openGraph: {
    title: 'Arivuchezhiyan E | Flagship Portfolio',
    description: 'Combining High-Throughput Software Architecture with AAA Unreal Engine 5 Game Development.',
    url: 'https://arivuchezhiyan.dev',
    siteName: 'Arivuchezhiyan E Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Arivuchezhiyan E Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arivuchezhiyan E | Software Architect & AAA Game Dev',
    description: 'M.Tech CSE at SSN College of Engineering. C++, Unreal Engine 5, AI Systems & Next.js.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#04070d] text-slate-100 min-h-screen selection:bg-cyber-cyan selection:text-black">
        <PortfolioProvider>
          <CustomCursor />
          <DualSceneCanvas />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <CommandPalette />
          <TerminalDrawer />
          <ArchitectureModal />
          <MatrixOverlay />
        </PortfolioProvider>
      </body>
    </html>
  );
}
