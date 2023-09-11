import React, { useState } from "react";

const images = [
  "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/03/ezgif-2-5452f5694b1f-compressed.jpg",
  "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/03/ezgif-2-5452f5694b1f-compressed.jpg",
  "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/03/ezgif-2-5452f5694b1f-compressed.jpg",
  "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/03/ezgif-2-5452f5694b1f-compressed.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-50vh overflow-hidden">
      <div
        className="flex transition-all duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full"
            style={{ flex: `0 0 ${100 / images.length}%` }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        onClick={prevImage}
      >
        Anterior
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        onClick={nextImage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Carousel;