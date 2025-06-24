import { Category } from '@/components/category'
import { FeaturedArtists } from '@/components/featured-artists'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import React from 'react'

const page = () => {
  return (
    <div>

      <Hero />
      <Category />
      <FeaturedArtists />

    </div>
  )
}

export default page