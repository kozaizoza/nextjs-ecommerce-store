import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductQuantityForm from './ProductQuantityForm';
import style from './ProductPage.module.scss';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const singleProduct = await getProductById(Number(params.productId)); // Convert the string into a number

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <div className={style.productLayout}>
        <Image
          alt=""
          data-test-id="product-image"
          src={`/images/${singleProduct.name}.jpg`}
          width={400}
          height={500}
          className={style.layoutImg}
        />
        <div className={style.productDescription}>
          <h1>{singleProduct.name}</h1>
          <p>{singleProduct.description}</p>
          <h4 className={style.careInfo}>Care information ✿‿✿ </h4>
          <p>
            {' '}
            To ensure the longevity of your flowers, trim the stems at an angle
            and use a clean vase filled with fresh, cool water. Find a cool
            location for your flowers, away from direct sunlight. Regularly
            replenish the water to keep the stems submerged and remember to keep
            your floral arrangement out of reach from pets as certain flowers
            can be harmful to them. ✿
          </p>
          <h5 data-test-id="product-price" className={style.price}>
            {singleProduct.price}EUR
          </h5>
          <div>
            <p>Quantity:</p>
            <ProductQuantityForm productId={singleProduct.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
