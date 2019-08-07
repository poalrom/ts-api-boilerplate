import { app } from "./index";

beforeAll(async () => {
    await new Promise((res) => {
        app.on("listening", res);
    });
});

afterAll(() => {
    app.close();
});