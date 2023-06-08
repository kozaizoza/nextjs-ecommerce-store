'use client';
import { useRouter } from 'next/navigation';
import { removeItem } from '../products/[productId]/actions';

type Props = {
  product: number;
}

export default function RemoveItem(props: Props ) {
  const router = useRouter();

  return (
    <div>
      <button
        formAction={async () => {
          router.refresh();
          await removeItem(props.product);
        }}
      >
        {' '}
        Remove
      </button>
    </div>
  );
}
