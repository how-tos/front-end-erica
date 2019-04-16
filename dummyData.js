const data = {
  title: "how to run",
  author: "ben",
  date: "4/15/2019",
  tags: ["outdoor", "physical", "easy"],
  steps: ["get up", "put on your shoes", "get out"],
  rating: 5
};
const users = [
  { id: 1, username: "ben", password: "ben" },
  { id: 2, username: "erica", password: "erica" },
  { id: 3, username: "admin", password: "admin" }
];
const contents = [
  { id: 1, content: "blah blah blah" },
  { id: 2, content: "blah blah blah blah blah" },
  { id: 3, content: "blah blah blah blah" }
];
const tags = [
  { id: 1, tag_name: "home" },
  { id: 2, tag_name: "gardening" },
  { id: 3, tag_name: "woodwork" },
  { id: 4, tag_name: "cooking" }
];
const guides = [
  {
    id: 1,
    title: "how to make a table",
    author: "ben",
    date: "4/15/2019",
    content_id: 1,
    tag_id: 2
  },
  {
    id: 2,
    title: "how to make a chair",
    author: "erica",
    date: "4/15/2019",
    content_id: 2,
    tag_id: 3
  },
  {
    id: 3,
    title: "how to make a box",
    author: "admin",
    date: "4/15/2019",
    content_id: 3,
    tag_id: 2
  }
];
const guidesTags = [
  {
    tag_id: 1,
    guide_id: 1
  },
  {
    tag_id: 1,
    guide_id: 2
  },
  {
    tag_id: 1,
    guide_id: 3
  },
  {
    tag_id: 2,
    guide_id: 2
  },
  {
    tag_id: 2,
    guide_id: 3
  },
  {
    tag_id: 3,
    guide_id: 3
  }
];
module.exports = {
  data,
  users,
  contents,
  tags,
  guides,
  guidesTags
};
