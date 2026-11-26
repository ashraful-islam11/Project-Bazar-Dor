
# 🛒 BazarDor (বাজার দর)

A simple and user-friendly web application to explore daily essential product prices, compare market rates, and track price changes.

## 🌐 Live Demo

[**Visit BazarDor →**](https://bazar-dor-a-7-v1.vercel.app/)

## 📂 GitHub Repository

[**View Source Code →**](https://github.com/ashraful-islam11/Project-Bazar-Dor)

---

## ✨ Features

- **Price Change Marquee:** View product price changes and percentage increases or decreases through a continuously scrolling ticker.
- **Browse by Category:** Explore products organized into different categories.
- **Most Price-Increased Products:** Discover products with the highest price increases.
- **Most Price-Decreased Products:** Find products with the largest price decreases.
- **All Products:** Browse the complete collection of essential products.
- **Product Details:** View detailed product information, compare prices across different markets and divisions, and explore historical prices from previous days and weeks.
- **Email Authentication:** Sign up and sign in using email and password.
- **Social Authentication:** Authenticate using Google and GitHub.
- **Profile Management:** View your profile and update your personal information.
- **Responsive Design:** Enjoy a smooth browsing experience across mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

- **Next.js** — React framework for building the web application.
- **JavaScript** — Main programming language.
- **Tailwind CSS** — Utility-first CSS framework for styling.
- **HeroUI** — UI component library.
- **React Toastify** — Toast notifications.
- **React Icons** — Icon library.
- **Better Auth** — Authentication and user management.
- **MongoDB** — Database for storing application data.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/ashraful-islam11/Project-Bazar-Dor.git
```

### 2. Navigate to the Project Directory

```bash
cd Project-Bazar-Dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
BETTER_AUTH_SECRET=your_better_auth_secret

BETTER_AUTH_URL=your_application_url

MONGODB_URI=your_mongodb_connection_string

BASE_API_URL=your_api_url

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Note:** Replace the placeholder values with your own credentials. Never expose your API keys, database credentials, or authentication secrets publicly. Do not commit your `.env.local` file to GitHub.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📌 Project Links

| Resource | Link |
|---|---|
| Live Demo | [BazarDor](https://bazar-dor-a-7-v1.vercel.app/) |
| GitHub Repository | [Project-Bazar-Dor](https://github.com/ashraful-islam11/Project-Bazar-Dor) |

---

## 🛒 About BazarDor

BazarDor helps users explore essential product prices, compare market rates, and stay informed about daily price changes.

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**


You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
