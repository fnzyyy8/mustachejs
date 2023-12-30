import mustache from "mustache";
import fs from "fs/promises";

test("Test Comment", async () => {
  const template = await fs
    .readFile("./view/comment.mustache")
    .then((data) => data.toString());

  const data = mustache.render(template, {
    title: "Title nih bos",
  });

  console.log(data);
  expect(data).toContain("Title nih bos");
  expect(data).not.toContain("Ini Comment");
});
