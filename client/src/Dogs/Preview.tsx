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
import { breed, gender, age, size, exercise, outdoorSpace, cats, onlyDog, smallAnimals, maxAlone, specialNeeds } from '../helpers';

function Preview() {
  const { userId } = useContext(UserContext);
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);

  const filterMatches = (user: Adopter, allDogs: Dog[]) => {
    const matches = allDogs.filter(dog => {
      if (breed(dog.breed, user.breedPref) &&
        gender(dog.gender, user.genderPref) &&
        age(dog.age, user.agePref) &&
        size(dog.size, user.sizePref) &&
        exercise(dog.exercise, user.exercise) &&
        outdoorSpace(dog.outdoorSpace, user.outdoorSpace) &&
        cats(dog.cats, user.cats) &&
        onlyDog(dog.onlyDog, user.dogs) &&
        smallAnimals(dog.smallAnimals, user.smallAnimals) &&
        maxAlone(dog.maxAlone, user.maxAlone) &&
        specialNeeds(dog.specialNeeds, user.specialNeeds)) {
        return dog
      }
    })
    return matches
  };

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