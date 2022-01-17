const { Router } = require('express');
const router = Router();

const adopterControllers = require('./Controllers/AdopterController')
const dogControllers = require('./Controllers/DogController')
const orgControllers = require('./Controllers/OrgController')

//doggos
router.get('/dogs', dogControllers.getAll)
router.get('/dog/:id', dogControllers.getOneDog)

//adopters
router.post('/createAdopter', adopterControllers.create)
router.get('/adopterinfo/:id', adopterControllers.getAdopterInfo)
router.get('/adopterFavouritesList/:id', adopterControllers.getFavList)
router.put('/updateAdopterDetails/:id', adopterControllers.updateAdopterDetails)
router.put('/addToFavourites/:id', adopterControllers.addToFavourites)
router.put('/removeFromFavourites/:id', adopterControllers.removeFromFavourites)

//orgs


module.exports = router;