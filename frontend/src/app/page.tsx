import CountryComponent from '../components/CountryComponent'
import { Country } from '../types'

export default async function Home() {
  const response = await fetch('http://localhost:3003/api/available-countries', {
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }

  const countries = await response.json()

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Country Info</h1>

      {countries.map((c: Country) => (
        <CountryComponent key={c.countryCode} country={c} />
      ))}
    </main>
  )
}
