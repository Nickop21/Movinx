import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
function CommonCrousalSection({sectionname,hitpoint}) {
    const [endPoint,setEndPoint]=useState("movie");

    const {data,loading}=useFetch(`/${endPoint}/${hitpoint}`);
    const onTabChange= (tab)=>{
        setEndPoint(tab=="Movies" ? "movie":"tv")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">
               {sectionname}
            </span>
            <SwitchTabs data={["Movies","Tv Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>

    </div>
  )
}

export default CommonCrousalSection