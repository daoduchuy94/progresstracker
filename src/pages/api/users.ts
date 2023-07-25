import esClient from "@/db";
import { NextApiHandler } from "next";
export interface Userdocument {
  name: string;
  email: string;
  password: string;
  age: number;
  date_created: Date | string | number;
}
const handler: NextApiHandler = async (request, response) => {
  try {
    const resolve = await esClient.search<Userdocument>({
      index: "users",
      query: {
        match_all: {}, // Retrieve all documents in the index
      },

      //query: { range: { age: { gte: 30 } } },
    });
    const users = resolve.hits.hits.map((hit) => hit._source);
    response.status(200).json(users);
  } catch (error: any) {
    response.send(error.message);
  }
};

export default handler;
