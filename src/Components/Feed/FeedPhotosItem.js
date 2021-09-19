import React from 'react'
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

    function handleClick() {
        const selectedPhoto = photo.imagens.resolucaoPadrao.url
        setModalPhoto(selectedPhoto)

        return <div className={styles.modal}>
    <img src={setModalPhoto} alt="" />
  </div>;
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <img src={photo.imagens.resolucaoPadrao.url} alt ={photo.criadoEm}/>
            <span className={styles.visualizacao}>{photo.metadados.impressions}</span>
        </li>
    );
};

export default FeedPhotosItem
