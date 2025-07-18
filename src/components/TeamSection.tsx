import { ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  setCurrentPage?: (page: string) => void;
}

const TeamSection = ({ setCurrentPage }: TeamSectionProps) => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Cleaning Specialist",
      image: "/Mark_Carney_portrait_February_2020.jpg",
    },
    {
      name: "Maria Lopez",
      role: "Upholstery & Stain Expert",
      image: "/Mark_Carney_portrait_February_2020.jpg",
    },
    {
      name: "James Smith",
      role: "Residential Cleaning Pro",
      image: "/Mark_Carney_portrait_February_2020.jpg",
    },
    {
      name: "Priya Patel",
      role: "Commercial Cleaning Lead",
      image: "/Mark_Carney_portrait_February_2020.jpg",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Expert Cleaning Team</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our experienced team of cleaning professionals dedicated to providing you with the highest quality carpet and upholstery cleaning services.
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
                <h3 className="font-bold text-xl text-primary mb-2 group-hover:text-secondary transition-colors">
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
            className="border-2 border-primary text-black hover:bg-primary hover:text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
          >
            MEET OUR TEAM <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;