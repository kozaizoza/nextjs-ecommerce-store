import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function CartNumberProduct() {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantity = productQuantities.map((item) => item.quantity);
  console.log(quantity);
  const totalSumOfProducts = quantity.reduce(
    (acc, currentNum) => acc + currentNum,
    0,
  );

  return <span>{totalSumOfProducts}</span>;
}
