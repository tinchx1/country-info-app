const express = require('express')
const router = express.Router()
const countriesController = require('../controllers/countriesController')

router.get('/available-countries', countriesController.getAvailableCountries)
router.get('/country-info/:countryCode', countriesController.getCountryInfo)

module.exports = router
