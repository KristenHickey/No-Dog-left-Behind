import React, { useContext, useEffect, useState } from 'react'
import APIservice from '../APIservice'
import { UserContext } from '../Context/UserProvider';
import { Dog } from '../interfaces'
import { filterFavourites } from '../helpers'
import DogCard from './DogCard';
import LottieDog from '../Common/Lottie';

function FavouritesPage() {

  const { userId } = useContext(UserContext);
  const [allDogs, setAllDogs] = useState<Dog[]>([])
  const [favouritesList, setFavouritesList] = useState<string[]>([])
  const [currentDog, setCurrentDog] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  const isReady = () => {
    setTimeout(() => setReady(true), 1500)
  }

  const hasDogs = allDogs.length > 0;
  const hasFavouritesList = favouritesList.length > 0;

  useEffect(() => {
    APIservice.getAllDogs()
      .then(data => (setAllDogs(data)))
    APIservice.getFavourtiesList(userId)
      .then(data => setFavouritesList(data))
    isReady()
  }, [])

  const removeFav = (userId: string, dogId: string) => {
    if (hasFavouritesList) {
      APIservice.removeFromFavourites(userId, dogId)
        .then(() => { setFavouritesList(favouritesList.filter(id => id !== currentDog)) })

    }

  }
  return (
    <div className='pageContainer'>
      {hasDogs && hasFavouritesList ?
        ready ?
          <div>
            < DogCard dogs={filterFavourites(allDogs, favouritesList)} setCurrent={setCurrentDog} />
            <div className="buttonDivFav">
              <button onClick={() => (userId && currentDog) && removeFav(userId, currentDog)}>Remove from your favourites</button>
            </div>
          </div> :
          <LottieDog />
        :
        ready ?
          <div>
            <h2>No favourites yet! </h2>
            <h3>Save your favourite dogs from the matches on your home page here</h3>
          </div>
          :
          <LottieDog />
      }
    </div>
  )
}

export default FavouritesPage