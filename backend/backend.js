// backend.js
import http from "http";
import https from "https";

let memoryStore = [];

// Fetch data every 1 minute
async function fetchData() {
  https.get("https://jsonplaceholder.typicode.com/photos", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const parsed = JSON.parse(data);

        // Deduplicate by id
        const existingIds = new Set(memoryStore.map((item) => item.id));
        const newData = parsed.filter((item) => !existingIds.has(item.id));

        memoryStore = [...memoryStore, ...newData];
        console.log(`Stored ${memoryStore.length} unique items`);
      } catch (err) {
        console.error("Error parsing JSON:", err);
      }
    });
  });
}

setInterval(fetchData, 60 * 1000);
fetchData(); // run immediately at startup

// Create HTTP server with pagination
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/photos")) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const limit = parseInt(url.searchParams.get("limit")) || 10;
    const page = parseInt(url.searchParams.get("page")) || 1;
    const orderBy = url.searchParams.get("orderBy") || "id";

    let sorted = [...memoryStore];
    if (orderBy === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sorted.sort((a, b) => a.id - b.id);
    }

    const start = (page - 1) * limit;
    const paginated = sorted.slice(start, start + limit);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(paginated, null, 2));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
