"use client";
import { Button } from "@/components/ui/button";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  download: string;
}
const AddToBag = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  download,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
    download,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Bag
    </Button>
  );
};

export default AddToBag;
