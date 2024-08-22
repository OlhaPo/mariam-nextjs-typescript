import {
  IoHomeOutline,
  IoFilterOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import { BiLogOut } from "react-icons/bi";

export const adminNavLinks = [
  { href: "/admin/dashboard", title: "Dashboard", icon: IoHomeOutline },
  { href: "/admin/products", title: "Products", icon: IoDocumentTextOutline },
  { href: "/admin/collections", title: "Collections", icon: IoFilterOutline },
  { href: "/admin/orders", title: "Orders", icon: TfiPackage },
];
