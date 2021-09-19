import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PEGA_FOTOS } from '../../Api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({photo}) => {


  return <div className={styles.modal}>
    <img src={photo} alt="" />
  </div>;
};

export default FeedModal;
