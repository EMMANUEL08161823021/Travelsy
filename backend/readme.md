# Backend Assessment – Travelsy

## Overview
This project is a simple Node.js backend service (without any external frameworks like Express) that:
1. Periodically fetches data from an external API.
2. Stores the data in memory every 1 minute while avoiding duplicates.
3. Exposes an API endpoint with pagination, ordering, and filtering.

---

## Features
- Fetches data every 1 minute from:  
  [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos)  
- Stores data in memory (no duplicates allowed).
- REST API endpoint:
  - **GET** `/photos?limit=10&page=1&orderBy=title&order=asc`  
    Returns paginated results with optional ordering.

---



## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/EMMANUEL08161823021/Travelsy.git
   cd travelsy
   node backend.js

## Test Instructions

- Using .rest for testiing the following endpoints

GET http://localhost:3000/photos

### Get with limit and page
GET http://localhost:3000/photos?limit=5&page=2

### Get sorted by title
GET http://localhost:3000/photos?limit=4&orderBy=title