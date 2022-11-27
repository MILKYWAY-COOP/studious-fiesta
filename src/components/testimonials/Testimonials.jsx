import React from 'react';
import './testimonials.scss';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
// import 'swiper/pagination';
// import 'swiper/navigation';

const data = [
  {
    avatar: AVTR3,
    name: 'James Gichuru',
    review:
      'Godwin is a visionary Tech Giant in the field of AI,  Machine Learning and Data Science,He is able to break down complex problems into simple solutions that can easily be understood and solve the major,  He is indeed among the youngest GOATS of modern Technology'
  },
  {
    avatar: AVTR1,
    name: 'Nancy Purity',
    review:
      'Godwin is the among the most reliable and competent engineers have worked with when it comes to the field of DataScience and Machine Learning, He can easily break down complex problems and give intuitive solutions that best improve reliability of a product'
  },
  {
    avatar: AVTR2,
    name: 'Victor Mawira',
    review:
      'What i Love about Godwin is the level of dedication and discipline He puts in His work, He is a pure optimist who believes their is a solution to every problem,  and indeed takes the lead in solving and providing reliable solutions to this complex problems'
  },
  {
    // avatar:AVTR4,
    name: 'Moses Ndereba',
    review:
      'This is a true teamleader who easily knows how to handle peoples queries, great listener who takes everything He is told to consideration,This is the man to work with, In Engineering fields, Data Science, ML and AI, This is just the guy you need to work with'
  }
];
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
