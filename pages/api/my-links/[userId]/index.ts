import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { userId },
  } = req;
  const myLinks = await client.myLinks.findMany({
    where: { userId: userId.toString() },
  });

  res.json({ ok: true, myLinks });
}

export default withHandler({ methods: ["GET"], handler, isPrivate: false });
