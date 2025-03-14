interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  title = "60-Min Whitening | 3+ Shade Jump"
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-4">
          <div className="relative mb-4">
            <img
              src={beforeImage}
              alt={`Before - ${title}`}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">{beforeLabel}</span>
          </div>
          <div className="relative mb-4">
            <img
              src={afterImage}
              alt={`After - ${title}`}
              className="w-full h-60 object-cover rounded-b-lg"
            />
            <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">{afterLabel}</span>
          </div>
          <p className="text-center text-gray-700 font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;