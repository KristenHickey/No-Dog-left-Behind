import React, { useContext, useEffect, useState } from 'react'
import APIservice from '../APIservice'
import { UserContext } from '../Context/UserProvider';
import { Dog, IUserContext } from '../interfaces'
import { filterFavourites } from '../helpers'
import DogCard from './DogCard';
import LottieDog from '../Common/Lottie';

const FavouritesPage: React.FC = () => {
  const { userId } = useContext<IUserContext>(UserContext);
  const [allDogs, setAllDogs] = useState<Dog[]>([])
  const [favouritesList, setFavouritesList] = useState<string[]>([])
  const [currentDog, setCurrentDog] = useState<string | null>(null)
  const [ready, setReady] = useState<boolean>(false)

  const isReady = (): void => {
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

  const removeFav = (userId: string, dogId: string): void => {
    if (hasFavouritesList) {
      APIservice.removeFromFavourites(userId, dogId)
        .then(() => { setFavouritesList(favouritesList.filter(id => id !== currentDog)) })
    }
  }

  return (
    <div className='pageContainer'>
      {hasDogs && hasFavouritesList ?
        ready ?
          <>
            < DogCard dogs={filterFavourites(allDogs, favouritesList)} setCurrent={setCurrentDog} />
            <div className="buttonDivFav">
              <button onClick={() => (userId && currentDog) && removeFav(userId, currentDog)}>Remove from your favourites</button>
            </div>
          </ > :
          <LottieDog />
        :
        ready ?
          <>
            <h2>No favourites yet! </h2>
            <h3>Save your favourite dogs from the matches on your home page here</h3>
          </ >
          :
          <LottieDog />
      }
    </div>
  )
}

export default FavouritesPage