import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.text("hi");
});

app.get("/api/transactions", async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM transactions").all();
  return c.json(results);
});

// harian
app.get("/api/transactions/daily", async (c) => {
  const today = new Date().toISOString().slice(0, 10);
  let { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE date = ?"
  )
    .bind(today)
    .all();
  return c.json(results);
});
//mingguan
app.get("/api/transactions/weekly", async (c) => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)); // Senin
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6); // Minggu

  const start = monday.toISOString().slice(0, 10);
  const end = sunday.toISOString().slice(0, 10);

  let { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE date >= ? AND date <= ?"
  )
    .bind(start, end)
    .all();
  return c.json(results);
});
//bulanan
app.get("/api/transactions/monthly", async (c) => {
  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth(), 1)
    .toISOString()
    .slice(0, 10);
  const last = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    .toISOString()
    .slice(0, 10);

  let { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE date >= ? AND date <= ?"
  )
    .bind(first, last)
    .all();
  return c.json(results);
});

app.post("/api/transactions", async (c) => {
  const input = await c.req.json();
  const today = new Date().toISOString().slice(0, 10); // format "YYYY-MM-DD"

  const query = `INSERT INTO transactions(name,price,category,date) 
                 VALUES ("${input.name}","${input.price}","${input.category}","${today}")`;

  const newData = await c.env.DB.exec(query);
  return c.json(newData);
});

app.get("/api/transactions/:id", async (c) => {
  const id = c.req.param("id");
  let { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE id = ?"
  )
    .bind(id)
    .all();
  return c.json(results[0]);
});

app.put("/api/transactions/:id", async (c) => {
  const id = c.req.param("id");
  const input = await c.req.json();

  const query = `UPDATE transactions SET name = "${input.name}", price = "${input.price}", category = "${input.category}" WHERE id = "${id}"`;
  const data = await c.env.DB.exec(query);
  return c.json(data);
});
app.delete("/api/transactions/:id", async (c) => {
  const id = c.req.param("id");

  const query = `DELETE FROM transactions WHERE id = "${id}"`;
  const data = await c.env.DB.exec(query);

  return c.json(data);
});

app.get("*", (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
