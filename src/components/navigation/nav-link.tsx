import { LinkProps } from "next/link";
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  isactive?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const { isactive: isActive } = props;
  const linkClassName = clsx({
    "font-semibold text-primary cursor-default": isActive,
  });

  const linkProps = { ...props, isactive: undefined };
  return (
    <Link
      {...linkProps}
      className={linkClassName}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
}
