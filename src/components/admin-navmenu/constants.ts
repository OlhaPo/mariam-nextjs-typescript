import {
  IoHomeOutline,
  IoFilterOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import { adminPanel } from "@/lib/constants";

export const adminNavLinks = [
  {
    href: "/admin/dashboard",
    title: adminPanel.dashboard,
    icon: IoHomeOutline,
  },
  {
    href: "/admin/products",
    title: adminPanel.products,
    icon: IoDocumentTextOutline,
  },
  {
    href: "/admin/collections",
    title: adminPanel.сollections,
    icon: IoFilterOutline,
  },
  {
    href: "/admin/orders",
    title: adminPanel.orders,
    icon: TfiPackage,
  },
];
