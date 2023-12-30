import mustache from "mustache";
import fs from "fs/promises";

test("Mustache tags", async () => {
  const helloTamplate = await fs
    .readFile("./view/hello.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTamplate, {
    title: "Belajar Mustache",
    person: {
      name: "Farhan",
    },
  });

  expect(data).toContain("Belajar Mustache");
  expect(data).toContain("Farhan");
  console.log(data);
});

test("Mustache Section Not Show", async () => {
  const helloTamplate = await fs
    .readFile("./view/person.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTamplate, {});

  expect(data).not.toContain("Farhan");
  console.log(data);
});

test("Mustache Section Show", async () => {
  const helloTamplate = await fs
    .readFile("./view/person.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTamplate, {
    person: {
      name: "Farhan",
    },
  });

  expect(data).toContain("Hello Person");
  console.log(data);
});

test("Mustache Section Data", async () => {
  const helloTamplate = await fs
    .readFile("./view/person.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTamplate, {
    person: {
      name: "Farhan",
    },
  });

  expect(data).toContain("Hello Person Farhan!");
  console.log(data);
});

test("Mustache Inverted Section", async () => {
  const helloTamplate = await fs
    .readFile("./view/person.mustache")
    .then((data) => data.toString());

  const data = mustache.render(helloTamplate, {});

  expect(data).toContain("Hello Guest");
  console.log(data);
});
