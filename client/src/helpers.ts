export const breed = (dog: string, user: string[]): boolean => {
  if (user.includes('All')) {
    return true
  }
  return user.includes(dog)
}

export const gender = (dog: string, user: string): boolean => {
  if (user === 'none' || dog.toLowerCase() === user.toLowerCase()) {
    return true
  }
  return false
}

export const age = (dog: number, user: string[]): boolean => {
  if (user.includes('none')) {
    return true
  }
  if (user[-1] != '10+') {
    for (let i = 0; i < user.length; i++) {
      const min: number = parseInt(user[i].substr(0));
      const max: number = parseInt(user[i].substr(-1))
      if (dog >= min && dog <= max) {
        return true
      }
    }
  } else {
    if (dog >= 10) {
      return true
    }
  }
  return false
}

export const size = (dog: string, user: string[]): boolean => {
  return user.includes(dog)
}

export const exercise = (dog: string, user: string): boolean => {

  if (user.toLowerCase() === dog.toLowerCase()) {
    return true
  }
  if (dog.toLowerCase() === 'none') {
    return true
  }
  if (user.toLowerCase() === 'daily') {
    return true
  }
  return false
}

export const outdoorSpace = (dog: string, user: string): boolean => {
  if (dog.toLowerCase() === user.toLowerCase()) {
    return true
  }
  if (dog.toLowerCase() === 'small') {
    return true
  }
  if (user.toLowerCase() === 'large') {
    return true
  }
  return false
}

export const cats = (dog: boolean, user: boolean): boolean => {
  if (user === dog || !user || dog) {
    return true
  }
  return false
}

// missing logic for 12+
export const children = (dog: string, user: string): boolean => {
  if (user === dog || user.toLowerCase() === 'false' || dog.toLowerCase() === 'true') {
    return true
  }
  return false
}

export const onlyDog = (dog: boolean, user: boolean): boolean => {
  if (user === dog || !user || dog) {
    return true
  }
  return false
}
export const smallAnimals = (dog: boolean, user: boolean): boolean => {
  if (user === dog || !user || dog) {
    return true
  }
  return false
}

export const maxAlone = (dog: number, user: number): boolean => {
  if (dog >= user) {
    return true
  }

  return false
}

export const specialNeeds = (dog: string, user: boolean): boolean => {
  if (user || (dog.toLowerCase() === "false" && !user)) {
    return true
  }
  return false
}