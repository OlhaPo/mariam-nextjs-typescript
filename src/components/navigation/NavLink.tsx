import { LinkProps } from "next/link";
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children?: ReactNode;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavLink(props: NavLinkProps) {
  const linkClassName = clsx({
    "font-semibold text-primary": props.isActive,
    "font-normal": !props.isActive,
  });

  return (
    <Link className={linkClassName} href={props.href} onClick={props.onClick}>
      {props.name}
    </Link>
  );
}
