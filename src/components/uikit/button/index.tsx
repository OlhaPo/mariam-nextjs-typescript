import Link from "next/link";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  pathName: string;
}

export function LinkButton(props: ButtonProps) {
  return (
    <Link href={props.pathName} className="btn-nav">
      {props.title}
    </Link>
  );
}
