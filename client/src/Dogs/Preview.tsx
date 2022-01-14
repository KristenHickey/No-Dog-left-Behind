import React from 'react';
import APIservice from '../APIservice';
import { useState, useEffect } from 'react';
import './dogs.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative"

import SwiperCore, {
  EffectCreative
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCreative]);


interface Dog {
  name: string,
  imgs: string[]
  age: number
}

function Preview() {
  const [allDogs, setallDogs] = useState<Dog[]>([]);

  useEffect(() => {
    APIservice.getAllDogs()
      .then(data => setallDogs(data))
  }, [])
  console.log(allDogs[0])

  return (
    <div>
      {allDogs.length > 0 ?
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
          {allDogs.map((dog: Dog) => {
            return (
              <SwiperSlide onClick={() => console.log("test")}>
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
        : <h1>hello</h1>
      }

    </div>
  )

}

export default Preview;