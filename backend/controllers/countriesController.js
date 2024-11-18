const axios = require('axios')
require('dotenv').config()

const NAGER_API_BASE_URL = process.env.NAGER_API_BASE_URL
const COUNTRIESNOW_API_BASE_URL = process.env.COUNTRIESNOW_API_BASE_URL

exports.getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get(`${NAGER_API_BASE_URL}/AvailableCountries`)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch available countries' })
  }
}

exports.getCountryInfo = async (req, res) => {
  const countryCode = req.params.countryCode
  try {
    const borderResponse = await axios.get(`${NAGER_API_BASE_URL}/CountryInfo/${countryCode}`)
    const countryName = borderResponse.data.commonName

    const populationResponse = await axios.post(`${COUNTRIESNOW_API_BASE_URL}/countries/population`, { country: countryName })
    const isoCodesResponse = await axios.post(`${COUNTRIESNOW_API_BASE_URL}/countries/iso`, { country: countryName })

    const iso2 = isoCodesResponse.data.data.Iso2

    const flagResponse = await axios.post(`${COUNTRIESNOW_API_BASE_URL}/countries/flag/images`, { iso2 })

    const countryInfo = {
      borders: borderResponse.data.borders,
      population: populationResponse.data.data.populationCounts,
      flag: flagResponse.data.data.flag,
      countryName
    }

    res.json(countryInfo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch country info' })
  }
}
