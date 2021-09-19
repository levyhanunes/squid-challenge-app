import React from 'react'
import { Link } from 'react-router-dom';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

    function handleClick() {
        
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <Image src={photo.imagens.resolucaoPadrao.url} alt ={photo.criadoEm}/>
            <a className={styles.visualizacao} href={photo.link} target="_blank" ><span >{photo.metadados.impressions}</span></a>
        </li>
    );
};

export default FeedPhotosItem
