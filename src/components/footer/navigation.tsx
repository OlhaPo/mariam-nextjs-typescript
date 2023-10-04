import NavLink from "../navigation/NavLink";

export function Navigation() {
  return (
    <div className="contacts-section">
      <span className="contacts-subheader">Menu</span>
      <NavLink href={"/about"}>About</NavLink>
      <NavLink href={"/shop"}>Shop</NavLink>
      <NavLink href={"/orders-info"}>Orders and delivery</NavLink>
    </div>
  );
}
