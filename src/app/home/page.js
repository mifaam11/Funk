import React from 'react'
import Banner from '@/components/banner/Banner'
// import NewArrival from '@/components/sections/NewArrival'
import ExploreCollection from '@/components/sections/ExploreCollection'
import FlashSale from '@/components/flashsale/FlashSale'

export default function page() {
  return (
    <>

      <Banner />
      <FlashSale />
      {/* <NewArrival /> */}
      <ExploreCollection />

    </>
  )
}
