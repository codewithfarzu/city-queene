import styles from './ProductCards.module.css';
import type { product } from '../../../types/product';


const ProductCard = () => {

  return (
    <div className={`${styles.card} `}>
      <div className={`${styles.imagebox} `}>

      </div>
    </div>
  );
}

export default ProductCard;