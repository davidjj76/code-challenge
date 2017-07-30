import React from 'react';
import Github from 'react-icons/lib/fa/github';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';

import styles from './footer.css';
import photo from './img/photo.jpg';

const iconSize = 30;

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
      <a className={styles.link} href="https://github.com/davidjj76">
        <Github size={iconSize} />
      </a>
      <a className={styles.link} href="https://www.linkedin.com/in/david-jimenez-jimenez">
        <Linkedin size={iconSize} />
      </a>
      <a className={styles.link} href="https://twitter.com/davidjj_76">
        <Twitter size={iconSize} />
      </a>
    </div>
  </footer>
);

export default Footer;
