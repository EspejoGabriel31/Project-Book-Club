import React from 'react';
import styles from './Find.css';
import Card from './Card';


// import Swiper, Slide, Navigation
import { Navigation,Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import book1 from '../pictures/100YearsOfSolitude2.jpg'
import book2 from '../pictures/ChainsawMan2.jpeg'
import book3 from '../pictures/EastOfEden2.jpg'
import book4 from '../pictures/Mother of Learning2.jpg'
import book5 from '../pictures/PeopleOfOstrichMountain.jpg'
import book6 from '../pictures/SpyFamily2.jpeg'
import book7 from '../pictures/ThingsFallApart3.jpg'
import book8 from '../pictures/ThornBirds.jpg'
import book9 from '../pictures/Unbowed2.jpg'
import book10 from '../pictures/UncleTomCabin2.jpg'




const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your club!</h1>
        <div className="bg">
          <p>
            <span>Explore the different genres</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
              image ={book1}
              book='100 Years of Solitude'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={book2}
              book='Chainsaw Man'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={book3}
              book='East of Eden'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={book4}
              book='Mother of Learning'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={book5}
              book='People of Ostrich Mountain'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image={book6}
              book='Spy Family'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={book7}
              book='Things Fall Apart'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             image={book8}
             book='ThornBirds'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             image={book9}
             book='Unbowed'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={book10}
              book='Uncle Toms Cabin'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;