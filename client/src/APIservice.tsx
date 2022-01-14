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
const getAllDogs = () => {
  return fetchRequest('dogs')
}

//test

export default { post, getAllDogs };