import React, { useContext } from 'react';
import APIservice from '../APIservice';
import { useState, useEffect } from 'react';
import './dogs.less'
import DogCard from './DogCard';
import { Dog, Adopter } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"
import { UserContext } from '../Context/UserProvider'
import { filterMatches } from '../helpers';
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

function Preview() {
  const { userId } = useContext(UserContext);
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);
  const [currentDog, setCurrentDog] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  const isReady = () => {
    setTimeout(() => setReady(true), 3000)
  }

  const addFav = (userId: string, dogId: string): void => {
    if (currentDog && userId) {
      APIservice.addToFavourites(userId, currentDog)
        .then(() => { setallDogs(allDogs.filter(dog => dog._id !== currentDog)) })
    }

  }
  const removeMatch = (userId: string, dogId: string): void => {
    if (currentDog && userId) {
      APIservice.dontShowInMatches(userId, currentDog)
        .then(() => { setallDogs(allDogs.filter(dog => dog._id !== currentDog)) })
    }
  }

  useEffect(() => {
    APIservice.getAllDogs()
      //always handle errors
      .then(data => setallDogs(data))
  }, [])

  useEffect(() => {
    if (userId) APIservice.getAdopter(userId)
      .then(data => setAdopter(data))
    isReady()
  }, [userId]);

  const hasDogs = allDogs.length > 0;

  return (
    <div className="pageContainer">

      {hasDogs && adopter && ready ?
        <div>
          < DogCard dogs={filterMatches(adopter, allDogs)} setCurrent={setCurrentDog} />
          <div className="buttonDivPreview">
            <button onClick={() => { (currentDog && userId) && addFav(userId, currentDog) }}>Add to shortlist</button>
            <button onClick={() => { (currentDog && userId) && removeMatch(userId, currentDog) }}>Remove match</button>
          </div>

        </div>
        : <Lottie
          options={defaultOptions}
          height={300}
          width={300}
        />
      }

    </div>
  )
}

export default Preview;