import imgCubeHelix1 from "figma:asset/7d5d67b72cba574a18e13acdd5a2af4576dff9ff.png";
import imgCubeHelix2 from "figma:asset/3b0726d25f82e3e3faa76bd4472a5c71587e1730.png";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          alt="" 
          className="absolute hidden md:block left-[5%] top-[10%] w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-contain opacity-40 animate-float" 
          src={imgCubeHelix1} 
        />
        <img 
          alt="" 
          className="absolute hidden md:block right-[5%] bottom-[10%] w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-contain opacity-40 animate-float-delayed" 
          src={imgCubeHelix2} 
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-2xl sm:text-3xl lg:text-4xl xl:text-[54px] xl:leading-[60px] mb-4 lg:mb-6 tracking-tight"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Contact Us
          </h2>
          <p className="text-base sm:text-lg lg:text-[22px] lg:leading-[31px] text-[#010d3e] max-w-[700px] mx-auto">
            Have questions? We're here to help you get started with PCT Token
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-[600px] mx-auto">
          <div className="backdrop-blur-[6px] bg-white/80 border border-black/8 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none"
                  placeholder="Tell us what you'd like to know..."
                />
              </div>
            </div>

            <button className="w-full bg-black text-white px-4 py-3.5 rounded-lg hover:bg-black/90 transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-[900px] mx-auto">
          <div className="text-center space-y-2">
            <div className="text-2xl">📧</div>
            <h3 className="font-semibold text-black">Email</h3>
            <p className="text-sm text-[#010d3e]">info@proconnect.io</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">💬</div>
            <h3 className="font-semibold text-black">Telegram</h3>
            <p className="text-sm text-[#010d3e]">@ProConnectPCT</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">🐦</div>
            <h3 className="font-semibold text-black">Twitter</h3>
            <p className="text-sm text-[#010d3e]">@ProConnect_PCT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
