const BeforeAfter = () => {
  const transformations = [
    {
      title: '60-Min Whitening | 3+ Shade Jump',
      before: 'before-after/teeth-whitening-before.webp',
      after: 'before-after/teeth-whitening-after.webp'
    },
    {
      title: '60-Min Whitening | 3+ Shade Jump',
      before: 'before-after/teeth-whitening-before.webp',
      after: 'before-after/teeth-whitening-after.webp'
    },
    {
      title: '60-Min Whitening | 3+ Shade Jump',
      before: 'before-after/teeth-whitening-before.webp',
      after: 'before-after/teeth-whitening-after.webp'
    },
  ];
  
  return (
    <section className="py-16" style={{ backgroundColor: '#81c5c6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Real people. Real results.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-4">
                <div className="relative mb-4">
                  <img
                    src={item.before}
                    alt={`Before - ${item.title}`}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative mb-4">
                  <img
                    src={item.after}
                    alt={`After - ${item.title}`}
                    className="w-full h-40 object-cover rounded-b-lg"
                  />
                  <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">AFTER</span>
                </div>
                <p className="text-center text-gray-700 font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;