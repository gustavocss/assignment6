const router = require('express').Router({ mergeParams: true });

const { postLocation, getLocation, getLocations } = require('../controllers/locationController.js');

router.post('/', postLocation);
router.get('/', getLocations);
router.get('/:id', getLocation);

module.exports = router;
