export const getServerDb = () => {
  // const { NODE_ENV } = process.env;
  // if (NODE_ENV === "production") {
  return process.env.MONGODB_DB;
  // }
  // else {
  // return process.env.MONGODB_DB_LOCAL;
  // }
};

export const getServerDbUri = () => {
  // const { NODE_ENV } = process.env;
  // if (NODE_ENV === "production") {
  if (!process.env.MONGODB_URI)
    throw new Error("Invalid environment variable: MONGODB_URI");
  return process.env.MONGODB_URI;
  // }
  //  else {
  //   if (!process.env.MONGODB_URI_LOCAL)
  //     throw new Error("Please add MONGODB_URI_LOCAL to .env");
  //   return process.env.MONGODB_URI_LOCAL;
  // }
};
