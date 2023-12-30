import mustache from "mustache";

test("Test Mustache", () => {
  const data = mustache.render("Hello {{name}}", { name: "Farhan" });
  expect(data).toBe("Hello Farhan");
});

test("Test Mustache compile", () => {
  mustache.parse("Hello {{name}}");

  const data = mustache.render("Hello {{name}}", { name: "Farhan" });
  expect(data).toBe("Hello Farhan");
});
