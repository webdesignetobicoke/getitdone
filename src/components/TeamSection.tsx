import { ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  setCurrentPage?: (page: string) => void;
}

const TeamSection = ({ setCurrentPage }: TeamSectionProps) => {
  const teamMembers = [
    {
      name: "Anas Al Halabi",
      role: "Denturist",
      image: "/Anas Al Halabi.avif",
    },
    {
      name: "Dr. Milad Essa",
      role: "Doctor of Dental Surgery",
      image: "/Dr. Milad Essa.avif",
    },
    {
      name: "Sajida Khan",
      role: "Level 2 Preventative Dental Assistant / Office Co-Ordinator",
      image: "/Sajida Khan.avif",
    },
    {
      name: "Erum Gulzar",
      role: "Dental Assistant",
      image: "/Erum Gulzar.avif",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Expert Dental Team</h2>
          <div className="w-24 h-1 bg-[#32A2CD] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our experienced team of dental professionals dedicated to providing you with the highest quality dental care and beautiful smiles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-[350px] w-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center bg-white relative z-10">
                <h3 className="font-bold text-xl text-[#32A2CD] mb-2 group-hover:text-[#2980B9] transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setCurrentPage?.('about-us')}
            className="border-2 border-secondary text-black hover:bg-secondary hover:text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
          >
            ABOUT US <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;