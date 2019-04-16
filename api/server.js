const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("../data/dbConfig");
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("short"));

server.get("/", (req, res) => {
  res.send("<h1>API is working 🔥</h1>");
});
server.get("/guides", async (req, res) => {
  try {
    const associates = await db("guides")
      .innerJoin("guides_tags", "guides.id", "=", "guides_tags.guide_id")
      .innerJoin("tags", "tags.id", "=", "guides_tags.tag_id")
      .select("guides.id", "tag_name");
    const guides = await db("guides").select("id", "title", "author", "date");
    const contents = await db("contents")
      .join("guides", "guides.content_id", "=", "contents.id")
      .select("contents.id", "contents.img", "contents.content");

    const final = guides.map(guide => {
      let tags = [];
      for (let i = 0; i < associates.length; i++) {
        if (associates[i].id === guide.id) {
          tags.push(associates[i].tag_name);
        }
      }
      let content = contents.filter(cont => {
        return cont.id === guide.id;
      });
      return {
        ...guide,
        tags: tags,
        content: content
      };
    });

    res.status(200).json(final);
  } catch (err) {
    res.status(500).json({ message: "internal server error", err: err });
  }
});
server.post("/register", (req, res) => {
  res.json("registering");
});
module.exports = server;
