import { ArrowRight } from 'lucide-react';
import imgScreenMaskReplaceHere from "figma:asset/a6684f2a0e581813e9a7952624ab6fd6fd620ffb.png";

export function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px]">
        {/* Section indicator */}
        <div className="flex flex-col items-center gap-3 lg:gap-4 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[43px] w-px border-l-2 border-dashed border-black" />
            <div className="bg-black text-white rounded-full w-[39px] h-[39px] flex items-center justify-center">
              <span className="text-base font-medium">1</span>
            </div>
          </div>
          <div className="inline-flex items-center justify-center px-3 py-2 rounded-[10px] border border-black/10">
            <span className="text-[13px] font-medium text-black">About ProConnect</span>
          </div>
          <h2 
            className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-2xl sm:text-3xl lg:text-4xl xl:text-[54px] xl:leading-[60px] text-center max-w-[807px] tracking-tight"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Reinventing the World of Work Powered by Crypto & AI.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative w-full aspect-[632/411] bg-white rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
            <img
              alt="Platform Preview"
              className="w-full h-full object-cover"
              src={imgScreenMaskReplaceHere}
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <h3 
              className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] xl:leading-[60px] tracking-tight"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              ProConnect is building the world's first decentralized work ecosystem powered by the PCT Token.
            </h3>
            
            <div className="space-y-4 text-base sm:text-lg lg:text-[22px] lg:leading-[31px] text-[#010d3e]">
              <p>
                It connects individuals, professionals, and companies into a single digital economy where every action, project, and collaboration creates measurable value.
              </p>
              <p>
                Through blockchain, AI, and smart contracts, ProConnect transforms work into a transparent, borderless, and rewarding experience.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-[17px] pt-2">
              <button className="bg-black text-white px-4 sm:px-[15px] py-2.5 rounded-[10px] text-sm sm:text-base hover:bg-black/90 transition-colors whitespace-nowrap">
                Join the Presale
              </button>
              <button className="flex items-center justify-center gap-1 px-4 sm:px-0 py-2.5 rounded-[10px] text-sm sm:text-base text-black hover:text-black/80 transition-colors">
                <span className="whitespace-nowrap">Explore the Platform</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
