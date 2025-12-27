# E-Commerce Web App (React + TypeScript + Firebase + Stripe)

A feature-rich and responsive E-Commerce application built using **React, TypeScript, Tailwind CSS, ShadCN, Firebase Authentication, Redux Toolkit and Stripe Checkout (Node.js)**.  
The application provides a complete shopping experience including authentication, product browsing, cart management, checkout and a user dashboard with analytics.

---

## 🚀 Tech Stack

**Frontend**

- React + TypeScript (Vite)
- Tailwind CSS
- ShadCN UI
- Redux Toolkit
- Context API (Auth)
- Lottie Files
- React Icons
- Swiper.js
- Recharts / React Simple Maps

**Backend (Stripe)**

- Node.js
- Express.js
- Stripe API

**Authentication**

- Firebase Auth (Email/Password + Google Sign In)

## ✨ Features

### 🏠 Homepage

- Hero section
- Categories section
- Latest products
- Deals of the Month with **live countdown timer**
- Customer reviews (static)
- Features section

### 🛍️ Products System

- All products page with pagination
- Filter by category & price range
- Single product page:
  - Image gallery with **Swiper.js**
  - Related products

### 📁 Categories

- Categories page
- Single category page

### 🔐 Authentication

- Signup / Login
- Forgot Password
- Google Sign-In
- Protected routes

### 🛒 Cart System (Redux Toolkit)

- Add to cart
- Increase / decrease quantity
- Remove items
- Cart total calculation

### 💳 Stripe Checkout

- Secure checkout using Node.js backend
- Frontend → Backend → Stripe payment integration

### 📊 User Dashboard

- Info cards (Revenue / Orders / Customers)
- Revenue vs Orders chart
- Channels Pie Chart
- Sales table
- Sales map using **React Simple Maps**

## 📂 Project Structure

src/
│
├── assets/
│ ├── images/
│ └── icons/
| └── styles/
│
├── components/
│ │
│ ├── common/
| | ├── Dashboard/
| | | |── ChannelChart.tsx
| | | |── Header.tsx
| | | |── InfoCard.tsx
| | | |── RevenueOrderChart.tsx
| | | |── SalesChart.tsx
| | | |── TopProducts.tsx
| | |
| | ├── layout/
│ | | ├── AppSidebar.tsx
│ | | ├── Footer.tsx
│ | | ├── Navbar.tsx
│ | |
| | ├── products/
│ | | ├── ProductCard.tsx
| | | ├── RelatedProducts.tsx
│ | |
│ | ├── AddUser.tsx
│ | ├── BestSeller.tsx
│ | ├── Categories.tsx
│ | ├── CategoryCard.tsx
| | ├── Form.tsx
│ | ├── Hero.tsx
│ | ├── IconCard.tsx
│ | ├── InstaCard.tsx
│ | ├── InstaStories.tsx
│ | ├── MainMenu.tsx
│ | ├── MonthlyDeals.tsx
│ | ├── PrivateRoutes.tsx
│ | ├── ProfileDetail.tsx
│ | ├── PublicRoutes.tsx
| | ├── ScrollToTop.tsx
| | ├── StoreFeatures.tsx
| | ├── TestimonialCard.tsx
| | ├── Testimonials.tsx
| | ├── UserCard.tsx
| |
│ └── ui/
| | ├── avatar.tsx
| | ├── breadcrumb.tsx
| | ├── button.tsx
| | ├── checkbox.tsx
| | ├── collapsible.tsx
| | ├── dialog.tsx
| | ├── dropdown-menu.tsx
| | ├── input.tsx
| | ├── navigation-menu.tsx
| | ├── OtpInput.tsx
| | ├── pagination.tsx
| | ├── select.tsx
| | ├── sheet.tsx
| | ├── sidebar.tsx
| | ├── skeleton.tsx
| | ├── slider.tsx
| | ├── table.tsx
| | ├── tabs.tsx
| | ├── textarea.tsx
| | └── tooltip.tsx
|
├── context/
│ └── AuthContext.tsx
|
├── layouts/
│ └── DashboardLayout.tsx
│ └── MainLayout.tsx
|
├── lib/
│ └── Utils.ts
|
├── pages/
│ ├── Auth/
│ | ├── EnterOtp.tsx
│ | ├── ForgotPassword.tsx
│ | ├── Login.tsx
│ | ├── Signup.tsx
│ |
│ ├── Dashboard/
│ | ├── Home.tsx
│ | ├── Orders.tsx
│ | ├── Profile.tsx
│ | ├── UserDetail.tsx
│ | ├── Users.tsx
│ |
│ ├── Home.tsx
│ ├── CancelOrder.tsx
│ ├── Cart.tsx
│ ├── Categories.tsx
│ ├── ContactUs.tsx
│ ├── NotFound.tsx
│ ├── ProductDetail.tsx
│ ├── Products.tsx
│ └── Success.tsx
│
├── store/
│ ├── cart/
│ │ ├── cartSlice.ts
│ │ ├── index.ts
│ │
│ ├── index.ts
│
│
├── routes/
│ └── AppRoutes.tsx
│
│
├── App.tsx
├── App.css
├── main.tsx
├── index.css
├── firebase.ts
└── vite-env.d.ts

server.js
│
├── env.example
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts

---

## 🔑 Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_key_here
VITE_FIREBASE_PROJECT_ID=your_key_here
VITE_STRIPE_PUBLIC_KEY=your_key_here




STRIPE_SECRET_KEY=your_key_here


🛠️ Installation & Setup

git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name


npm install
npm run dev

Open in browser:
http://localhost:3000


📸 Screenshots (Optional)
![Home](./screenshots/home.png)
![Products](./screenshots/products.png)
![Dashboard](./screenshots/dashboard.png)



🔮 Future Improvements

Admin dashboard
Wishlist functionality
Order history
Coupons and discounts
Product reviews & ratings


👨‍💻 Developer

Asad Aziz
Front-End Developer

GitHub: https://github.com/asadaziz3536

LinkedIn: https://linkedin.com/in/asad-aziz-22ba71192
```
