import Link from 'next/link';
import styles from './Header.module.scss';
import ProductQuantityNumber from './ProductQuantityNumber';
import { FiShoppingCart } from 'react-icons/fi';

export default function header() {
  return (
    <nav className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link> <Link href="/about">About</Link>{' '}
      <Link href="/cart">
        <FiShoppingCart />
        <ProductQuantityNumber />
      </Link>
    </nav>
  );
}
