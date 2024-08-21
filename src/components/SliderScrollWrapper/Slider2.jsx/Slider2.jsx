import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';

export default function Slider1() {
    // State to keep track of the active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (e) => {
        // Update the active slide index
        setActiveIndex(e.realIndex); // realIndex is used here to correctly track the index with loop
    };

    const getCenteredIndex = (slidesPerView) => {
        // Calculate the centered index based on the current active index and slidesPerView
        return (activeIndex + Math.floor(slidesPerView / 2)) % 6; // Modulo 6 to ensure it loops correctly
    };

    return (
        <div className='w-[80vw] mx-auto mt-6 h-[200px]'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3} // Default view
                loop={true}
                keyboard={{ enabled: true }}
                onSlideChange={handleSlideChange}
                modules={[Keyboard]}
                breakpoints={{
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                {['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'].map((slideText, index) => {
                    // Get the current slidesPerView from breakpoints or default
                    const slidesPerView = window.innerWidth >= 768 ? 5 : 3;

                    // Calculate the centered index
                    const centeredIndex = getCenteredIndex(slidesPerView);

                    return (
                        <SwiperSlide
                            key={index}
                            className='h-[200px]'
                        >
                            <div className={`h-[150px] !w-[calc(100%/3 - 50px)] md:!w-[calc(100%/5 - 50px)] mt- text-white transform ${
                                centeredIndex === index ? 'bg-blue-500 !scale-y-150' : 'bg-black'
                            }`}></div>
                            {slideText}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <p className='text-xl font-bold mt-4 text-center'>
                Centered Slide: {((activeIndex + Math.floor(5/ 2)) % 6)+1}
            </p>
        </div>
    );
}
