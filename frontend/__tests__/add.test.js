const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("add.html contains student form inputs", () => {
  const html = fs.readFileSync(
    path.join(__dirname, "../add.html"),
    "utf8"
  );

  const dom = new JSDOM(html);
  const document = dom.window.document;

  expect(document.querySelector("#name")).not.toBeNull();
  expect(document.querySelector("#age")).not.toBeNull();
  expect(document.querySelector("#className")).not.toBeNull();
  expect(document.querySelector("button")).not.toBeNull();
});
