import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.text("hi");
});

app.get("/api/transactions", async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM transactions").all();
  return c.json(results);
});

app.get("*", (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
