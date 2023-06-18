import Image from 'next/image';
import { getProductById } from '../../database/products';
import { getQuantity } from '../products/[productId]/actions';
import RemoveItem from '../components/RemoveItemForm';
import style from './cart.module.scss';

export default async function CartPage() {
  const productQuantity = await getQuantity();
  const productInCart = await Promise.all(
    productQuantity.map(async (item) => {
      const matchingProduct = await getProductById(Number(item.id));

      return {
        ...matchingProduct,
        quantity: item.quantity,
      };
    }),
  );

  // Message for empy cart.
  if (productInCart.length === 0) {
    return (
      <main>
        <section>
          <div className={style.empyCart}>✿ Your cart is empty. ✿</div>
        </section>
      </main>
    );
  }

  // Calculate the total price of all products by using the reduce function on the productInCart array. The reduce function iterates over each product in the array, multiplying its price by the quantity and adding it to the accumulator. The initial value of the accumulator is set to 0.
  const totalPrice = productInCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );

  return (
    <main>
      <section>
        {productInCart.map((product) => {
          console.log(product);
          return (
            <div
              className={style.productsInfoRow}
              key={`product-${product.id}`}
            >
              <Image
                className={style.productPicture}
                alt=""
                src={`/images/${product.name}.jpg`}
                width={70}
                height={100}
              />
              <div>{product.name}</div>
              <div>Quantity: {product.quantity}</div>
              <div>Price: {product.price} </div>

              <form
                data-test-id="cart-product-remove-<product id>"
                className={style.removeButton}
              >
                <RemoveItem product={product} />
              </form>
            </div>
          );
        })}
        <div data-test-id="cart-total" className={style.totalPrice}>
          Total Price: {totalPrice}{' '}
        </div>
      </section>
    </main>
  );
}
