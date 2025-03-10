import { 
  Ruler, 
  ArrowRight,
  AlertTriangle,
  FileDown,
  MessageCircleQuestion,
  Printer,
  ArrowLeftRight,
  ArrowUpDown,
  SquareCode
} from 'lucide-react';

const MeasuringGuide = () => {
  const tools = [
    { name: 'Metal Tape Measure', icon: Ruler },
    { name: 'Pencil', icon: ArrowRight },
    { name: 'Paper', icon: FileDown }
  ];

  const commonMistakes = [
    "Not accounting for handle clearance",
    "Mixing up width and height measurements",
    "Not checking for square windows",
    "Measuring only one spot per dimension",
    "Not considering mount depth"
  ];

  const faqs = [
    {
      question: "What's the difference between inside and outside mount?",
      answer: "Inside mount fits within the window frame, while outside mount covers the frame and extends beyond it."
    },
    {
      question: "How much overlap should I add for outside mount?",
      answer: "Generally, add 2-3 inches per side for optimal light blockage and aesthetics."
    },
    {
      question: "How do I measure for bay windows?",
      answer: "Measure each section separately and note angles between windows for proper mounting hardware."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How to Measure for Blinds & Shutters</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get accurate measurements for a perfect fit. Follow our step-by-step guide to ensure your window treatments look and function perfectly.
        </p>
      </div>

      {/* Mount Type Comparison */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <SquareCode className="text-[#A4C639]" size={24} />
            <h3 className="text-xl font-semibold">Inside Mount</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">Fits inside your window frame for a clean, built-in look.</p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Minimum 2" frame depth</li>
                <li>Square corners</li>
                <li>Unobstructed glass</li>
              </ul>
            </div>
            <div className="relative h-48 bg-white rounded-lg overflow-hidden">
              <img 
                src="/inside-mount-diagram.svg" 
                alt="Inside Mount Diagram"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <SquareCode className="text-[#A4C639]" size={24} />
            <h3 className="text-xl font-semibold">Outside Mount</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">Mounted on or above your window frame for maximum coverage.</p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">Advantages:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Makes windows appear larger</li>
                <li>Better light control</li>
                <li>Works with any window</li>
              </ul>
            </div>
            <div className="relative h-48 bg-white rounded-lg overflow-hidden">
              <img 
                src="/outside-mount-diagram.svg" 
                alt="Outside Mount Diagram"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tools You'll Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#A4C639] bg-opacity-10 rounded-full flex items-center justify-center">
                  <IconComponent className="text-[#A4C639]" size={24} />
                </div>
                <span className="font-medium">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step by Step Instructions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step Instructions</h2>
        
        {/* Windows */}
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold mb-6">For Windows</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#A4C639] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Measure the Width</h4>
                <p className="text-gray-600 mb-4">
                  Measure the width at three points: top, middle, and bottom. Use the smallest measurement for inside mount, largest for outside mount.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#A4C639]">
                  <ArrowLeftRight size={16} />
                  <span>Measure horizontally at three points</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#A4C639] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Measure the Height</h4>
                <p className="text-gray-600 mb-4">
                  Measure the height at three points: left, middle, and right. Use the longest measurement for both mount types.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#A4C639]">
                  <ArrowUpDown size={16} />
                  <span>Measure vertically at three points</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doors */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-6">For Doors</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#A4C639] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Consider Handle Clearance</h4>
                <p className="text-gray-600">
                  Account for door handles and hardware when measuring depth and width.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#A4C639] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Check Opening Direction</h4>
                <p className="text-gray-600">
                  Note which way the door opens to ensure proper mounting and operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonMistakes.map((mistake, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl flex items-start gap-4">
              <AlertTriangle className="text-[#A4C639] flex-shrink-0" size={24} />
              <p className="text-gray-600">{mistake}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Measurement Worksheet */}
      <div className="mb-16">
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Measurement Worksheet</h2>
            <button className="flex items-center gap-2 bg-[#A4C639] text-white px-6 py-2 rounded-full">
              <Printer size={20} />
              <span>Print Worksheet</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4">Window Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Room/Window Name</label>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Mount Type</label>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4">Measurements</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Width (inches)</label>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Height (inches)</label>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <MessageCircleQuestion className="text-[#A4C639] flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#A4C639] bg-opacity-10 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help with Measurements?</h2>
        <p className="text-gray-600 mb-6">
          Our experts are here to help ensure you get the perfect fit for your windows.
        </p>
        <button className="bg-[#A4C639] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
          Schedule a Free Measurement
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default MeasuringGuide;