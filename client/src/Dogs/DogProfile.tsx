import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import APIservice from '../APIservice';
import { Dog } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"
import SwiperCore, { EffectCreative } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCreative]);

// type DogProfile = {}

const DogProfile: React.FC = () => {
  const { id } = useParams();
  const [dog, setDog] = useState<Dog | null>(null);

  useEffect(() => {
    if (id) {
      APIservice.getOneDog(id)
        .then(data => setDog(data))
    }
  }, [id])

  return (
    <div>
      {dog ?
        <div>
          <Swiper loop={dog.imgs.length > 1 ? true : false} grabCursor={true} effect={'creative'} creativeEffect={{
            "prev": {
              "shadow": false,
              "translate": [0, 0, -400]
            },
            "next": {
              "translate": ["100%", 0, 0]
            }
          }} className="mySwiper">
            {dog.imgs.map((img: string) => {
              return (
                <SwiperSlide key={img} >
                  <figure className="img_container">
                    <img src={img} />
                  </figure>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="dogDetailsContainer">
            <h3>Hi! My name is <span className="dogDetails">{dog.name}</span></h3>
            <h3>I am <span className="dogDetails">{dog.age}</span> years old</h3>
            <h3>I am a <span className="dogDetails">{dog.gender}</span></h3>
            <h3>My breed is <span className="dogDetails">{dog.breed}</span> and I am a <span className="dogDetails">{dog.size}</span> sized dog</h3>
            {dog.outdoorSpace === "none" ? <h3> I do not need a private outdoor space</h3> : <h3>I will need a <span className="dogDetails">{dog.outdoorSpace}</span> sized private outdoor space</h3>}
            {dog.onlyDog === true ? <h3> I will need to be the only dog in the household</h3> : <h3>I am excited to have doggy siblings!</h3>}
            <h3>I <span className="dogDetails">{dog.cats ? "can" : "cannot"}</span> live with cats</h3>
            <h3>I <span className="dogDetails">{dog.smallAnimals ? "can" : "cannot"}</span> live with small animals</h3>
            {dog.children === "12+" ? <h3> I can live with children over the age of 12 years</h3> : <h3>I <span className="dogDetails">{dog.children === "true" ? "can" : "cannot"}</span> live with children of any age</h3>}
            {dog.exercise === "none" ? <h3> I don't need to be exercised and am happy to just chill at home</h3> : <h3>I will need to be exercised <span className="dogDetails">{dog.exercise}</span></h3>}
            {dog.specialNeeds === "false" ? <h3> I don't have any special needs</h3> : <h3>I have some special needs that include<span className="dogDetails">{dog.specialNeeds}</span></h3>}
            {dog.maxAlone < 4 ? <h3> I will struggle being left home alone</h3> : <h3>I am happy to be home alone for up to <span className="dogDetails">{dog.maxAlone}</span> hours in a day</h3>}
          </div>
        </div>
        : <h2>Fetching dog info!</h2>}
    </div>
  )
}


export default DogProfile