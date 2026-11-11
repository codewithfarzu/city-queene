'use client';
import styles from './about.module.css';
import Link from 'next/link';
// import { useState, useEffect, useRef, useEffectEvent } from 'react';


const About = () => {

  // const sectionRef = useRef<HTMLElement>(null);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       setVisible(true);
  //     }
  //   }, {threshold: 0.15});

  //   if(sectionRef.current){
  //     observer.observe(sectionRef.current);
  //   }
  //   return()=> observer.disconnect();
  // }, []);

  return (
    // <section ref={sectionRef} className={`${styles.about} ${visible ? styles.visible : ''}`}>
    <section className={`${styles.about}`}>
      {/* left side */}

      <div className={`${styles.left}`}>
        <span className={`${styles.eyebrow}`}>Our Story</span>
        <h2 className={`${styles.heading}`}>
          Where
          <br />
          Modesty
          <br />
          Meets
          <br />
          Luxury
        </h2>
        <div className={`${styles.goldLine}`}></div>
      </div>

      {/* right side */}
      <div className={`${styles.right}`}>
        <p className={`${styles.paragraph}`}>
          CITY QUEENÉ was born from a simple belief —
          that modest fashion deserves elegance, quality,
          and attention to detail.
        </p>
        <p className={`${styles.paragraph}`}>
          From beautiful Burqas to elegant Dupattas and
          Stoles, every piece reflects craftsmanship,
          culture, and confidence.
        </p>

        <hr className={`${styles.divider}`} />

        {/* brand value 1 */}
        <div className={`${styles.brandValue}`}>
          <span className={`${styles.star}`}>★</span>
          <div>
            <h3>Crafted With Care</h3>
            <p>Every fabric is carefully chosen with purpose.</p>
          </div>
        </div>

        {/* brand value 2 */}
        <div className={`${styles.brandValue}`}>
          <span className={`${styles.star}`}>★</span>
          <div>
            <h3>Delivered With Love</h3>
            <p>Every order is prepared with care.</p>
          </div>
        </div>

        {/* button */}
        <Link href="/shop" className={`${styles.btn}`}>
          Explore Our Collection
        </Link>
      </div>

    </section>
  );
};

export default About;

