'use client'
import Link from 'next/link'
import React from 'react'

export default function ButtonBackHome() {
  return (
    <Link href="/"><button className='p-2 rounded-xl bg-blue-500 hover:bg-blue-600'>
      Back Home
    </button>
    </Link>
  )
}
