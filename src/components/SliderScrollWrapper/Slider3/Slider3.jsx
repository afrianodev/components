import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider3() {
    return(<div className='w-[80vw] mx-auto mt-28'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      navigation={true}
      keyboard={{
        enabled: true,  // Enable keyboard navigation
    }}
      onSlideChange={(e) => console.log(e.realIndex)}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Keyboard, Navigation]}
      breakpoints={{
        // when window width is <= 640px

        // when window width is > 1024px
        768: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }}
    >
      <SwiperSlide className='h-[150px] !w-[calc100%/3 - 50px] md:!w-[calc(100%/5 - 50px)] bg-black text-white'>Slide 1</SwiperSlide>
      <SwiperSlide className='h-[150px] !w-[calc100%/3 - 50px] md:!w-[calc(100%/5 - 50px)] bg-black text-white'>Slide 2</SwiperSlide>
      <SwiperSlide className='h-[150px] !w-[calc100%/3 - 50px] md:!w-[calc(100%/5 - 50px)] bg-black text-white'>Slide 3</SwiperSlide>
      <SwiperSlide className='h-[150px] !w-[calc100%/3 - 50px] md:!w-[calc(100%/5 - 50px)] bg-black text-white'>Slide 4</SwiperSlide>
      <SwiperSlide className='h-[150px] !w-[calc100%/3 - 50px] md:!w-[calc(100%/5 - 50px)] bg-black text-white'>Slide 5</SwiperSlide>
      <SwiperSlide className='h-[150px] !w-[calc100%/3 - 50px] md:!w-[calc(100%/5 - 50px)] bg-black text-white'>Slide 6</SwiperSlide>
    </Swiper>
    </div>)
}