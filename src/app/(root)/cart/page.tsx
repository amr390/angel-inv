import React from "react";
import s from "@/components/cart/cart.module.css";
import { cn } from "@/lib/utils";

interface ICartItem {
  title: string;
  imageUrl: string;
  unitPrice: number;
  currency: string;
  quantity: number;
}

export default function Cart() {
  return (
    <section className="cart">
      <CartHeader />
      <CartBody />
      <CartFooter />
    </section>
  );
}

const CartHeader = () => {
  return (
    <header className={cn(s.cartHeader)}>
      <h1 className="heading">Your Cart</h1>
    </header>
  );
};

const CartBody = () => {
  const its = [
    {
      title: "Acme Drawstring Bag",
      imageUrl: "https://placehold.co/64x64?text=P",
      unitPrice: 6.0,
      currency: "USD",
      quantity: 1,
    },
    {
      title: "Nike Shoes",
      imageUrl: "https://placehold.co/64x64?text=P",
      unitPrice: 126.0,
      currency: "USD",
      quantity: 1,
    },
    {
      title: "Nike Sports wear Bag",
      imageUrl: "https://placehold.co/64x64?text=P",
      unitPrice: 64.99,
      currency: "USD",
      quantity: 1,
    },
  ];
  return (
    <article className="cart--body">
      <ul className="grow overflow-auto p-4">
        {its.map((it, idx) => (
          <CartItemView key={idx} {...it} />
        ))}
      </ul>
    </article>
  );
};

const CartItemView = ({
  title,
  imageUrl,
  unitPrice,
  currency,
  quantity,
}: ICartItem) => {
  return (
    <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
      <div className="relative flex w-full flex-row justify-between px-1 py-4">
        <div className="absolute z-40 -ml-1 -mt-2">
          <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
            <button
              type="submit"
              aria-label="Remove cart item"
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="mx-[1px] h-4 w-4 text-white dark:text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <p aria-live="polite" className="sr-only" role="status"></p>
          </form>
        </div>
        <div className="flex flex-row">
          <div className="relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <img
              alt="Acme Drawstring Bag"
              loading="lazy"
              width="64"
              height="64"
              decoding="async"
              data-nimg="1"
              className="h-full w-full object-cover"
              src={imageUrl}
              style={{ color: "transparent" }}
            />
          </div>
          <a
            className="z-30 ml-2 flex flex-row space-x-4"
            href="/product/acme-drawstring-bag?color=White&amp;size=6+x+8+inch"
          >
            <div className="flex flex-1 flex-col text-base">
              <span className="leading-tight">{title}</span>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                White / 6 x 8 inch
              </p>
            </div>
          </a>
        </div>
        <div className="flex h-16 flex-col justify-between">
          <p className="flex justify-end space-y-2 text-right text-sm">
            ${unitPrice}
            <span className="ml-1 inline">{currency}</span>
          </p>
          <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
            <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
              <button
                type="submit"
                aria-label="Reduce item quantity"
                className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-4 w-4 dark:text-neutral-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  ></path>
                </svg>
              </button>
              <p aria-live="polite" className="sr-only" role="status"></p>
            </form>
            <p className="w-6 text-center">
              <span className="w-full text-sm">{quantity}</span>
            </p>
            <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
              <button
                type="submit"
                aria-label="Increase item quantity"
                className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-4 w-4 dark:text-neutral-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </button>
              <p aria-live="polite" className="sr-only" role="status"></p>
            </form>
          </div>
        </div>
      </div>
    </li>
  );
};

const CartFooter = () => {
  return (
    <footer className="cart--footer">
      <h1>footer</h1>
    </footer>
  );
};
