import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTOS } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const FeedPhotos = () => {

  const {data, loading, error, request} = useFetch();


  React.useEffect(() => {
    async function fetchPhotos() {

      const {url, options} = PEGAR_FOTOS()
      const {json} = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  },[request]);

  if (error) return <Error error = {error} />
  if(loading) return <Loading />
  if (data)
  return (
    <ul>
      {data.map(photo => <FeedPhotosItem key={photo.uid} photo={photo}/>)}
      
    </ul>
  );
  else return null
};

export default FeedPhotos;
