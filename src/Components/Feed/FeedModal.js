import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PEGAR_FOTOS } from '../../Api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({photo}) => {

  const [testPhoto] = React.useState(null);

  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const { url, options } = PEGAR_FOTOS();
    request(url, options);
  },[photo, request])


  return (<div className={styles.modal}>
    {error && <Error error={error}/>}
    {loading && <Loading error={loading}/>}
    {data && <PhotoContent data={testPhoto}/>}
  </div>);
};

export default FeedModal;
