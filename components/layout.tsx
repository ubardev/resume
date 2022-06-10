import React from "react";
import Link from "next/link";
import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";
import Head from "next/head";

interface LayoutProps {
  title?: string;
  seoTitle?: string;
  children: React.ReactNode;
}

export default function Layout({ title, seoTitle, children }: LayoutProps) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{seoTitle} | Carrot Market</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}
