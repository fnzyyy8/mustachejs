import mustache from "mustache";
import fs from "fs/promises";

test("Test List", async () => {
  const helloTemplate = await fs
    .readFile("./view/hobbies.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTemplate, {
    hobbies: ["Coding", "Gaming", "Belajar"],
  });

  console.log(data);
  expect(data).toContain("Coding");
});
