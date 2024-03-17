"use client";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function stripeSuccess() {
  const { cartDetails } = useShoppingCart();
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>
        </div>
        <>
          {Object.values(cartDetails ?? {}).map((entry) => {
            console.log(entry);
            return (
              <li key={entry.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={entry.image as string}
                    alt="Product image"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{entry.name}</h3>
                      <p className="ml-4">${entry.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {entry.description}
                    </p>
                  </div>

                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">QTY: {entry.quantity}</p>

                    <div className="flex">
                      {/* ${entry.download}?dl= */}
                      <a href={`${entry.download}?dl=`} target="_blank">
                        <Button
                          type="button"
                          className="btn-primary font-bold text-slate-300  hover:text-white"
                        >
                          Download
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </>
        <Button asChild className="mt-10">
          <Link href="/">GO To Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
