import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import APIservice from '../APIservice';
import { Dog } from '../interfaces';
import "swiper/less";
import "swiper/less/effect-creative"
import SwiperCore, { EffectCreative } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Modal } from 'antd';
import ContactModal from './ContactModal';


SwiperCore.use([EffectCreative]);

// type DogProfile = {}

const DogProfile: React.FC = () => {
  const { id } = useParams();
  const [dog, setDog] = useState<Dog | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const handleOk = (): void => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    if (id) {
      APIservice.getOneDog(id)
        .then(data => setDog(data))
    }
    console.log(window.location)
  }, [id])

  return (
    <div >
      {dog ?
        <div className="pageContainer allowScroll">

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
                    <figcaption className="profileFigCap">
                      <span>{dog.imgs.indexOf(img) + 1}/{dog.imgs.length}</span>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="dogDetailsContainer">
            <p>Hi! My name is <span className="dogDetails">{dog.name}</span></p>
            <p>I am <span className="dogDetails">{dog.age}</span> years old</p>
            <p>I am a <span className="dogDetails">{dog.gender}</span></p>
            <p>My breed is <span className="dogDetails">{dog.breed}</span> and I am a <span className="dogDetails">{dog.size}</span> sized dog</p>
            {dog.outdoorSpace === "none" ? <p> I <span className="dogDetails">do not need </span>a private outdoor space</p> : <p>I will need a <span className="dogDetails">{dog.outdoorSpace}</span> sized private outdoor space</p>}
            {dog.onlyDog === true ? <p> I will need to be the <span className="dogDetails">only dog</span> in the household</p> : <p>I am <span className="dogDetails">excited to have doggy siblings!</span></p>}
            <p>I <span className="dogDetails">{dog.cats ? "can" : "cannot"}</span> live with cats</p>
            <p>I <span className="dogDetails">{dog.smallAnimals ? "can" : "cannot"}</span> live with small animals</p>
            {dog.children === "12+" ? <p> I can live with children <span className="dogDetails">over the age of 12 years</span></p> : <p>I <span className="dogDetails">{dog.children === "true" ? "can" : "cannot"}</span> live with children of any age</p>}
            {dog.exercise === "none" ? <p> I don't need to be exercised and am happy to just chill at home</p> : <p>I will need to be exercised <span className="dogDetails">{dog.exercise}</span></p>}
            {dog.specialNeeds === "false" ? <p> I <span className="dogDetails">don't </span>have any special needs</p> : <p>I have some special needs that include <span className="dogDetails">{dog.specialNeeds}</span></p>}
            {dog.maxAlone < 4 ? <p> I will <span className="dogDetails">struggle being left home alone</span></p> : <p>I am happy to be home alone for up to <span className="dogDetails">{dog.maxAlone} hours</span> in a day</p>}
            <div className="buttonDivProfile">
              <Button type="primary" onClick={showModal}>Contact my carers about me!</Button>
              <ContactModal isModalVisible={isModalVisible} handleOk={handleOk} />
            </div>
          </div>
        </div>
        : <h2>Fetching dog info!</h2>}
    </div>
  )
}


export default DogProfile