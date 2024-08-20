import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';

export default function Slider1() {
    return(<div className='w-[80vw] mx-auto mt-6'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      keyboard={{
        enabled: true,  // Enable keyboard navigation
    }}
      onSlideChange={() => console.log('here should be the actual card')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Keyboard]}
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