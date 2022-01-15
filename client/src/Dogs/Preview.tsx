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
import { filterMatches } from '../helpers';


function Preview() {
  const { userId } = useContext(UserContext);
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);


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
    <div>
      <Banner />
      {hasDogs && adopter ?
        < DogCard dogs={filterMatches(adopter, allDogs)} />
        : <h1>Fetching matches</h1>
      }
    </div>
  )
}

export default Preview;