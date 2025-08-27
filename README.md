# 🛒 JSM Mastery - Modern Full Stack E-Commerce Application

A **fully responsive Full Stack E-Commerce application** built with **Next.js, React, Stripe, and Sanity CMS**.
This project includes **real payment integration, product management, and a modern UI with animations**.

Deployed App: 👉 [Live Demo](https://gadgetmasteryhub.vercel.app/)


## 📌 About the Project

* **Stripe Payments** (real checkout, shipping rates, order management)
* **Sanity CMS** (manage products, content, and homepage dynamically)
* **Next.js Best Practices** (server-side rendering, static generation, API routes)
* **React Best Practices** (context API, hooks, reusable components, refs)


## 🚀 Features

✔️ Modern & fully responsive design with animations
✔️ Add, edit, and manage products via **Sanity CMS**
✔️ Secure **Stripe payment integration**
✔️ Advanced cart functionalities
✔️ Optimized Next.js setup with server-side rendering (SSR) & static generation
✔️ Scalable structure for real-world applications


## 📂 Tech Stack

* **Frontend:** Next.js, React, Tailwind CSS
* **State Management:** React Context API
* **Backend/API:** Next.js API Routes
* **Payments:** Stripe
* **CMS:** Sanity.io

## ⚡ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/jsm-mastery.git
   cd jsm-mastery
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file and add your credentials:

   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
   SANITY_API_TOKEN=your_sanity_api_token
   ```

4. **Run the project locally**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**

   ```bash
   npm run build
   npm start
   ```



