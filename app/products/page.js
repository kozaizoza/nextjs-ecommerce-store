import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './products.module.scss';

export const metadata = {
  title: 'Products',
  description: 'All products',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className={styles.productsContainer}>
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`} className={styles.productCard}>
            <Link
              href={`/products/${product.id}`}
              data-test-id="product-<product id>"
              className={styles.categoryTitle}
            >
              {product.name}
            </Link>
            <br />
            <Image
              alt=""
              src={`/images/${product.name}.jpg`}
              width={300}
              height={200}
              className={styles.productImage}
            />
          </div>
        );
      })}
    </main>
  );
}
