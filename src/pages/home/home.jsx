import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import CommonCrousalSection from './commonCarousal/CommonCrousalSection'

function Home() {
  return (
    <>
  <HeroBanner/>
  <Trending/>
  <CommonCrousalSection sectionname="What's Popular" hitpoint="popular"/>
  <CommonCrousalSection sectionname="Top Rated" hitpoint="top_rated"/>

    </>
  )
}

export default Home