// todo
import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { NextHandler } from "next-connect";
import { MongoClientOptions } from "mongodb";

const { MONGODB_URI, MONGODB_NAME } = process.env;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!MONGODB_NAME) {
  throw new Error("Please define the MONGODB_DB environment variable");
}

const options: MongoClientOptions = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

// todo
// let mongodbUri;
// if(process.env.NODE_ENV === 'test')
//  mongodbUri = process.env.MONGODB_URI_LOCAL
// else mongodbUri = process.env.MONGODB_URI
const client = new MongoClient(MONGODB_URI, options);

// let cachedDb: any = null;

interface DbRequest extends NextApiRequest {
  dbClient: MongoClient;
  db: Db;
}

async function connectToDb(
  req: DbRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  // if (cachedDb) {
  //   console.log("👌 Using existing connection");
  //   return Promise.resolve(cachedDb);
  // }
  try {
    await client.connect();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    return res.status(500).json({ error: "Failed to connect to database" });
  }

  req.dbClient = client;
  let db = client.db(MONGODB_NAME);
  req.db = db;
  // cachedDb = db;

  return next();
}

const middleware = nextConnect<DbRequest, NextApiResponse>();

middleware.use(connectToDb);

export default middleware;
