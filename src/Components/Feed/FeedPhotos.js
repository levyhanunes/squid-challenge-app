import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTOS } from '../../Api';

const FeedPhotos = () => {

  const {data, loading, error, request} = useFetch();


  React.useEffect(() => {
    async function fetchPhotos() {

      const {url, options} = PEGAR_FOTOS()
      const {response, json} = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  },[request]);

  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
