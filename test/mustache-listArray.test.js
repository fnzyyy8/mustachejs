import mustache from "mustache";
import fs from "fs/promises";

test("Test List Object", async () => {
  const helloTemplate = await fs
    .readFile("./view/students.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTemplate, {
    students: [
      {
        name: "Anto",
        kelas: "10",
      },
      {
        name: "Rifki",
        kelas: "11",
      },
    ],
  });

  console.log(data);
  expect(data).toContain("Anto");
});
