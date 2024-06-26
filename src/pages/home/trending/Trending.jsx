import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

function Trending() {
    const [endPoint,setEndPoint]=useState("day");

    const {data,loading}=useFetch(`/trending/all/${endPoint}`);
    const onTabChange= (tab)=>{
        let currenttab=tab.toLowerCase()
        setEndPoint(currenttab)
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>

    </div>
  )
}

export default Trending