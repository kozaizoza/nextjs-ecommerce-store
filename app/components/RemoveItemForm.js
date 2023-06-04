'use client';
import { useRouter } from 'next/navigation';
import { removeItem } from '../products/[productId]/actions';

export default function RemoveItem({ product }) {
  const router = useRouter();

  return (
    <div>
      <button
        formAction={async () => {
          router.refresh();
          await removeItem(product);
        }}
      >
        {' '}
        Remove
      </button>
    </div>
  );
}
