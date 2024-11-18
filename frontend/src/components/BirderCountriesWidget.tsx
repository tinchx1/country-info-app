'use client'

import Link from 'next/link'

interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
}

interface BorderCountriesWidgetProps {
  borders: Border[];
}

export default function BorderCountriesWidget({ borders }: BorderCountriesWidgetProps) {
  if (!borders || borders.length === 0) {
    return <p className="text-gray-400">No border countries available.</p>
  }

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {borders.map((border) => (
        <li className='bg-white' key={border.countryCode}>
          <Link
            href={`/${border.countryCode}`}
            className="block p-4 bg-input-background shadow-md hover:bg-blue-300 hover:shadow-lg transition"
          >
            <p className="font-medium text-gray-600 text-lg">{border.commonName}</p>
            <p className="text-sm text-gray-600">{border.officialName}</p>
            <p className="text-xs text-gray-500 mt-1">
              Code: {border.countryCode}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
