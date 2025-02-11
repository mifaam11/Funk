import About from '@/components/about/About'
import Banner from '@/components/banner/Banner'
import Offer from '@/components/offer/Offer'
import Blogsection from '@/components/section/Blogsection'
import SubscribeSection from '@/components/section/SubscribeSection'
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
