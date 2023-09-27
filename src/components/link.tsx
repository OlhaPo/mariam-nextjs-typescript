import { LinkProps } from "next/link";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children?: ReactNode;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();

  const isActiveLink = props.isActive ?? pathname === props.href;

  const linkClassName = clsx({
    "font-semibold text-primary": isActiveLink,
    "font-normal": !isActiveLink,
  });

  return (
    <Link className={linkClassName} href={props.href} onClick={props.onClick}>
      {props.name}
    </Link>
  );
}
