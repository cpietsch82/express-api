import app from "../../server";
import supertest from "supertest";

describe("todos handler", () => {
  let bearer_token: string;

  beforeEach(async () => {
    const res = await supertest(app)
      .post("/api/v1/auth/sign-in")
      .send({ email: "max@mustermann.com", password: "mustermann" });
    bearer_token = res.body.token;
  });

  it("should not be create a todo", async () => {
    const res = await supertest(app)
      .post("/api/v1/todos")
      .send({ todo: "new todo", dontAt: null })
      .set("Accept", "application/json");

    expect(res.status).toEqual(401);
  });

  it("should be create a todo", async () => {
    const res = await supertest(app)
      .post("/api/v1/todos")
      .send({ todo: "new todo", dontAt: null })
      .set("Authorization", `Bearer ${bearer_token}`)
      .set("Accept", "application/json");

    expect(res.status).toEqual(201);
  });
});
