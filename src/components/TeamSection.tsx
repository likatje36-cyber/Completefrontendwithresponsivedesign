import img68F804136C6467000A2D6B1F1 from "figma:asset/f8717ce44b39b713850688a20abc5b4076bc6fb1.png";
import imgLink from "figma:asset/2d2c1afaa95367a6797166e55ee771ea79e74cfb.png";
import imgLink1 from "figma:asset/3bb419cf3aae8ca740c790687db7df2b7109421a.png";
import imgLink2 from "figma:asset/d04e901bd3bed5a587c1238cb16ce42342770dab.png";
import img11F7E1D140Ad4Fae8228695Cf53E419C1 from "figma:asset/217d0b598a5f9255e76c3194bf7461ed2492db1b.png";

export function TeamSection() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: img68F804136C6467000A2D6B1F1,
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: imgLink,
    },
    {
      name: 'Emily Watson',
      role: 'Head of Operations',
      image: imgLink1,
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: imgLink2,
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      image: img11F7E1D140Ad4Fae8228695Cf53E419C1,
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px]">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="bg-clip-text bg-gradient-to-b from-[#000000] to-[#001354] text-2xl sm:text-3xl lg:text-4xl xl:text-[54px] xl:leading-[60px] mb-4 lg:mb-6 tracking-tight"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Our Team
          </h2>
          <p className="text-base sm:text-lg lg:text-[22px] lg:leading-[31px] text-[#010d3e] max-w-[700px] mx-auto">
            Meet the experts building the future of decentralized work
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={member.image}
                />
              </div>

              {/* Info */}
              <div className="p-4 lg:p-6 space-y-1 lg:space-y-2">
                <h3 className="text-lg sm:text-xl text-black font-semibold">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#010d3e]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-base sm:text-lg lg:text-xl text-[#010d3e] leading-relaxed max-w-[900px] mx-auto">
            Learn more about the PCT Token presale and be part of the revolution. 
            Join our community of early adopters building the future of work.
          </p>
        </div>
      </div>
    </section>
  );
}
