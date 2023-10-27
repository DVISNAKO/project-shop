import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const Poster = () => {

  const [modal, setModal] = useState(false);

  const visible = modal ? '' : 'hidden';

    return (
        <section className={styles.home}>
        <div className={styles.title}>BIG SALE 20%</div>
        <div className={styles.product}>
          <div className={styles.text}>
            <div className={styles.subtitle}>the bestseller of 2022</div>
            <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
            <button className={styles.button}
            onClick={() => setModal(!modal)}>Shop Now</button>
            <div className={`${visible} modal`}>
            <div style={{display: 'flex',justifyContent: 'flex-end', cursor: 'pointer', fontSize: '20px'}}
            onClick={() => setModal(!modal)}
            >X</div>
            <div style={{display: 'flex',justifyContent: 'center'}}>My modal</div>
            </div>

          </div>
        </div>
      </section>
    );
};

export default Poster;