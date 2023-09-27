import Link from "next/link";
import React from "react";

interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  pathName: string;
}

export default function Button(props: Button) {
  return (
    <Link href={props.pathName} className="btn-nav">
      {props.title}
    </Link>
  );
}
