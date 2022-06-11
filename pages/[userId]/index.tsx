import type { NextPage } from "next";
import Layout from "@components/layout";
import useSWR from "swr";
import { MyLinks } from "@prisma/client";
import { useRouter } from "next/router";
import MyLink from "@components/my-links/my-link";

interface MyLinkResponse {
  ok: boolean;
  myLinks: MyLinks[];
}

const MyLinkDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<MyLinkResponse>(
    router.query.userId ? `/api/my-links/${router.query.userId}` : null
  );

  return (
    <Layout>
      {data?.myLinks?.map((myLink) => (
        <MyLink name={myLink.name} myLink={myLink.link} />
      ))}
    </Layout>
  );
};

export default MyLinkDetail;
