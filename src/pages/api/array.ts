import { NextApiHandler } from "next";

interface User {
  id: number;
  name: string;
  password: string;
}

const myArray: User[] = [{ id: 1, name: "Huy", password: "123123123" }];

const allCharacters =
  "abc!@#$%^&*(defghijklm@#$%^&*(SNKJNJKADSNIQWEnopqrstuvwxyz";
const random = () => Math.floor(Math.random() * allCharacters.length);
const handler: NextApiHandler = async (request, response) => {
  // myArray.push(5);
  myArray.push({ id: 2, name: "SDSAD", password: "12312" });
  for (let i = 0; i < 100; i++) {
    myArray.push({
      id: i + 1,
      name:
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()],
      password:
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()] +
        allCharacters[random()],
    });
  }
  response.status(200).json(myArray);
};

export default handler;
