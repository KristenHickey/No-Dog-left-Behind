import React, { useContext } from 'react';
import APIservice from '../APIservice';
import { useState, useEffect } from 'react';
import './dogs.css'
import DogCard from './DogCard';
import { Dog, Adopter } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"

import { UserContext } from '../Context/UserProvider'
import { filterMatches } from '../helpers';


function Preview() {
  const { userId } = useContext(UserContext);
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);
  const [currentDog, setCurrentDog] = useState<string | null>(null)

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
  }, [userId]);

  const hasDogs = allDogs.length > 0;
  console.log(allDogs)
  return (
    <div className="pageContainer">

      {hasDogs && adopter ?
        <div>
          < DogCard dogs={filterMatches(adopter, allDogs)} setCurrent={setCurrentDog} />
          <div className="buttonDivPreview">
            <button onClick={() => { (currentDog && userId) && addFav(userId, currentDog) }}>Add to shortlist</button>
            <button onClick={() => { (currentDog && userId) && removeMatch(userId, currentDog) }}>Remove match</button>
          </div>

        </div>
        : <h1>Fetching matches</h1>
      }

    </div>
  )
}

export default Preview;