"use client";
import { CartProvider as USCProvider } from "use-shopping-cart";
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <USCProvider
      mode="payment"
      currency="USD"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
