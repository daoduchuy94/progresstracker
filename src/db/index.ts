//@ts-ignore
import { Client } from "@elastic/elasticsearch";

const esClient = new Client({
  node: "https://localhost:9200",
  auth: { username: "elastic", password: "K7TTt3QfIxjfC6_w5uT8" },
  tls: { rejectUnauthorized: false },
});

export default esClient;
