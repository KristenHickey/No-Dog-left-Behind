import { Adopter, Dog } from "./interfaces"

const base = 'http://localhost:3005/'

const fetchRequest = (endPoint?: string, options?: object) => {
  return fetch(base + endPoint, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => console.log('Error: ', err))
}

//All
const post = (endPoint: string, body: object) => {
  return fetchRequest(endPoint, {
    method: 'POST',
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(body)
  })
}

//doggos
const getAllDogs = (): Promise<Dog[]> => {
  return fetchRequest('dogs')
}

const getOneDog = (id: string): Promise<Dog> => {
  return fetchRequest(`dog/${id}`)
}

//Adopter
const getAdopter = (id: string | null): Promise<Adopter> => {
  return fetchRequest(`adopterInfo/${id}`)
}


export default { post, getAllDogs, getAdopter, getOneDog };