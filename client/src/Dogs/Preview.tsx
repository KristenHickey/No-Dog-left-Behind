import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from '../Context/UserProvider'
import { filterMatches} from '../helpers';
import { Dog, Adopter, IUserContext } from '../interfaces';
import APIservice from '../APIservice';
import DogCard from './DogCard';
import LottieDog from '../Common/Lottie';
import './dogs.less'
import '../App.less'
import "swiper/css";
import "swiper/css/effect-creative"


const Preview:React.FC = () => {
  const { userId } = useContext<IUserContext>(UserContext);
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);
  const [currentDog, setCurrentDog] = useState<string | null>(null)
  const [ready, setReady] = useState<boolean>(false)

  const isReady = (): void => {
    setTimeout(() => setReady(true), 2000)
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
      .then(data => setallDogs(data))
  }, [])

  useEffect(() => {
    if (userId) APIservice.getAdopter(userId)
      .then(data => setAdopter(data))
    isReady()
  }, [userId]);

  const hasDogs = adopter && filterMatches(adopter, allDogs).length > 0;

  return (
    <div className="pageContainer">
      {hasDogs && adopter ?
        ready ?
          <>
            < DogCard dogs={filterMatches(adopter, allDogs)} setCurrent={setCurrentDog} />
            <div className="buttonDivPreview">
              <button onClick={() => { (currentDog && userId) && addFav(userId, currentDog) }}>Add to favourites</button>
              <button onClick={() => { (currentDog && userId) && removeMatch(userId, currentDog) }}>Remove match</button>
            </div>
          </ >
          :
          <LottieDog />
        :
        ready ?
          <>
            <h2>No new matches found! </h2>
            <h3>Please check back later or update your adoption preferences</h3>
          </ >
          :
          <LottieDog />
      }
    </div >
  )
}



export default Preview;