import { NextApiHandler } from "next";
const myArray = [1, 2, 3, 4];
const handler: NextApiHandler = async (request, response) => {
  response.status(200).json(myArray);
};

export default handler;
