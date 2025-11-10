import imgTalosOpfPngProjectBody2 from "figma:asset/75a0c7e023af963c75eaa6b96a69163248f8cf8b.png";
import imgTalosOpfPngProjectBody3 from "figma:asset/0998efdbc6b76926fb5a42c34636cdb8b2b4fa65.png";
import imgLogo03 from "figma:asset/68d61d8dc7a128738b2ca7965b67e53bca6297b0.png";

export function LogoTicker() {
  const logos = [
    { src: imgTalosOpfPngProjectBody2, alt: "Talos", width: "126px", height: "93px" },
    { src: imgTalosOpfPngProjectBody3, alt: "Partner 2", width: "160px", height: "49px" },
    { src: imgLogo03, alt: "Partner 3", width: "213px", height: "49px" },
  ];

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Logo container with animation */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-[58px] px-4 animate-fade-in">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              style={{
                width: `min(${logo.width}, 30vw)`,
                height: logo.height,
                maxWidth: logo.width
              }}
            >
              <img
                alt={logo.alt}
                className="absolute inset-0 w-full h-full object-contain"
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
