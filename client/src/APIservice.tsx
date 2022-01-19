import { LoginForm, LoginResponse, Options } from "./APITypes"
import { Adopter, Dog } from "./interfaces"

const base = 'http://localhost:3005/'

const fetchRequest = (endPoint?: string, options?: Options) => {
  return fetch(base + endPoint, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => console.log('Error: ', err))
}

//doggos
const getAllDogs = (): Promise<Dog[]> => {
  return fetchRequest('dogs')
}

const getOneDog = (id: string): Promise<Dog> => {
  return fetchRequest(`dog/${id}`)
}

//Adopter
const createAdopter = (endPoint: string, body: React.FormEvent<HTMLInputElement>) : Promise<{ id: string }>=> {
  return fetchRequest(endPoint, {
    method: 'POST',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(body)
  })
}

const getAdopter = (id: string | null): Promise<Adopter> => {
  return fetchRequest(`adopterInfo/${id}`)
}

const getFavourtiesList = (id: string | null): Promise<string[]> => {
  return fetchRequest(`adopterFavouritesList/${id}`)
}

const updateAdopterInfo = (id: string, body: object): Promise<Adopter> => {
  return fetchRequest(`updateAdopterDetails/${id}`, {
    method: 'PUT',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(body)
  })
}

const addToFavourites = (userId: string, dogId: string): Promise<Adopter> => {
  return fetchRequest(`addToFavourites/${userId}`, {
    method: 'PUT',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ dogId: dogId })
  })

}

const removeFromFavourites = (userId: string, dogId: string): Promise<Adopter> => {
  return fetchRequest(`removeFromFavourites/${userId}`, {
    method: 'PUT',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ dogId: dogId })
  })
}

const dontShowInMatches = (userId: string, dogId: string): Promise<Adopter> => {
  return fetchRequest(`dontShowInMatches/${userId}`, {
    method: 'PUT',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ dogId: dogId })
  })
}

const login = (body: React.FormEvent<HTMLInputElement>): Promise<LoginResponse> => {
  return fetchRequest('login', {
    method: 'POST',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(body)
  })
}


export default { createAdopter, getAllDogs, getAdopter, getOneDog, updateAdopterInfo, getFavourtiesList, addToFavourites, removeFromFavourites, dontShowInMatches, login };