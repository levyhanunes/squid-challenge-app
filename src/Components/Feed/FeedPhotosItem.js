import React from 'react'

const FeedPhotosItem = ({photo}) => {
    return <li>
        <img src={photo.imagens.resolucaoPadrao.url} alt ={photo.criadoEm}/>
        <span>{photo.impressions}</span>
    </li>;
};

export default FeedPhotosItem
