import mustache from "mustache";

test("Test Function", async () => {
  const parameter = {
    name: "Farhan",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  const data = mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);

  expect(data).toBe("Hello FARHAN");
});
