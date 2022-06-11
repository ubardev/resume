import Link from "next/link";

interface MyLinkProps {
  name: string;
  myLink: string;
}

export default function MyLink({ name, myLink }: MyLinkProps) {
  return (
    <div>
      <Link href={myLink}>
        <a>{name}</a>
      </Link>
    </div>
  );
}
