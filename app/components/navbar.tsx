"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
// Links must match category names in Sanity
const links = [
  { name: "Home", href: "/" },
  { name: "Drums", href: "/Drums" },
  { name: "Starters", href: "/Starters" },
  { name: "Presets", href: "/Presets" },
];
const Navbar = () => {
  const { handleCartClick } = useShoppingCart();
  const pathname = usePathname();
  return (
    <div className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="md:text-4xl font-bold text-2xl">
            Sonic<span className="text-primary">Library</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-primary font-semibold text-lg "
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="font-semibold text-lg text-gray-600 transition duration-150 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
