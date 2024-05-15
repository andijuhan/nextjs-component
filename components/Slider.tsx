'use client';
import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slider = () => {
   const images = [
      {
         url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
      },
      {
         url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
      {
         url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      },

      {
         url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      },
      {
         url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const nextSlide = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide();
      }, 5000);

      return () => clearInterval(interval);
   }, [currentIndex]);

   return (
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
         <div
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
         >
            {/* Dot Indicator */}
            <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
               {images.map((image, index) => (
                  <div
                     key={index}
                     onClick={() => setCurrentIndex(index)}
                     className={`text-2xl cursor-pointer ${
                        currentIndex === index ? 'text-white' : 'text-white/30'
                     } hover:text-white drop-shadow-xl`}
                  >
                     <RxDotFilled />
                  </div>
               ))}
            </div>
         </div>
         {/* Left Aarrow */}
         <div
            className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
            onClick={prevSlide}
         >
            <BsChevronCompactLeft size={30} />
         </div>
         {/* Right Aarrow */}
         <div
            className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
            onClick={nextSlide}
         >
            <BsChevronCompactRight size={30} />
         </div>
      </div>
   );
};

export default Slider;
