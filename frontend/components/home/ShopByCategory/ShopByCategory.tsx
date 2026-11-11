'use client';
import styles from './ShopByCategory.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Categories = [
  {
    id: 1,
    name: 'Abayas',
    label: 'Shop Abayas',
    image: '/hero-image-slider/abaya.jpg',
    href: '/abayas',
    big: true,
  },
  {
    id: 2,
    name: 'Dupattas',
    label: 'Shop Dupattas',
    image: '/hero-image-slider/dupatta.jpg',
    href: '/dupattas',
    big: false,
  },
  {
    id: 3,
    name: ' Burqas',
    label: 'Shop Burqas',
    image: '/hero-image-slider/burqa.jpg',
    href: '/burqas',
    big: false,
  },
  {
    id: 4,
    name: 'Stoles',
    label: 'Shop Stoles',
    image: '/hero-image-slider/stole.jpg',
    href: '/stoles',
    big: false,
  },
];

const ShopByCategory = () => {
  return (
    <section className={`${styles.section}`}>
      {/*  section heading */}
      <div className={`${styles.headingBlock}`}>
        <span className={`${styles.eyebrow}`}>Collections</span>
        <h2 className={`${styles.heading}`}>Shop By Category</h2>
      </div>

      {/* grid */}
      <div className={`${styles.grid}`}>
        <Link href={Categories[0].href} className={`${styles.bigTile}`}>
          <Image src={Categories[0].image} alt={Categories[0].name} fill className={`${styles.image}`} />

          <div className={`${styles.overlay}`} />
          <div className={`${styles.tileText}`}>
            <span className={`${styles.tileName}`}>{Categories[0].name}</span>
            <span className={`${styles.tileLink}`}>{Categories[0].label}</span>
          </div>
        </Link>

        <div className={`${styles.smallColumn}`}>
          {Categories.slice(1).map((category) => (
            <Link key={category.id} href={category.href} className={`${styles.smallTile}`}>
              <Image src={category.image} alt={category.name} fill className={`${styles.image}`} />

              <div className={`${styles.overlay}`} />
              <div className={`${styles.tileText}`}>
                <span className={`${styles.tileName}`}>{category.name}</span>
                <span className={`${styles.tileLink}`}>{category.label}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section >
  );
}

export default ShopByCategory;