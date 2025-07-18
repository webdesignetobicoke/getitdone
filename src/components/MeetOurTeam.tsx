const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Cleaning Specialist",
      image: "/team-alex.jpg",
      description: `Alex has over 10 years of experience in the cleaning industry, specializing in carpet and upholstery care. He is dedicated to delivering spotless results and excellent customer service. In his free time, Alex enjoys hiking and volunteering in the community.`
    },
    {
      name: "Maria Lopez",
      role: "Upholstery & Stain Expert",
      image: "/team-maria.jpg",
      description: `Maria is known for her attention to detail and expertise in removing tough stains from all types of fabrics. She is passionate about using eco-friendly products and ensuring customer satisfaction. Maria loves gardening and spending time with her family.`
    },
    {
      name: "James Smith",
      role: "Residential Cleaning Pro",
      image: "/team-james.jpg",
      description: `James specializes in residential carpet and upholstery cleaning, bringing a friendly attitude and a meticulous approach to every job. Outside of work, he enjoys cycling and photography.`
    },
    {
      name: "Priya Patel",
      role: "Commercial Cleaning Lead",
      image: "/team-priya.jpg",
      description: `Priya leads our commercial cleaning projects, ensuring offices and businesses look their best. She is committed to high standards and efficient service. Priya enjoys reading and exploring new cuisines.`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-black">Meet Our Cleaning Team</h1>
            <p className="text-lg mb-6 text-gray-800">
              At GetItDone Cleaning Services, our experienced professionals are dedicated to making your spaces spotless and healthy. Each member brings unique expertise and a passion for cleanliness.
            </p>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6">
                <h3 className="text-2xl font-bold mb-4 text-black">Our Values</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-black">Excellence in Cleaning</h4>
                    <p className="text-gray-600">Committed to providing the highest quality cleaning services</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-black">Customer-Centered Approach</h4>
                    <p className="text-gray-600">Your comfort and satisfaction are our top priorities</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-black">Eco-Friendly Solutions</h4>
                    <p className="text-gray-600">Using safe, green products for a healthier environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto hidden md:block">
            <img 
              src="/team-cleaning.jpg"
              alt="Our Cleaning Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={member.name} className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="h-[500px] relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-black mb-2">{member.name}</h2>
                <h3 className="text-xl text-primary mb-6">{member.role}</h3>
                <div className="prose max-w-none">
                  {member.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;