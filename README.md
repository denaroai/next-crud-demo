
## 🚀 Quick Start

You need to have node and git bash installed to run any of these commands: https://nodejs.org/en/download, https://git-scm.com/install/windows

### 1. Clone the Repository

```bash
git clone https://github.com/denaroai/next-crud-demo
cd next-crud-demo
```

### 2. Environment Setup

Create a `.env` file in the root directory of the project:

```bash
INTERVIEW_KEY=superSecretToken-<your-name>
```

**Example:**
```bash
INTERVIEW_KEY=superSecretToken-john
```

> **Important:** Replace `<your-name>` with your actual username. This API key is used to authenticate all requests to the Interview API.

### 3. Install Dependencies

```bash
bun install
# or
npm install
# or
pnpm install
```

### 4. Run the Development Server

```bash
bun dev
# or
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


### API Endpoints

#### **GET** `/interview/customers`
Retrieves all customers for the authenticated user.

**Headers:**
```
INTERVIEW_KEY: superSecretToken-<your-name>
```

**Response:**
```json
[
  {
    "id": "uuid-string",
    "name": "John Doe",
    "balance": "1000.00",
    "balanceAge": 30,
    "createdAt": 1234567890,
    "updatedAt": 1234567890
  }
]
```

---

#### **POST** `/interview/customers`
Creates a new customer.

**Headers:**
```
INTERVIEW_KEY: superSecretToken-<your-name>
```

**Request Body:**
```json
{
  "name": "John Doe",
  "balance": "1000.00",
  "balanceAge": 30
}
```

**Response:**
Returns the **complete list** of all customers (including the newly created one):
```json
[
  {
    "id": "uuid-string",
    "name": "John Doe",
    "balance": "1000.00",
    "balanceAge": 30,
    "createdAt": 1234567890,
    "updatedAt": 1234567890
  },
  ...
]
```

---

#### **POST** `/interview/customers/:customerId`
Updates an existing customer.

**Headers:**
```
interview-api-key: superSecretToken-<your-name>
```

**URL Parameters:**
- `customerId` - The UUID of the customer to update

**Request Body:**
```json
{
  "name": "Jane Doe",
  "balance": "2000.00",
  "balanceAge": 45
}
```

**Response:**
Returns the **complete list** of all customers (with the updated customer):
```json
[
  {
    "id": "uuid-string",
    "name": "Jane Doe",
    "balance": "2000.00",
    "balanceAge": 45,
    "createdAt": 1234567890,
    "updatedAt": 1234567891
  },
  ...
]
```

---

#### **DELETE** `/interview/customers/:customerId`
Deletes a customer.

**Headers:**
```
INTERVIEW_KEY: superSecretToken-<your-name>
```

**URL Parameters:**
- `customerId` - The UUID of the customer to delete

**Response:**
```json
{
  "success": true,
  "customers": [
    {
      "id": "uuid-string",
      "name": "John Doe",
      "balance": "1000.00",
      "balanceAge": 30,
      "createdAt": 1234567890,
      "updatedAt": 1234567890
    },
    ...
  ]
}
```

## ️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client
- **Bun/npm/pnpm** - Package manager

## 📝 Customer Data Model

```typescript
interface DemoCustomer {
  id: string;           // UUID
  name: string;         // Customer name
  balance: string;      // Balance as string (e.g., "1000.00")
  balanceAge: number;   // Age of balance in days
  createdAt: number;    // Unix timestamp
  updatedAt: number;    // Unix timestamp
}
```

## 🔒 Security Notes

- The `INTERVIEW_KEY` is stored in `.env` and never exposed to the client
- All API calls are made server-side through Next.js Server Actions
- The `.env` file should be added to `.gitignore` (already configured)
