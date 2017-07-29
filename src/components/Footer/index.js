import React from 'react';

import styles from './footer.css';
import photo from './img/photo.jpg';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.intro}>Developed by:</p>
    <figure className={styles.profile}>
      <img
        className={styles.photo}
        alt="@davidjj76"
        src={photo}
      />
      <figcaption className={styles.name}>@davidjj76</figcaption>
    </figure>
    <div className={styles.links}>
      <a className={styles.link} href="https://github.com/davidjj76">Github</a>
      <a className={styles.link} href="https://www.linkedin.com/in/david-jimenez-jimenez">Linkedin</a>
    </div>
  </footer>
);

export default Footer;
