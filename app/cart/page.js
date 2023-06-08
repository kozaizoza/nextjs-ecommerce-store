import Image from 'next/image';
import { getProductById } from '../../database/products';
import { getQuantity } from '../products/[productId]/actions';
import RemoveItem from '../components/RemoveItemForm';

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
          <div>✿Your cart is empty.</div>
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
            <div key={`product-${product.id}`}>
              <Image
                alt=""
                src={`/images/${product.name}.jpg`}
                width={150}
                height={200}
              />
              <div>{product.name}</div>
              <div>{product.price} </div>
              <div>Quantity: {product.quantity}</div>

              <form data-test-id="cart-product-remove-<product id>">
                <RemoveItem product={product} />
              </form>
            </div>
          );
        })}
        <div data-test-id="cart-total">Total Price: {totalPrice} </div>
      </section>
    </main>
  );
}
