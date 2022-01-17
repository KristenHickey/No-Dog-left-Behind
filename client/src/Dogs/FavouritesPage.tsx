import React, { useContext, useEffect, useState } from 'react'
import APIservice from '../APIservice'
import { UserContext } from '../Context/UserProvider';
import { Dog } from '../interfaces'
import { filterFavourites } from '../helpers'
import DogCard from './DogCard';

function FavouritesPage() {
  const { userId } = useContext(UserContext);
  const [allDogs, setAllDogs] = useState<Dog[]>([])
  const [favouritesList, setFavouritesList] = useState<string[]>([])
  const [currentDog, setCurrentDog] = useState<string | null>(null)

  useEffect(() => {
    APIservice.getAllDogs()
      .then(data => (setAllDogs(data)))
    APIservice.getFavourtiesList(userId)
      .then(data => setFavouritesList(data))
  }, [])

  const hasDogs = allDogs.length > 0;
  const hasFavouritesList = favouritesList.length > 0;
  return (
    <div>
      {hasDogs && hasFavouritesList ?
        <div>
          < DogCard dogs={filterFavourites(allDogs, favouritesList)} setCurrent={setCurrentDog} />
          <div className="buttonDivPreview">
            <button onClick={() => (currentDog && userId) && APIservice.removeFromFavourites(userId, currentDog)}>Remove from your favourites</button>
          </div>

        </div>
        : <h1>Fetching matches</h1>
      }
    </div>
  )
}

export default FavouritesPage