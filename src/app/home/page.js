import About from '@/components/sections/about/About'
import Banner from '@/components/banner/Banner'
import Offer from '@/components/sections/offer/Offer'
import Blogsection from '@/components/sections/Blogsection'
import SubscribeSection from '@/components/sections/SubscribeSection'
import React from 'react'

export default function page() {
  return (
    <>
      <div className=''>

        <Banner />
        <About />
        <Offer />
        <Blogsection />
        <SubscribeSection />

      </div>
    </>
  )
}
