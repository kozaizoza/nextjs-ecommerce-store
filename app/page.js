import Image from 'next/image';
import React from 'react';
import styles from './layout.module.scss';

import background from '../public/images/background.jpg';

export default function HomePage() {
  return (
    <main>
      <h1 className={styles.h1}>The Blossom Collective</h1>
      <div>
        <Image
          alt="studio-photo"
          className={styles.heartImage}
          src={background}
        />
      </div>
    </main>
  );
}
