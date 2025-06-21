import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ItemModal({ item, onClose, onEnquire }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl border max-w-2xl w-full p-6 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Item Details */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mb-1"><strong>Type:</strong> {item.type}</p>
        <p className="text-gray-600 mb-4"><strong>Description:</strong> {item.description}</p>

        {/* Image Carousel */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          className="rounded overflow-hidden"
        >
          {[item.coverImage, ...(item.additionalImages || [])].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`item-img-${i}`}
                className="object-contain h-[300px] w-full"
              />
            </div>
          ))}
        </Carousel>

        {/* Enquire Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onEnquire}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
