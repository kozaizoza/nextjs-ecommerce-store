import { cache } from 'react';
import { Product } from '../migrations/1686042646-insertProducts';
import { sql } from './connect';

// type alias with an object
// type Product = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
// };

// run sql query in JS
export const getProducts = cache(async () => {
  const products = await sql<Product[]>`SELECT * FROM products`;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return products[0];
});

// export const products = [
//   {
//     id: 1,
//     name: 'Radiance',
//     category: 'flowers',
//     price: '99',
//     description:
//       'A bouquet that captivates with its playful and imaginative arrangement of vibrant blooms.',
//   },
//   {
//     id: 2,
//     name: 'Bloom',
//     category: 'flowers',
//     price: '89',
//     description:
//       'A bouquet that bursts with a fusion of bold and vibrant blooms, creating a striking and energetic display.',
//   },
//   {
//     id: 3,
//     name: 'Ethereal',
//     category: 'flowers',
//     price: '89',
//     description:
//       'A bouquet that brings a sense of calm and balance through its harmonious combination of delicate flowers.',
//   },
//   {
//     id: 4,
//     name: 'Whimsy',
//     category: 'flowers',
//     price: '89',
//     description:
//       'A bouquet that enchants with its soft and romantic blooms, evoking the ethereal beauty of twilight.',
//   },
//   {
//     id: 5,
//     name: 'Enchant',
//     category: 'flowers',
//     price: '109',
//     description:
//       'A bouquet that exudes confidence and sophistication, empowering the recipient with its exquisite and commanding presence.',
//   },
//   {
//     id: 6,
//     name: 'Bliss',
//     category: 'flowers',
//     price: '109',
//     description:
//       'A bouquet that embodies everlasting beauty and opulence, making a statement of grandeur and elegance.',
//   },
//   {
//     id: 7,
//     name: 'Euphoria',
//     category: 'flowers',
//     price: '109',
//     description:
//       'A bouquet that exudes timeless beauty and sophistication through its luxurious and refined floral selection.',
//   },
//   {
//     id: 8,
//     name: 'Tranquil',
//     category: 'flowers',
//     price: '109',
//     description:
//       'A bouquet that serenades the senses with its calming and delicate arrangement, creating a serene and peaceful ambiance.',
//   },
// ];

// export function getProductById(id) {
//   return products.find((product) => product.id === id);
// }
