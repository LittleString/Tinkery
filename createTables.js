import initSqlJs from 'sql.js';

async function setupDatabase() {
    // Initialize SQL.js
    const SQL = await initSqlJs({ 
        locateFile: file => `./sql-wasm.wasm`  // Path to your Wasm file
    });

    // Create an in-memory database
    const db = new SQL.Database();

    // Create a table
    db.run(`
        CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            name TEXT,
            email TEXT
        );
    `);

    // Insert some data
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", ["Alice", "alice@example.com"]);
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", ["Bob", "bob@example.com"]);

    // Query data
    const result = db.exec("SELECT * FROM users");

    console.log(result);

    return db;
}

// Call the setup function
setupDatabase();
