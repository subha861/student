const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("index.html loads main page content", () => {
  const html = fs.readFileSync(
    path.join(__dirname, "../index.html"),
    "utf8"
  );

  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Page should not be empty
  expect(document.body.textContent.length).toBeGreaterThan(0);

  // Should contain Add / View text (button or link)
  expect(document.body.textContent.toLowerCase()).toContain("add");
  expect(document.body.textContent.toLowerCase()).toContain("view");
});

