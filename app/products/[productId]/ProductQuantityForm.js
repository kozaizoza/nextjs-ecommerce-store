'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateQuantity } from './actions';

// import styles from './FruitCommentForm.module.scss';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState();
  const router = useRouter();

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <br />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await updateQuantity(props.productId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
