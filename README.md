# 🚀 Promo Code API

> A robust REST API for managing promo codes and activation workflows
> Built with **NestJS, Prisma, PostgreSQL**

---

## ✨ Features

* 🎟️ Create and manage promo codes
* 📧 Activate promo codes via email
* 🔒 Enforce unique activation per email
* 🚫 Prevent activation beyond limits
* ⏳ Expiration validation
* 🔁 Transaction-safe operations

---

## 🧠 Business Logic

* Each promo code has a **limited number of activations**
* Each email can activate a specific promo code **only once**
* Expired promo codes **cannot be used**
* All activation logic is handled inside a **database transaction**

---

## 🏗️ Tech Stack

| Layer      | Technology                    |
| ---------- | ----------------------------- |
| Backend    | NestJS (Node.js + TypeScript) |
| ORM        | Prisma                        |
| Database   | PostgreSQL                    |
| Validation | class-validator               |
| API Docs   | Swagger                       |

---

## 📊 Data Model

```mermaid
erDiagram
    PromoCode ||--o{ Activation : has
    PromoCode {
        string id
        string code
        int discount
        int activationLimit
        int activationCount
        datetime expiresAt
    }
    Activation {
        string id
        string email
        datetime createdAt
    }
```

---

## ⚙️ Getting Started

### 1. Clone repository

```bash
git clone <your-repo-url>
cd promo-api
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment

Create `.env` file:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/promo_db
```

---

### 4. Run PostgreSQL (Docker)

```bash
docker run --name promo-postgres \
-p 5433:5432 \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_DB=promo_db \
-d postgres
```

---

### 5. Run migrations

```bash
npx prisma migrate dev --name init
```

---

### 6. Start server

```bash
npm run start:dev
```

---

## 📚 API Documentation

Swagger UI available at:

👉 http://localhost:3000/api

---

## 🧪 Example Requests

### Create Promo Code

```http
POST /promocodes
```

```json
{
  "code": "SALE10",
  "discount": 10,
  "activationLimit": 2,
  "expiresAt": "2026-12-31T00:00:00Z"
}
```

---

### Activate Promo Code

```http
POST /promocodes/:code/activate
```

```json
{
  "email": "user@example.com"
}
```

---

## 🔐 Constraints

* Unique activation per `(promoCodeId, email)`
* Activation count cannot exceed limit
* Expired codes are rejected

---

## 🧪 Testing

You can test via:

* Swagger UI
* PowerShell / curl

---

## 📦 Project Structure

```
src/
 ├── promocode/
 ├── activation/
 ├── prisma/
 └── main.ts
```

---

## 🚀 Future Improvements

* Authentication & user accounts
* Rate limiting
* Admin dashboard
* Unit & integration tests

---

## 👨‍💻 Author

* Shirley Bailey

---

## 📌 Notes

This project was implemented as a backend test task, focusing on:

* correctness
* data integrity
* clean architecture
