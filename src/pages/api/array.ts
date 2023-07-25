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
    //! create an index: esClient.indices.create({index: [someIndexName] })
    //! add documents to an index called "users": esClient.index<Some_Interface_Here>({index:"users",document:{
    //! name:"Jack", password:"Bob", age:15, date_created: new Date(), ...
    //!}})

    const resolve = await esClient.index<Userdocument>({
      index: "users",
      document: {
        age: 66,
        date_created: new Date(),
        email: "123wewewesd@gmail.com",
        name: "Nam",
        password: "dceewefsqwe231231df",
      },
    });
    response.status(200).json(resolve);
  } catch (error: any) {
    response.send(error.message);
  }
};

export default handler;
