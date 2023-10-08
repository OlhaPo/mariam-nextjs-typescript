import { LinkProps } from "next/link";
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  isActive?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const linkClassName = clsx({
    "font-semibold text-primary cursor-default": props.isActive,
    "font-normal": !props.isActive,
  });

  return (
    <Link
      {...props}
      className={linkClassName}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
}
