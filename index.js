import express from "express";
import supertest from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", "./view");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    say: "This is test",
  });
});

app.listen(3000, () => {
  console.log("Connected to port 3000...");
});
