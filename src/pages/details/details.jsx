import React from 'react'
import "./style.scss"
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import useFetch from '../../hooks/useFetch';
import Cast from './cast/Cast';
import VideosSection from './videoSection/VideoSection';
import Recommendation from './recommendation/Recommendation';
import Similar from './similar/Similar';
function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );
  return (
    <div>
       <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    
       <Cast data={credits?.cast} loading={creditsLoading} />
       <VideosSection data={data} loading={loading} />
       <Similar mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details