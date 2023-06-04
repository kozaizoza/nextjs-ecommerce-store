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
              <div>{product.price}</div>
              <div>Quantity: {product.quantity}</div>

              <form>
                <RemoveItem product={product} />
              </form>
            </div>
          );
        })}
      </section>
    </main>
  );
}

// function Cart() {
//   const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
//     getQuantity();

//   if (isEmpty) return <p>Your cart is empty</p>;

//   return (
//     <>
//       <h1>Cart ({totalUniqueItems})</h1>

//       <ul>
//         {items.map((item) => (
//           <li key={`items-${item.id}`}>
//             {item.quantity} x {item.name} &mdash;
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//             >
//               -
//             </button>
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//             >
//               +
//             </button>
//             <button onClick={() => removeItem(item.id)}>&times;</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
