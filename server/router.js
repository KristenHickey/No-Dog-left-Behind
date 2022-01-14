const { Router } = require('express');
const router = Router();

const adopterControllers = require('./Controllers/AdopterController')
const dogControllers = require('./Controllers/DogController')
const orgControllers = require('./Controllers/OrgController')

//doggos
router.get('/dogs', dogControllers.getAll)

//adopters
router.post('/createAdopter', adopterControllers.create)

//orgs


module.exports = router;