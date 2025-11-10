import { ArrowRight } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function HeroSection() {
  return (
    <section id="home" className="relative pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-20 lg:pb-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 max-w-[656px]">
            {/* Tag */}
            <div className="inline-flex items-center justify-center px-3 py-2 rounded-[10px] border border-black/10">
              <span className="text-[13px] font-medium text-black">Join the Presale</span>
            </div>

            {/* Heading */}
            <h1 
              className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-4xl sm:text-5xl lg:text-6xl xl:text-[90px] xl:leading-[90px] tracking-tight"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              World's First Crypto Based Job Market
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[22px] lg:leading-[31px] text-[#010d3e] max-w-[510px]">
              The PCT Token powers the first decentralized work ecosystem connecting individuals, professionals, and companies through real-world value and rewards.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-[17px] pt-2">
              <button className="bg-black text-white px-4 sm:px-[15px] py-2.5 rounded-[10px] text-base sm:text-[20px] hover:bg-black/90 transition-colors whitespace-nowrap">
                View Whitepaper
              </button>
              <button className="flex items-center justify-center gap-1 px-4 sm:px-0 py-2.5 rounded-[10px] text-base sm:text-[20px] text-black hover:text-black/80 transition-colors">
                <span className="whitespace-nowrap">Buy PCT Coming Soon..</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Content - Countdown */}
          <div className="w-full">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
