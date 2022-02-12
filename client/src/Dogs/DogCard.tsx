import React, { useEffect, useState } from 'react';
import './dogs.less'
import { Swiper, SwiperSlide } from "swiper/react";
import { Dog } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"
import SwiperCore, { EffectCreative } from 'swiper';
import { useNavigate } from 'react-router-dom';
import DogImage from './DogImage';

SwiperCore.use([EffectCreative]);

type DogCardProps = {
  dogs: Dog[];
  setCurrent: React.Dispatch<React.SetStateAction<string | null>>;
}

const DogCard: React.FC<DogCardProps> = ({ dogs, setCurrent }) => {
  const [currentPage, setcurrentPage] = useState<string>('')
  const navigate = useNavigate();

  useEffect(() => {
    setCurrent(dogs[0]._id)
    setcurrentPage(window.location.pathname)
  }, [])

  return (
    <div className="pageContainer" >
      <>
        {currentPage === '/home'
          ? <h3 className='numMatches'>You have {dogs.length} {dogs.length === 1 ? "match!" : "matches, swipe to see them!"}</h3>
          : <h3 className='numMatches'>You have {dogs.length} {dogs.length === 1 ? "saved favourite!" : "saved favourites, swipe to see them!"}</h3>
        }

        <Swiper onSlideChange={(swiper) => { setCurrent(dogs[swiper.realIndex]._id) }} onSlidesLengthChange={(swiper) => {
          if (dogs[swiper.realIndex]) setCurrent(dogs[swiper.realIndex]._id)
          else setCurrent(dogs[0]._id)
        }} loop={dogs.length > 1 ? true : false} grabCursor={true} effect={'creative'} creativeEffect={{
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
                <DogImage img={dog.imgs[0]} name={dog.name} age={dog.age} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </ >
    </div >
  )
}


export default DogCard;

