import React, { useContext } from 'react';
import APIservice from '../APIservice';
import { useState, useEffect } from 'react';
import './dogs.css'
import DogCard from './DogCard';
import { Dog, Adopter } from '../interfaces';
import "swiper/css";
import "swiper/css/effect-creative"
import Banner from '../Decorational/Banner';
import { UserContext } from '../Context/UserProvider'

function Preview() {
  const { userId } = useContext(UserContext);
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);

  const filterMatches = (user: Adopter, allDogs: Dog[]) => {
    const matches = allDogs.filter(dog => {
      if (dog.gender == user.genderPref)
        return dog
    })
    return matches
  };

  useEffect(() => {
    APIservice.getAllDogs()
      .then(data => setallDogs(data))
  }, [])

  useEffect(() => {
    if (userId) APIservice.getAdopter(userId)
      .then(data => setAdopter(data))
  }, [userId])

  return (
    <div>
      <Banner />
      {allDogs.length > 0 && adopter ?
        < DogCard dogs={filterMatches(adopter, allDogs)} />
        : <h1>Fetching matches</h1>
      }
    </div>
  )
}

export default Preview;