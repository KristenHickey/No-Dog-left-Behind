import React, { useEffect, useState } from 'react';
import './dogs.less'
import { Swiper, SwiperSlide } from "swiper/react";
import { Dog } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"
import SwiperCore, { EffectCreative } from 'swiper';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../Animations/lf30_editor_gkntsx9y.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

SwiperCore.use([EffectCreative]);

type DogCardProps = {
  dogs: Dog[];
  setCurrent: React.Dispatch<React.SetStateAction<string | null>>;
}

const DogCard: React.FC<DogCardProps> = ({ dogs, setCurrent }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setCurrent(dogs[0]._id)
  }, [dogs])


  return (
    <div className="pageContainer" >
      <div>
        <h3 className='numMatches'>You have {dogs.length} matches, swipe to see them!</h3>

        <Swiper onSlideChange={(swiper) => setCurrent(dogs[swiper.realIndex]._id)} loop={dogs.length > 1 ? true : false} grabCursor={true} effect={'creative'} creativeEffect={{
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

    </div >

  )
}

export default DogCard;