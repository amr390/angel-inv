import React from "react";
import s from "@/components/cart/cart.module.css";
import { cn } from "@/lib/utils";

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
      <h1>Cart</h1>
    </header>
  );
};

const CartBody = () => {
  return (
    <article className="cart--body">
      <p>body</p>
    </article>
  );
};

const CartFooter = () => {
  return (
    <footer className="cart--footer">
      <h1>footer</h1>
    </footer>
  );
};
