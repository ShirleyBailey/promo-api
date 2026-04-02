# Promo Code REST API

## 📌 Overview

This project is a REST API for managing promo codes and their activations.

It allows:

* Creating promo codes
* Listing promo codes
* Activating promo codes by email with constraints

Built with:

* Node.js
* TypeScript
* NestJS
* PostgreSQL
* Prisma ORM

---

## 🚀 Features

### Promo Code

* Create a promo code
* View all promo codes

### Activation

* Activate promo code by email
* Each email can activate a promo code only once
* Activation limit is enforced
* Expired promo codes cannot be activated

---

## 🗄️ Data Model

### PromoCode

* `id` (UUID)
* `code` (unique)
* `discount` (%)
* `activationLimit`
* `activationCount`
* `expiresAt`
* `createdAt`

### Activation

* `id`
* `promoCodeId`
* `email`
* `createdAt`

Constraints:

* Unique (promoCodeId + email)
* activationCount <= activationLimit

---

## ⚙️ Setup Instructions

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
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/promo_db"
```

---

### 4. Run database

Example using Docker:

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

Server will run at:

```
http://localhost:3000
```

---

## 🧪 API Endpoints

### Create Promo Code

```http
POST /promocodes
```

Body:

```json
{
  "code": "SALE10",
  "discount": 10,
  "activationLimit": 2,
  "expiresAt": "2026-12-31T00:00:00Z"
}
```

---

### Get All Promo Codes

```http
GET /promocodes
```

---

### Activate Promo Code

```http
POST /promocodes/:code/activate
```

Body:

```json
{
  "email": "user@example.com"
}
```

---

## ❗ Business Rules

* A promo code can be activated only within its validity period
* Each email can activate a specific promo code only once
* Activation cannot exceed the defined limit
* All activation operations are executed inside a transaction

---

## 🧪 Testing

Example using PowerShell:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/promocodes" `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{"code":"SALE10","discount":10,"activationLimit":2,"expiresAt":"2026-12-31T00:00:00Z"}'
```

---

## 📦 Tech Stack

* NestJS
* Prisma ORM
* PostgreSQL
* TypeScript

---

## 📌 Notes

* No authentication implemented (as per requirements)
* No frontend included
* Focus on correctness and data integrity

---

## ✅ Status

✔ Core functionality implemented
✔ Constraints enforced
✔ API tested manually

---

## 👨‍💻 Author

* Shirley Bailey
