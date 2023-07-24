//@ts-ignore
import { Client } from "@elastic/elasticsearch";

const esClient = new Client({
  node: "https://mnea342wl4:1s2zc45ro1@progresstracker-2547157074.eu-central-1.bonsaisearch.net:443",
});

export default esClient;
