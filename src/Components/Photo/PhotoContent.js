import React from 'react'
import styles from './PhotoContent.module.css'
import FeedPhotos from '../Feed/FeedPhotos'

const PhotoContent = ({photo}) => {
    return (
        <div className = {styles.photo}>
            <div className={styles.img}><img src={photo} alt="" /></div>
            
            <div className={styles.details}>
                <div>
                    <p>@link</p>
                    <span className={styles.vizualizacoes}>12345</span>
                </div>
            </div>
        </div>
    )
    
}

export default PhotoContent;
