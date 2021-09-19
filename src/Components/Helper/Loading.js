import React from 'react';
import styles from './Loading.module.css'
import Gif from '../../Assets/Rocket.gif'

const Loading = () => {
  return <div className={styles.wrapper}><div className={styles.loading}>
    <img src={Gif} alt="" />
  </div>
  </div>;
};

export default Loading;
