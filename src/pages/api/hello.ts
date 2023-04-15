import type { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";
import clientPromise from "../../services/mongodb";

interface ExtendedRequest extends NextApiRequest {
  db: Db;
}

type Data = {
  id: string; // does the ObjectId get stringified?
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const client = await clientPromise;
  const placesCollection = client.db("greenfluence").collection("places");
  const data = await placesCollection.find().limit(10).toArray();
  const mappedData = data.map((doc) => ({
    name: doc.name,
    id: doc._id?.toString(),
  }));

  res.json(mappedData);
}
