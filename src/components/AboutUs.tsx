const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Milad Essa",
      role: "Doctor of Dental Surgery",
      image: "/Dr. Milad Essa.avif",
      description: `Dr. Milad Essa received her D.D.S (Doctor of Dental Surgery) Degree from Dalhousie University in Halifax, Nova Scotia and her license to practice dentistry in the province of Ontario. She also received a Bachelor degree of Dental Surgery (B.D.S) from the University of Baghdad in Iraq.

She is a standing member of the Canadian Dental Association, the Ontario Dental Association, and the Royal College of Dental Surgeons of Ontario. She has dedicated her academic and practice career to providing her patients with the best dentistry has to offer. In fact, she is continually improving herself and upgrading her knowledge with the latest dental techniques, approaches, and methodologies.

In her spare time, she likes to travel around the world and enjoys spending time with her family. She is a resident of Mississauga, Ontario, and is married with a beautiful daughter.`
    },
    {
      name: "Anas Al Halabi",
      role: "Denturist",
      image: "/Anas Al Halabi.avif",
      description: `Anas Al Halabi, Denturist and first Vice President of the Denturist Association Of Ontario, and a member of various other prestigious associations such as Toronto Implant Association and DISC- Denturism Implant Study Club and ADIA- The Association Of Dental Implants. 

Anas is a valued member of our team who has helped many get their smiles back. Anas is a very knowledgeable Denturist which has received thousands of compliments on work he has done. Mr. Al Halabi is always dedicated to making sure patients are receiving top quality dentures and are leaving with a smile! 

Mr. Halabi enjoys spending time with family and friends as well as traveling. He is fluent in English and Arabic.`
    },
    {
      name: "Sajida Khan",
      role: "Level 2 Preventative Dental Assistant / Office Co-Ordinator",
      image: "/Sajida Khan.avif",
      description: `Sajida is a certified level 2 dental assistant and certified member of the NDAEB. She is a graduated from Toronto School of Business.

Before joining Cura Dental, Sajida earned extensive experience in both the clinical and administrative areas for over 15 yrs where she took pride in making patients feel comfortable and at ease by providing informative quality care during their dental treatments.

Ms. Khan proves this daily in her thoughtful attitude and communications with the patients at Cura Dental. experienced in dealing with insurance companies to help patients understand their insurance benefits, she is always ready to fulfill challenges and willing to always improve patient care processes.

Ms. Khan speaks English, Urdu and Hindi.`
    },
    {
      name: "Erum Gulzar",
      role: "Dental Assistant",
      image: "/Erum Gulzar.avif",
      description: `Erum's dynamic roles as a dedicated dental assistant, nurturing mother, and beloved grandmother converge to shape her exceptional approach to patient care. Her natural ability to connect with kids and youth fosters a welcoming environment, ensuring comfortable dental experiences for all.

Beyond her dental expertise, Erum finds joy in staying active through walks and cycling, and her culinary flair adds to her versatile personality. With her commitment to promoting oral health and her nurturing demeanor, Erum enriches our team and enhances patient care.`
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-black">Meet Our Expert Team</h1>
            <p className="text-lg mb-6 text-gray-800">
              At Cura Dental Clinic, our team of experienced professionals is dedicated to providing exceptional dental care in a comfortable and welcoming environment. Each member brings unique expertise and a commitment to your oral health.
            </p>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6">
                <h3 className="text-2xl font-bold mb-4 text-black">Our Values</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Excellence in Care</h4>
                    <p className="text-gray-600">Committed to providing the highest quality dental services</p>
                  </div>
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Patient-Centered Approach</h4>
                    <p className="text-gray-600">Your comfort and well-being are our top priorities</p>
                  </div>
                  <div className="border-l-4 border-[#32A2CD] pl-4">
                    <h4 className="font-semibold text-black">Continuous Learning</h4>
                    <p className="text-gray-600">Staying updated with the latest dental techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="/Dr. Milad Essa.avif"
              alt="Dr. Milad Essa"
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
                <h3 className="text-xl text-[#32A2CD] mb-6">{member.role}</h3>
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