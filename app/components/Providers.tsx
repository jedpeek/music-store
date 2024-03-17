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
      successUrl="https://music-store-henna.vercel.app/stripe/success"
      cancelUrl="https://music-store-henna.vercel.app/stripe/error"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
