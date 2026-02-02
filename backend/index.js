const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, age, className } = req.body;

  if (!name || !age || !className) {
    return res.status(400).json({ message: "All fields are required" });
  }

  students.push({ name, age, className });
  res.json({ message: "Student added successfully" });
});

/* export app for tests */
module.exports = app;

/* start server only if run directly */
if (require.main === module) {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
