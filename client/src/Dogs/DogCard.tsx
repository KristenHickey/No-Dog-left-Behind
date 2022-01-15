import React from 'react';
import './dogs.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Dog } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"
import SwiperCore, { EffectCreative } from 'swiper';
import { useNavigate } from 'react-router-dom';


SwiperCore.use([EffectCreative]);

type DogCardProps = {
  dogs: Dog[]
}

const DogCard: React.FC<DogCardProps> = ({ dogs }) => {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <h3>You have {dogs.length} matches, swipe to see them!</h3>

      <Swiper loop={dogs.length > 1 ? true : false} grabCursor={true} effect={'creative'} creativeEffect={{
        "prev": {
          "shadow": false,
          "translate": [0, 0, -400]
        },
        "next": {
          "translate": ["100%", 0, 0]
        }
      }} className="mySwiper">
        {dogs.map((dog: Dog) => {
          return (
            <SwiperSlide key={dog._id} onClick={() => navigate(`/dog/${dog._id}`)}>
              <figure className="img_container"><img src={dog.imgs[0]} />
                <figcaption className="cardfigcaption">
                  <span>{dog.name}</span>
                  <span>{dog.age} years</span>
                </figcaption>
              </figure>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </div>
  )
}

export default DogCard;