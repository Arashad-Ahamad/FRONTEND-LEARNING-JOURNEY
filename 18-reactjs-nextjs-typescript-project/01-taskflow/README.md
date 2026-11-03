# TaskFlow — Full-Stack Task Manager

A modern, full-stack task manager built with **Next.js 16 (App Router)**, **TypeScript**, **Zod**, and **Server Actions**. No separate API routes — backend logic lives directly in Server Actions. Clean, accessible UI powered by **Shadcn UI** and **Tailwind CSS**.

---

## ✨ Features

- ➕ **Add tasks** with real-time form validation
- ✅ **Toggle completion** status (check/uncheck)
- 🗑️ **Delete tasks** instantly
- ⚡ **Server Actions** — no separate API routes needed
- 🛡️ **Dual-side validation** with Zod (client + server)
- ⏳ **Loading & error states** via React 19 `useActionState`
- 🔄 **Auto-reset form state** — success message auto-dismisses after 2s
- 🎨 **Accessible UI** with Shadcn UI + Radix primitives
- 📱 **Responsive design** with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 16 (App Router)** | Routing, Server Components, Server Actions |
| **TypeScript** | Type safety, strict interfaces |
| **Tailwind CSS** | Utility-first styling |
| **Shadcn UI** | Accessible, professional components |
| **Radix UI** | Keyboard navigation & screen reader support |
| **Zod** | Schema validation + type inference |
| **Server Actions** | Backend logic without API routes |
| **React 19 (`useActionState`)** | Form state management (loading/error) |
| **`useEffect` + `useRef`** | Form reset + success message auto-clear |
| **`revalidatePath`** | Server cache invalidation after mutations |
| **`crypto.randomUUID()`** | Unique todo ID generation |
