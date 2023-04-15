// import { MongoClient, Db } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const dbName = process.env.MONGODB_DB;

// let cachedClient: MongoClient;
// let cachedDb: Db;

// export async function connect(): Promise<Db> {
//   if (cachedClient && cachedClient.topology.isConnected()) {
//     return cachedDb;
//   }

//   const client = await MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   const db = client.db(dbName);

//   cachedClient = client;
//   cachedDb = db;

//   return db;
// }
