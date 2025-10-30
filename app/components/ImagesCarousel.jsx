// import "../styles/styles.css";
import {  } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";


export default function ImagesCarousel({ images }) {
	
	return(

		<Swiper

			modules={[Navigation, Pagination]}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true}}
			scrollbar={{ draggable: true}}
			>
			{images.map( (image) => (
				<SwiperSlide key={image}>
					<img src={image} alt="product image" className='w-full w-max-[896px] h-[542px] object-scale-down' />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
