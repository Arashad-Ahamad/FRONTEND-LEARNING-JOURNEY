# DevBoard — Real-World Admin Dashboard

A modern, responsive admin dashboard built with **Next.js 16 (App Router)**, **TypeScript**, **Redux Toolkit**, and **Shadcn UI**. Features a collapsible sidebar, dark/light theme toggle, data tables with search/sort/pagination, and smooth Framer Motion animations.

---

## ✨ Features

- 📊 **Dashboard** with stat cards and sales overview
- 📦 **Products page** — search, sort, pagination (FakeStore API)
- 🛒 **Orders page** — status badges, customer info
- 👥 **Users page** — role-based badges (admin/user)
- 🔀 **Collapsible sidebar** with smooth Framer Motion animations
- 🌗 **Dark/Light theme toggle** — persisted to localStorage
- 🌓 **System theme detection** — follows OS preference on first visit
- 💾 **State hydration** — theme + sidebar restored on refresh
- 📱 **Fully responsive** — mobile, tablet, desktop
- ⏳ **Skeleton loaders** for better UX during data fetch
- 🎨 **Accessible UI** with Shadcn UI + Radix primitives
- 🔒 **Type-safe** Redux slices and API responses

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 16 (App Router)** | Routing, layout, client/server components |
| **TypeScript** | Type safety across all files |
| **Redux Toolkit** | Global state — products, orders, UI |
| **React-Redux** | React + Redux connection |
| **Axios** | HTTP client for FakeStore API |
| **Framer Motion** | Sidebar and card animations |
| **Lucide React** | Icon library |
| **Shadcn UI** | Accessible, professional components |
| **Radix UI** | Keyboard navigation & screen reader support |
| **Tailwind CSS** | Utility-first styling |
