import React from 'react';
import bgImage from '../../assets/images/Black-And-Red-Background-HD.jpg'

export default function Home() {
  return (
    <main>
      <img src={bgImage} alt='Black And Red Background' className={classes.bgImage}/>
      <section className={classes.mainSection}>
        <h1 className="text=6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
            Aloha. I'm Anubhav.
        </h1>
      </section>
    </main>
  );
}

const classes ={
    bgImage: 'absolute object-cover w-full h-full',
    mainSection: 'relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8',
}
