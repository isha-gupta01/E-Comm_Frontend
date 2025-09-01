# 🛒 Full-Stack E-Commerce Website

A full-featured **E-Commerce platform** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) + **Vite, Tailwind CSS, Redux Toolkit, and PayPal integration**.  
This project is designed to simulate a **real-world online store** with complete functionalities like **product management, cart, checkout, payments, user authentication, and an admin dashboard**.  

---

## ✨ Key Features & Flow

### 👤 User Side
- **Authentication & Authorization**  
  - Secure **JWT-based login & signup**.  
  - Passwords encrypted using **bcryptjs**.  
  - Token-based **reset password system** implemented with a reset token model.  

- **Product Browsing & Search**  
  - Explore collections with filtering (gender, category).  
  - View **individual product details** with images & pricing.  
  - **Sort & filter options** for better shopping experience.  

- **Cart Management**  
  - Add products to cart, update quantity, or remove items.  
  - Cart stored in database for **persistent user sessions**.  
  - Dynamic cart drawer integrated with Redux state.  

- **Checkout & Orders**  
  - Secure checkout flow with shipping details.  
  - Integrated **PayPal checkout** using `@paypal/react-paypal-js`.  
  - View **order confirmation & order history** in user profile.  

- **User Dashboard**  
  - Track **past orders** and order details.  
  - Update personal profile (name, email, password).  

- **Newsletter Subscription**  
  - Users can subscribe via email (stored in MongoDB).  

---

### 🛠 Admin Side
- **Admin Authentication**  
  - Only authorized admin users can access admin routes.  

- **Product Management**  
  - Add, edit, and delete products.  
  - Image uploads handled via **Multer → Cloudinary → MongoDB**.  

- **Order Management**  
  - View all orders placed by users.  
  - Update order status (pending → shipped → delivered).  

- **User Management**  
  - View all registered users.  
  - Promote or restrict accounts.  

---

## 🛠 Tech Stack

### Frontend (React + Vite)
- **React 19** with functional components & hooks.  
- **Vite** for fast bundling & development.  
- **React Router DOM 7** for navigation.  
- **Redux Toolkit + React-Redux** for state management (auth, cart, products).  
- **Tailwind CSS** for modern styling.  
- **Axios** for API integration.  
- **Sonner** for toast notifications.  
- **@paypal/react-paypal-js** for payment gateway integration.  

### Backend (Node + Express + MongoDB)
- **Express.js** for REST APIs.  
- **MongoDB with Mongoose** for database design.  
- **JWT** for authentication.  
- **bcryptjs** for password hashing.  
- **Multer + Cloudinary + Streamifier** for image uploads.  
- **dotenv** for environment management.  
- **CORS** for handling cross-origin requests.  

### Tools & Deployment
- **Git & GitHub** – Version control & collaboration.  
- **Vercel** – Frontend deployment.  
- **Render** – Backend deployment.  

---

## 📂 Project Structure

### Frontend

```Frontend
client/
├── public/
│ ├── icon.png
│ └── vite.svg
├── src/
│ ├── assets/ # Static assets (images, icons)
│ ├── components/ # Reusable components
│ │ ├── Admin/ # Admin dashboard
│ │ ├── Cart/ # Cart & checkout
│ │ ├── Common/ # Navbar, Footer, Search, ProtectedRoute
│ │ ├── Layout/ # Page layouts, hero section
│ │ └── Products/ # Product grids, filters, details
│ ├── pages/ # Page-level components (Home, Login, Register, Profile, Orders)
│ ├── redux/ # Redux Toolkit slices & store
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point
│ ├── index.css # Global styles
│ └── App.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

### Backend


```
server/
├── config/
│ └── db.js # MongoDB connection
├── middleware/
│ └── authMiddleware.js # JWT auth protection
├── models/
│ ├── Cart.js # Cart schema
│ ├── Checkout.js # Checkout schema
│ ├── Order.js # Order schema
│ ├── Product.js # Product schema
│ ├── Subscribe.js # Newsletter subscription
│ ├── User.js # User schema
│ └── resetTokenPassword.js# Reset password schema
├── routes/
│ ├── adminRoutes.js # Admin actions
│ ├── cartRoutes.js # Cart APIs
│ ├── checkoutRoutes.js # Checkout APIs
│ ├── orderAdminRoutes.js # Admin order APIs
│ ├── orderRoutes.js # User order APIs
│ ├── productAdminRoutes.js# Admin product APIs
│ ├── productRoutes.js # Public product APIs
│ ├── resetPassword.js # Password reset APIs
│ ├── subscriberRoutes.js # Newsletter APIs
│ ├── uploadRoutes.js # Cloudinary uploads
│ └── userRoutes.js # User authentication & profile
├── seeder.js # Database seeder
├── server.js # Entry point
├── products.js # Sample product data
├── products_fixed.js # Fixed product data
├── package.json
└── package-lock.json

```

## 🚀 Deployment

- **Frontend:** Hosted on [Vercel](https://vistora-ecomm.vercel.app/)  
- **Backend:** Hosted on Render  

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

📚 Learning Outcomes

- Learned to design full-stack apps with MERN stack.

- Implemented state management with Redux Toolkit for cart & authentication.

- Built a secure authentication system with JWT, bcrypt, and protected routes.

- Integrated PayPal API for payments.

- Understood role-based access control (user vs admin).

- Gained experience deploying frontend & backend separately.

👩‍💻 Author-Isha Gupta

[GitHub](https://github.com/isha-gupta01)

[Portfolio](https://next-portfolio-ishagupta.vercel.app/)

[LinkedIn](https://www.linkedin.com/in/isha-gupta-49aba9278/)

































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
