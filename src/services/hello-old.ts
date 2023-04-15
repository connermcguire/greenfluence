// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import nextConnect, { NextHandler } from "next-connect";
// import type { NextApiRequest, NextApiResponse } from "next";
// import connectToDb from "../../services/connectToDb";
// import { Db } from "mongodb";

// interface ExtendedRequest extends NextApiRequest {
//   db: Db;
// }

// const helloHandler = nextConnect<ExtendedRequest, NextApiResponse>();

// type Data = {
//   id: string; // does the ObjectId get stringified?
//   name: string;
// };

// helloHandler.use(connectToDb);

// helloHandler.get(async (req: ExtendedRequest, res: NextApiResponse<Data[]>) => {
//   const placesCollection = req.db.collection("places");
//   const data = await placesCollection.find({}).limit(10).toArray();
//   const mappedData = data.map((doc) => ({
//     name: doc.name,
//     id: doc._id?.toString(),
//   }));

//   res.json(mappedData);
// });

// export default helloHandler;
