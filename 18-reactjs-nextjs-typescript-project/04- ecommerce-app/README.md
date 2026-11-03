# 🛍️ ShopHub - E-Commerce App

Modern e-commerce web app built with **Next.js 15**, **React**, **TypeScript**, **Redux Toolkit**, **Tailwind CSS** and **Shadcn UI** — with a **light / dark / system** theme.

## 🚀 Tech Stack

- **Next.js 15** (App Router, Server Components, Turbopack)
- **React 19**
- **TypeScript**
- **Redux Toolkit** (cart state management)
- **Tailwind CSS v4**
- **Shadcn UI** (Button, Card, Dropdown Menu, Sonner toasts)
- **next-themes** (Light / Dark / System mode)
- **Lucide React** + React Icons (icons)
- **Sonner** (toast notifications)
- FakeStore API

## ✨ Features

### Cart Features
- ✅ Add/Remove items
- ✅ Update quantity (+/-)
- ✅ Auto-calculate total price + shipping + tax
- ✅ LocalStorage persistence (cart saves on refresh)
- ✅ Clear cart option
- ✅ Toast notifications

### Product Features
- ✅ Product listing grid (responsive)
- ✅ Product detail page (dynamic route with SEO title)
- ✅ Optimized product images (`next/image`) with hover zoom
- ✅ Rating stars display

### Theme
- ✅ Light, Dark and System mode (toggle in the navbar)
- ✅ Theme is remembered and applied without a flash on page load
- ✅ Shadcn design tokens (CSS variables) for easy re-theming

### UI/UX Features
- ✅ Loading state (`loading.tsx`)
- ✅ Error handling with retry button (`error.tsx`)
- ✅ Custom 404 page for unknown products
- ✅ Sticky navbar with cart badge
- ✅ Footer with social links
- ✅ Hero section with CTA button

### Responsive Design
| Device | Columns |
|--------|---------|
| Mobile (<640px) | 1 |
| Tablet (640px - 1023px) | 2-3 |
| Desktop (>1024px) | 4 |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Theme + Redux providers, Navbar, Footer)
│   ├── page.tsx            # Home (server component, fetches products)
│   ├── cart/page.tsx       # Cart page
│   ├── product/[id]/       # Product detail page
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error UI with retry
│   ├── not-found.tsx       # 404 UI
│   └── globals.css         # Tailwind + light/dark theme tokens
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── common/             # Navbar, Footer, ThemeToggle, spinner, error...
│   ├── product/            # ProductCard, AddToCartButton
│   ├── cart/               # CartView
│   └── providers/          # StoreProvider, ThemeProvider
├── features/cart/          # Redux Toolkit cart slice + selectors
├── lib/                    # store, typed hooks, cart storage, utils
├── services/api.ts         # FakeStore API calls
└── types/                  # TypeScript types
```

## 🛠️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |

### Add more Shadcn components

```bash
npx shadcn@latest add dialog
```

## 🌐 API Used

https://fakestoreapi.com

---
## 🔗 Live

[View Live Project](https://shophub-ecommerce-app.vercel.app/)

---


## 👨‍💻 Author

**Arashad Ahamad**
- Email: 96arashad@gmail.com
