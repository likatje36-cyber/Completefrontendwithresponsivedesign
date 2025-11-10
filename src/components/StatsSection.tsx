import imgLucidOriginUltrarealistic3DRenderOfAFuturisticCryptocu01 from "figma:asset/5de5d0251d9261e3c54ba815f91f521fc3f5eace.png";

export function StatsSection() {
  const stats = [
    { value: '10,000+', label: 'Early Adopters' },
    { value: '$5M+', label: 'Presale Target' },
    { value: '50+', label: 'Partner Companies' },
    { value: '24/7', label: 'Global Support' }
  ];

  const features = [
    {
      title: 'Decentralized Work',
      description: 'Connect with professionals and companies worldwide without intermediaries.'
    },
    {
      title: 'PCT Token Rewards',
      description: 'Earn tokens for every completed task, project milestone, and collaboration.'
    },
    {
      title: 'Smart Contracts',
      description: 'Automated payments and transparent agreements powered by blockchain technology.'
    },
    {
      title: 'AI-Powered Matching',
      description: 'Get matched with the right opportunities based on your skills and experience.'
    }
  ];

  return (
    <section id="tokens" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px]">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div 
                className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-[#010d3e]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
            <img
              alt="3D Crypto Visualization"
              className="w-full h-full object-contain"
              src={imgLucidOriginUltrarealistic3DRenderOfAFuturisticCryptocu01}
            />
          </div>

          {/* Right - Features */}
          <div className="space-y-6 lg:space-y-8">
            <h2 
              className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] xl:leading-[60px] tracking-tight"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Revolutionizing the Future of Work
            </h2>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-black font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-[#010d3e] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
