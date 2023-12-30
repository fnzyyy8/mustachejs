import mustache from "mustache";
import fs from "fs/promises";

test("partials", async () => {
  const contentTemplate = await fs
    .readFile("./view/content.mustache")
    .then((data) => data.toString());
  const headerTemplate = await fs
    .readFile("./view/header.mustache")
    .then((data) => data.toString());
  const footerTemplate = await fs
    .readFile("./view/footer.mustache")
    .then((data) => data.toString());

  const data = mustache.render(
    contentTemplate,
    {
      title: "Mustache Js",
      content: "Mustache Js Konten",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    }
  );

  console.log(data);
  expect(data).toContain("Mustache Js");
  expect(data).toContain("Mustache Js Konten");
  expect(data).toContain("Powered by Tumbuh Nusa Tech");
});
