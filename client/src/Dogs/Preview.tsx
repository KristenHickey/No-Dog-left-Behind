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
import BottomMenu from '../BottomMenu';

function Preview() {
  //const { userId } = useContext(UserContext);
  // const userId = '61e1b91b9761846886f8ec6a';
  const [allDogs, setallDogs] = useState<Dog[]>([]);
  const [adopter, setAdopter] = useState<Adopter | null>(null);
  const [currentDog, setCurrentDog] = useState<string | null>(null)


  useEffect(() => {
    APIservice.getAllDogs()
      //always handle errors
      .then(data => setallDogs(data))
    APIservice.getAdopter("61e2f1aef7d13b4900fc7857")
      .then(data => setAdopter(data))
  }, [])

  // useEffect(() => {
  //   if (userId) APIservice.getAdopter(userId)
  //     .then(data => setAdopter(data))
  // }, [userId]);

  const hasDogs = allDogs.length > 0;
  console.log(allDogs)
  return (
    <div className="pageContainer">
      {/* <Banner /> */}
      {hasDogs && adopter ?
        <div>
          < DogCard dogs={filterMatches(adopter, allDogs)} setCurrent={setCurrentDog} />
          <div className="buttonDivPreview">
            <button onClick={() => console.log(currentDog)}>Add to shortlist</button>
            <button>Remove match</button>
          </div>

        </div>
        : <h1>Fetching matches</h1>
      }
      {/* <BottomMenu /> */}
    </div>
  )
}

export default Preview;