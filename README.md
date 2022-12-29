# ReBuy-frontend

This is the backend code for my clone of OLX type website-ReBuy.

## Important Points

- The repo link of this project's frontend- [Github-ReBuy-frontend](https://github.com/thecurious1-sudo/ReBuy-backend)
- This backend is hosted at [ReBuy-backend](https://rebuy-backend.cyclic.app/)
- It uses Express backend server and MongoDB as database.

## Run Locally

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need Node.js and npm (which comes with Node) installed on your machine.

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/thecurious1-sudo/ReBuy-backend
```

2. Go to the project directory

```bash
  cd ReBuy-backend
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  node index.js
```

The app will open in your default browser at http://localhost:4000

### Environment Variables

To run this project, you will need to add the following environment variables to your root level .env file

- `JWT_SECRET` - used to generate JSON WebToken for encoding purpose
- `MONGODB_URL` - mongoDB connection url( Use mongodb://0.0.0.0:27017/ReBuy if you are testing it locally or for online hosting, you can generate one from MongoDB Atlas platform)

## Seeding Data

I've created some sample data to seed the database. You can seed your DB by:-

```bash
  cd seeds
  node index.js
```

## API Reference

- ### /user routes

```http
  POST /user/login
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. Email Id |
| `password` | `string` | **Required**. Password |

```http
  POST /user/signup
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Name |
| `email` | `string` | **Required**. Email Id |
| `password` | `string` | **Required**. Password |
| `username` | `string` | Username |
| `DOB` | `string` | Date of Birth |
| `address` | `string` | Address |
| `phone` | `string` | Phone Number |

- ### /products routes

```http
  POST /products/
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|

```http
  POST /products/new
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|
| `name` | `string` | **Required**. Name of the product|
| `description` | `string` | **Required**. Description of the product|
| `price` | `string` | **Required**. Price of product|
| `address` | `string` | **Required**. Address of exchange|

```http
  POST /products/:id
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|

Parameters
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Product ID|

- ### /orders routes

```http
  POST /orders/ - Get all the orders of logged in user
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|

```http
  POST /orders/new - Create a new order
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|
| `productId` | `string` | **Required**. Product ID|

```http
  POST /orders/:id
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|

Parameters
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Order ID|

- ### /myItems routes

```http
  POST /myItems/ - Get all the items posted by the user
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|

```http
  POST /myItems/:id
```

Body
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `token` | `string` | **Required**. Authorization Token|

Parameters
| Field | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Item ID|
