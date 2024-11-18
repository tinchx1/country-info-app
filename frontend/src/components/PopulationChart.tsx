'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

interface Population {
  year: number;
  value: number;
}

interface PopulationChartProps {
  population: Population[];
}

export default function PopulationChart({ population }: PopulationChartProps) {
  if (!population || population.length === 0) {
    return <p className="text-gray-400">No population data available.</p>
  }

  const chartData = {
    labels: population.map((entry) => entry.year),
    datasets: [
      {
        label: 'Population',
        data: population.map((entry) => entry.value),
        borderColor: 'var(--primary-color)',
        backgroundColor: 'rgba(76, 175, 80, 0.3)',
        tension: 0.4,
        fill: true
      }
    ]
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Line data={chartData} />
    </div>
  )
}
