import styles from './NewArrivlas.module.css';
import ProductCard from '@/components/product/ProductCards/ProductCards';
import Link from 'next/link';


const products = [
  {
    id: 1,
    name: "Classic Abaya",
    price: "INR 3,499",
    href: "/shop#abayas",
    image: [],
    placeholderColors: ["#6B5143", "#81776F", "#4a3728"],
  },
  {
    id: 2,
    name: "Silk Dupatta",
    price: "INR 1,799",
    href: "/shop#duppatas",
    image: [],
    placeholderColors: ["#E8DED2", "#d4c9bc", "#c9bdb0"],
  },
  {
    id: 3,
    name: "Premium Burqa",
    price: "INR 2,699",
    href: "/shop#abayas",
    image: [],
    placeholderColors: ["#1C1A18", "#2d2b29", "#3d3b39"],
  },
  {
    id: 4,
    name: "Elegant Stoles",
    price: "INR 599",
    href: "/shop#abayas",
    image: [],
    placeholderColors: ["#81776F", "#6B5143", "#E8DED2"],
  },
]


const NewArrivals = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.headingBlock}`}>
        <span className={`${styles.eyebrow}`}>Just Landed</span>
        <h2 className={`${styles.heading}`}>Latest Collection</h2>
      </div>
      {/* Product Card Grid */}
      <div className={`${styles.grid}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>


      {/* btn */}
      <div className={`${styles.viewAllBlock} `}>
        <Link href="/shop" className={`${styles.viewAllBtn}`}>
          View All
        </Link>
      </div>
    </section>
  );
}

export default NewArrivals;