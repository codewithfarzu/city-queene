"use client";

import styles from "./hero.module.css";
import { useState, useEffect } from "react";


const slides = [
  {
    id: 1,
    image: "/hero-image-slider/abaya.jpg",
    eyebrow: "New Arrival",
    heading: "Effortles Elegance",
    subtext: "Discover our latest Abayas, Dupattas & Stoles",
    button: "Shop Collection",
  },
  {
    id: 2,
    image: "/hero-image-slider/burqa.jpg",
    eyebrow: "Luxury Stoles",
    heading: "Wrapped In Grace",
    subtext: "Elegant stoles designed for every occasion",
    button: "Explore Stoles",
  },
  {
    id: 3,
    image: "/hero-image-slider/dupatta.jpg",
    eyebrow: "New Collection",
    heading: "Modesty Meets  Beauty",
    subtext: "Explore our elegant designer Dupattas",
    button: "Shop Dupattas",
  },
  {
    id: 4,
    image: "/hero-image-slider/stole.jpg",
    eyebrow: "Premium Collection",
    heading: "Timeless Modesty",
    subtext: "Discover sophisticated premium Burqas",
    button: "Shop Burqas",
  },
];

const HeroCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically slides change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => current === slides.length - 1 ? 0 : current + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${styles.hero}`}>
      {slides.map((slide, index) => (
        <div key={slide.id} className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`} style={{ backgroundImage: `url(${slide.image})` }}></div>
      ))}

      {/* content */}
      <div className={`${styles.content}`}>

        <span className={`${styles.eyebrow}`}>
          {slides[currentSlide].eyebrow}
        </span>
        <h1 className={`${styles.heading}`}>
          {slides[currentSlide].heading}
        </h1>
        <p className={`${styles.subtext}`}>
          {slides[currentSlide].subtext}
        </p>
        <a href="#" className={`${styles.button}`}>
          {slides[currentSlide].button}
        </a>
      </div>
    </section>
  );
}

export default HeroCarousel;