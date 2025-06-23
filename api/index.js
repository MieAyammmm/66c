import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.text("hi");
});

app.get("/transactions", async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM transactions").all();
  return c.json(results);
});

app.post("/transactions", async (c) => {
  const input = await c.req.json();
  const query = `INSERT INTO transactions(name,price,category) values ("${input.name}","${input.price}",${input.category})`;
  const newData = await c.env.DB.exec(query);
  return c.json(newData);
});

app.get("/transactions/:id", async (c) => {
  const id = c.req.param("id");
  let { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE id = ?"
  )
    .bind(id)
    .all();
  return c.json(results[0]);
});

app.put("/transactions/:id", async (c) => {
  const id = c.req.param("id");
  const input = await c.req.json();

  const query = `UPDATE transactions SET name = "${input.name}", price = "${input.price}" WHERE id = "${id}", category = "${input.category}" WHERE id = "${id}"`;
  const data = await c.env.DB.exec(query);
  return c.json(data);
});
app.delete("/transactions/:id", async (c) => {
  const id = c.req.param("id");

  const query = `DELETE FROM transactions WHERE id = "${id}"`;
  const data = await c.env.DB.exec(query);

  return c.json(data);
});

app.get("*", (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
