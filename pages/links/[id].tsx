import type { NextPage } from "next";
import Layout from "@components/layout";
import useSWR from "swr";
import { Links } from "@prisma/client";
import { useRouter } from "next/router";
import Link from "next/link";

interface LinkResponse {
  ok: boolean;
  links: Links[];
}

const LinkDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<LinkResponse>(
    router.query.id ? `/api/links/${router.query.id}` : null
  );

  console.log(data?.links);

  return (
    <Layout>
      {data?.links?.map((link) => (
        <div>
          <Link href={link.link}>
            <a>{link.name}</a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default LinkDetail;
