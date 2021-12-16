import { Deta } from "deta";
import { requireSession } from "@clerk/nextjs/api";

const deta = Deta(process.env.DETA_KEY);

const base = deta.Base("sites");

const manageSite = async (req, res) => {
  const { username } = req.query;
  if (req.session) {
    let { body, method } = req;
    if (method === "GET") {
      const response = await base.fetch();
      const site = response.items.filter((site) => site.subdomain == username);
      if (site.length > 0) {
        res.status(200).json(site);
      } else {
        res.status(404).json({ subdomain: username });
      }
    } else if (method === "POST") {
      try {
        res.status(201).json(await base.put(JSON.parse(body)));
      } catch (error) {
        res.status(400).json("Not all fields are filled");
      }
    }
  } else {
    res.status(401).end();
  }
};

export default requireSession(manageSite);
