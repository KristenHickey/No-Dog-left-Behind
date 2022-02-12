import { Adopter, Dog } from "./interfaces"

export const breed = (dogBreed: string, userPreference: string[]): boolean => {
  if (userPreference.includes('All')) {
    return true
  }
  return userPreference.includes(dogBreed)
}

export const gender = (dogGender: string, userPreference: string): boolean => {
  if (userPreference === 'none' || dogGender.toLowerCase() === userPreference.toLowerCase()) {
    return true
  }
  return false
}

export const age = (dogAge: number, userPreference: string[]): boolean => {
  if (userPreference.includes('none')) {
    return true
  }
  if (userPreference[-1] !== '10+') {
    for (let i = 0; i < userPreference.length; i++) {
      const min: number = parseInt(userPreference[i].substring(0));
      const max: number = parseInt(userPreference[i].substring(-1))
      if (dogAge >= min && dogAge <= max) {
        return true
      }
    }
  } else {
    if (dogAge >= 10) {
      return true
    }
  }
  return false
}

export const size = (dogSize: string, userPreference: string[]): boolean => {
  return userPreference.includes(dogSize)
}

export const exercise = (dogExerciserReq: string, userPreference: string): boolean => {

  if (userPreference.toLowerCase() === dogExerciserReq.toLowerCase()) {
    return true
  }
  if (dogExerciserReq.toLowerCase() === 'none') {
    return true
  }
  if (userPreference.toLowerCase() === 'daily') {
    return true
  }
  return false
}

export const outdoorSpace = (dogOutdoorReq: string, userPreference: string): boolean => {
  if (dogOutdoorReq.toLowerCase() === userPreference.toLowerCase()) {
    return true
  }
  if (dogOutdoorReq.toLowerCase() === 'small') {
    return true
  }
  if (userPreference.toLowerCase() === 'large') {
    return true
  }
  return false
}

export const cats = (dogCatReq: boolean, userPreference: boolean): boolean => {
  if (userPreference === dogCatReq || !userPreference || dogCatReq) {
    return true
  }
  return false
}

export const children = (dogChildrenReq: string, userPreference: string): boolean => {
  if (userPreference === dogChildrenReq || userPreference.toLowerCase() === 'false' || dogChildrenReq.toLowerCase() === 'true') {
    return true
  }
  return false
}

export const onlyDog = (dogReq: boolean, userPreference: boolean): boolean => {
  if (userPreference === dogReq || !userPreference || dogReq) {
    return true
  }
  return false
}
export const smallAnimals = (dogSmallAnimalReq: boolean, userPreference: boolean): boolean => {
  if (userPreference === dogSmallAnimalReq || !userPreference || dogSmallAnimalReq) {
    return true
  }
  return false
}

export const maxAlone = (dogReq: number, userPreference: number): boolean => {
  if (dogReq >= userPreference) {
    return true
  }

  return false
}

export const specialNeeds = (dogHasSpecNeeds: string, userPreference: boolean): boolean => {
  if (userPreference || (dogHasSpecNeeds.toLowerCase() === "false" && !userPreference)) {
    return true
  }
  return false
}

export const dontShow = (dogId: string, userDontShowList: string[]): boolean => {
  if (userDontShowList.includes(dogId)) {
    return false
  }
  return true
}

export const filterMatches = (user: Adopter, allDogs: Dog[]): Dog[] => {
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
      specialNeeds(dog.specialNeeds, user.specialNeeds) &&
      (user.dontShow && dontShow(dog._id, user.dontShow))) {
      return dog
    }
  })
  return matches
};

export const filterFavourites = (dogs: Dog[], favouritesList: string[]): Dog[] => {
  const favourites: Dog[] = dogs.filter(dog => {
    if (favouritesList.includes(dog._id)) {
      return dog
    }
  })
  return favourites
}


