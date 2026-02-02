const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("view.html contains student list container", () => {
  const html = fs.readFileSync(
    path.join(__dirname, "../view.html"),
    "utf8"
  );

  const dom = new JSDOM(html); // ✅ scripts NOT executed
  const document = dom.window.document;

  expect(document.querySelector("h2")).not.toBeNull();
  expect(document.querySelector("#list")).not.toBeNull();
});

