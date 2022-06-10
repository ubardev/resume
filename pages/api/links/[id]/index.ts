import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
  } = req;

  const links = await client.links.findMany({
    where: { userId: id.toString() },
  });

  res.json({ ok: true, links });
}

export default withHandler({ methods: ["GET"], handler, isPrivate: false });
