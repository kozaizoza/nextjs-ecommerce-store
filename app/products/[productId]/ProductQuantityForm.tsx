'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateQuantity } from './actions';

type Props = {
  productId: number;
};
export default function ProductQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.currentTarget.value));
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
