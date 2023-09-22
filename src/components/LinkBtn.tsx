import Link from "next/link";

interface LinkBtnProps {
  title: string;
  pathName: string;
}

export default function LinkBtn({ title, pathName }: LinkBtnProps) {
  return (
    <Link href={pathName} className="btn-nav">
      {title}
    </Link>
  );
}
