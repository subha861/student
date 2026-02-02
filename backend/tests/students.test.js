const request = require("supertest");
const app = require("../index");

describe("Student Management API", () => {

  test("GET /students should return empty array initially", async () => {
    const res = await request(app).get("/students");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("POST /students should add a student", async () => {
    const res = await request(app)
      .post("/students")
      .send({
        name: "Alice",
        age: 18,
        className: "12A"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Student added successfully");
  });

  test("GET /students should return added student", async () => {
    const res = await request(app).get("/students");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("Alice");
  });

  test("POST /students should fail if fields missing", async () => {
    const res = await request(app)
      .post("/students")
      .send({ name: "Bob" });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields are required");
  });

});
