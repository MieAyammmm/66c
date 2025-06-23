-- Migration number: 0001 	 2025-06-23T06:54:25.271Z
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER,
    category TEXT
);

INSERT INTO transactions(name, price, category) 
VALUES ('Cilok', 5000, 'Maem'), ('Batagor', 6000, 'Maem');