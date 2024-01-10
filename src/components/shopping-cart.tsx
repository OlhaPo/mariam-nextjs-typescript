import { RxCross1 } from "react-icons/rx";

export default function ShoppingCart({ onClose }: { onClose: () => void }) {
  return (
    <section className="cart">
      <div className="flex flex-row justify-between border-b-black border-b">
        <h2>Shopping Cart</h2>
        <RxCross1 onClick={() => onClose()} />
      </div>
    </section>
  );
}
