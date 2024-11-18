import Image from 'next/image'
import PopulationChart from '../../components/PopulationChart'
import BorderCountriesWidget from '../../components/BirderCountriesWidget'
import ButtonBackHome from '../../components/ButtonBackHome'

interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

interface Population {
  year: number;
  value: number;
}

interface CountryDetails {
  borders: Border[] | null;
  population: Population[];
  flag: string;
  countryName: string;
}

interface CountryPageProps {
  params: { countryCode: string };
}

async function getCountryDetails(countryCode: string): Promise<CountryDetails | null> {
  const res = await fetch(`http://localhost:3003/api/country-info/${countryCode}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { countryCode } = await params
  const countryDetails = await getCountryDetails(countryCode)

  if (!countryDetails) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <p>Country details not available.</p>
        <ButtonBackHome />
      </main>
    )
  }

  const { borders, population, flag, countryName } = countryDetails

  return (
    <main className="min-h-screen max-h-screen p-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto bg-card-background rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="self-start">
            <ButtonBackHome />
          </div>
          <Image
            src={flag}
            alt="Country flag"
            width={128}
            height={80}
            className="rounded border border-input-border shadow-sm"
          />
          <h1 className="text-4xl font-bold mt-4 text-primary-color">
            {countryName} Details
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-color">
            Borders
          </h2>
          <BorderCountriesWidget borders={borders || []} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-secondary-color">
            Population Over Time
          </h2>
          <PopulationChart population={population} />
        </div>
      </div>
    </main>
  )
}

