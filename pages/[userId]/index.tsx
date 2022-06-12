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
    <Layout title="My Links" seoTitle="My Links">
      <div className="mt-3 text-3xl">My Links</div>
      {data?.myLinks?.map((myLink) => (
        <MyLink key={myLink.id} name={myLink.name} myLink={myLink.link} />
      ))}
    </Layout>
  );
};

export default MyLinkDetail;
