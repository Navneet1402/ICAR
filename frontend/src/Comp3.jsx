import React from 'react';

const dummyImages = [
  'http://iisr3.bootgrow.com/assets/img/digital-india.png',
  'http://iisr3.bootgrow.com/assets/img/beti-bacho.png',
  'http://iisr3.bootgrow.com/assets/img/india-gov.png',
  'http://iisr3.bootgrow.com/assets/img/make-in-india.png',
  'http://iisr3.bootgrow.com/assets/img/my-gov.png',
  'http://iisr3.bootgrow.com/assets/img/pmnrf.png',
];

const Comp3 = () => {
  return (
    <div className="w-full bg-gray-200 py-4">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-4 text-center">
        {dummyImages.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img src={src} alt={`Image ${index + 1}`} className="h-16 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp3;
