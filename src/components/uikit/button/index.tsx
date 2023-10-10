import { LinkProps } from "next/link";
import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type LinkButtonProps = React.HTMLAttributes<HTMLButtonElement>

export default function LinkButton = (props: LinkButtonProps) => {
  return (
    <button
      {...props}
      href={props.href}
      className={clsx("btn-nav", props.className)}
    >
      {props.children}
    </button>
  );
};

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  className?: string;
  
}
export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      {...props}
      href={props.href}
      className={clsx("btn-nav", props.className)}
    >
      {props.children}
    </Link>
  );
}
