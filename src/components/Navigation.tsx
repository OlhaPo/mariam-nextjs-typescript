import Link from "next/link";

export default function Navigation() {
  return (
    <div className="nav">
      <div className="uppercase">
        <Link href={"/"}>Maryna Kambur</Link>
      </div>
      <div className="inline-flex gap-7">
        <Link href={"/about"}>About me</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/cart"}>Cart</Link>
      </div>
    </div>
  );
}
