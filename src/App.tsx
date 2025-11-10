import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { LogoTicker } from './components/LogoTicker';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import imgVisual from "figma:asset/992dbc42159c4a979dec9490eef96d9e2b1ae5cf.png";
import imgHalfTorus1 from "figma:asset/b431f6631e0811f038acc4dcc316595cc72fd9f6.png";
import imgCylinder2 from "figma:asset/420d641c737fb7d11949e8838d920f4858f3881b.png";
import imgCubeHelix3 from "figma:asset/a93c56bac6242f2ea736fa22bc67d56c69ed8b34.png";

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden relative">
      {/* Background decorative gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[1024px]">
          <svg className="block size-full opacity-20" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1024">
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_bg" x1="1440" x2="0" y1="0" y2="1024">
                <stop stopColor="#183EC2" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
            <rect width="1440" height="1024" fill="url(#paint0_linear_bg)" />
          </svg>
        </div>

        {/* Decorative 3D elements - hidden on mobile, visible on desktop */}
        <img 
          alt="" 
          className="absolute hidden lg:block right-[8%] top-[493px] w-[400px] h-[400px] xl:w-[648px] xl:h-[648px] object-cover pointer-events-none rotate-180 scale-y-[-1]" 
          src={imgVisual} 
        />
        <img 
          alt="" 
          className="absolute hidden lg:block right-0 top-[3px] w-[150px] h-[150px] xl:w-[231px] xl:h-[231px] object-cover pointer-events-none" 
          src={imgHalfTorus1}
          style={{ transform: 'rotate(31.9deg)' }}
        />
        <img 
          alt="" 
          className="absolute hidden lg:block left-1/2 -translate-x-1/2 top-[136px] w-[150px] h-[140px] xl:w-[216px] xl:h-[197px] object-cover pointer-events-none" 
          src={imgCylinder2} 
        />
        <img 
          alt="" 
          className="absolute hidden lg:block left-1/2 -translate-x-1/2 top-[833px] w-[180px] h-[180px] xl:w-[262px] xl:h-[262px] object-cover pointer-events-none" 
          src={imgCubeHelix3} 
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <LogoTicker />
        <AboutSection />
        <StatsSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
