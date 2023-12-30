import mustache from "mustache";

test("Mustache tags", () => {
  const data = mustache.render("Hello {{name}}, my hobbies is {{{hobby}}}", {
    name: "Farhan",
    hobby: "<b>Programming</b>",
  });

  expect(data).toBe("Hello Farhan, my hobbies is <b>Programming</b>");
});
