'use client'
import React from 'react'
import { Country } from '../types'
import { useRouter } from 'next/navigation'

interface CountryProps {
  country: Country
}

function CountryComponent({ country }: CountryProps): JSX.Element {
  const router = useRouter()

  const handleRedirect = (countryCode: string) => {
    router.push(`/${countryCode}`)
  }

  return (
    <div
      key={country.countryCode}
      className="p-4  text-center rounded-lg cursor-pointer  hover:bg-blue-300 transition"
      onClick={() => handleRedirect(country.countryCode)}
    >
      <h2 className="text-lg font-semibold">{country.name}</h2>
    </div>
  )
}

export default CountryComponent