import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
const usersJsonPath = path.join(process.cwd(), "src", "static", "users.json");

type User = { id: string; username: string; password: string };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const X = fs.readFileSync(usersJsonPath, "utf8");
    const arr = JSON.parse(X) as Array<User>;
    if (req.method === "GET") {
      return res.status(200).json(JSON.parse(X));
    }
    if (req.method === "POST") {
      if (!req.body.username || !req.body.password) {
        return res
          .status(400)
          .json({ message: "missing username or password" });
      }
      const { username, password }: { username: string; password: string } =
        req.body;
      arr.push({ username, password, id: `${arr.length + 1}` });
      fs.writeFileSync(usersJsonPath, JSON.stringify(arr), "utf-8");
      res.status(200).json({ message: "User created successfully" });
    }
    return res.status(403).json({ message: "Method not allowed" });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
