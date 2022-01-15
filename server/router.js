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
router.put('/updateAdopterDetails/:id', adopterControllers.updateAdopterDetails)
//orgs


module.exports = router;