import React from 'react';
import './dogs.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Dog } from '../interfaces';

import "swiper/css";
import "swiper/css/effect-creative"
import SwiperCore, { EffectCreative } from 'swiper';


SwiperCore.use([EffectCreative]);

type DogCardProps = {
  dogs: Dog[]
}

const DogCard: React.FC<DogCardProps> = ({ dogs }) => {

  return (
    <Swiper loop={true} grabCursor={true} effect={'creative'} creativeEffect={{
      "prev": {
        "shadow": false,
        "translate": [
          0,
          0,
          -400
        ]
      },
      "next": {
        "translate": [
          "100%",
          0,
          0
        ]
      }
    }} className="mySwiper">
      {dogs.map((dog: Dog) => {
        return (
          <SwiperSlide key={dog._id} onClick={() => console.log("test")}>
            <figure className="img_container"><img src={dog.imgs[0]} />
              <figcaption>
                <span>{dog.name}</span>
                <span>{dog.age} years</span>
              </figcaption>
            </figure>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default DogCard;