import request from "supertest";
import { app } from "../../index";

test("works", async () => {
    const response = await request(app).get("/debug");
    expect(response.status).toEqual(200);
});