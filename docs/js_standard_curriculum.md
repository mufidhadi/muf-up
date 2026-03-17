# Kurikulum Standar JavaScript & TypeScript (Edisi 2025)

Kurikulum ini mencakup standar modern JavaScript dari dasar hingga arsitektur fullstack tingkat lanjut, dengan fokus pada efisiensi, performa, dan integrasi AI.

---

## 🟢 Fase 1: Modern JS Foundations (Bulan 1–2)
**Goal:** Menguasai sintaksis modern dan dasar-dasar eksekusi JavaScript.

1.  **ES Next Syntax:**
    *   Variabel (`const`, `let`) & Scope.
    *   Arrow Functions & Template Literals.
    *   Destructuring, Spread/Rest Operator.
2.  **Asynchronous Mastery:**
    *   Promises & `async / await`.
    *   Event Loop & Macrotasks/Microtasks.
    *   `Promise.withResolvers()` (ES2024).
3.  **Modern Array & Set:**
    *   Immutable methods: `toSorted()`, `toReversed()`, `toSpliced()`.
    *   Native Set Operations: `union()`, `intersection()`, `difference()`.
4.  **Temporal API (ES2025):**
    *   Pengganti `Date` object untuk manipulasi waktu yang aman.
5.  **TypeScript Baseline:**
    *   Dasar-dasar Types: String, Number, Boolean, Array, Object.
    *   Interfaces & Types Aliases.

---

## 🟡 Fase 2: Modern Frontend & Tooling (Bulan 3–4)
**Goal:** Membangun antarmuka modern yang cepat dan reaktif.

1.  **Framework Evolution:**
    *   **React 19**: Server Components, React Compiler, dan Action Hooks.
    *   **Signals**: Memahami reaktivitas modern (Vue, Svelte, Solid).
2.  **Modern Styling:**
    *   **Tailwind CSS v4**: CSS-first configuration & lightning engine.
    *   Container Queries & `:has()` selector.
3.  **Tooling Industry Standard:**
    *   **Vite**: Standar bundler untuk semua framework.
    *   **Biome**: Alternatif super cepat untuk Prettier & ESLint.
4.  **Component Architecture:**
    *   Islands Architecture & Hydration strategies.
    *   State Management: Zustand atau Signals (bukan Redux lagi).

---

## 🟠 Fase 3: Backend Runtimes & Fullstack (Bulan 5–6)
**Goal:** Memilih runtime yang tepat dan membangun sistem fullstack.

1.  **The Runtime Race:**
    *   **Node.js 22+**: Standar industri dengan fitur bawaan WebSocket & Test Runner.
    *   **Bun**: Untuk kecepatan eksekusi dan startup yang instan.
    *   **Deno 2.0**: Untuk keamanan dan native TypeScript support.
2.  **Backend Frameworks:**
    *   **Hono**: Pilihan utama untuk Edge/Serverless APIs.
    *   **Fastify**: Untuk high-performance monolithic apps.
3.  **Fullstack Meta-Frameworks:**
    *   Next.js 15 (App Router), SvelteKit, atau Nuxt 3.
4.  **Database & ORM:**
    *   PostgreSQL dengan **Drizzle ORM** (lebih ringan & type-safe) atau Prisma.
    *   Type-safe communication dengan **tRPC**.

---

## 🔴 Fase 4: Professional Architecture & AI (Bulan 7+)
**Goal:** Menangani skala besar dan mengintegrasikan kecerdasan buatan.

1.  **Advanced TypeScript:**
    *   Generics, Utility Types, dan Template Literal Types.
    *   Zod untuk skema validasi runtime.
2.  **Architecture & Monorepos:**
    *   **Turborepo** atau Nx untuk mengelola banyak package/aplikasi.
3.  **Testing Strategy:**
    *   Unit Testing dengan **Vitest**.
    *   E2E Testing dengan **Playwright**.
4.  **AI & Agent Integration:**
    *   **MCP (Model Context Protocol)**: Menghubungkan aplikasi dengan AI agents.
    *   Vercel AI SDK untuk membangun fitur berbasis LLM.

---

## 🛠️ Ringkasan Praktik Terbaik (2025)

| ❌ Hindari | ✅ Lakukan (2025 Standard) |
| :--- | :--- |
| CommonJS (`require`) | Gunakan **ES Modules (`import`)** |
| `moment.js` atau `day.js` | Gunakan **Temporal API** |
| Redux untuk state kecil | Gunakan **Zustand** atau **Signals** |
| `npm install` (lambat) | Gunakan **`bun install`** atau **`pnpm`** |
| `any` di TypeScript | Gunakan **`unknown`** atau Tipe Spesifik |

---
*Dokumen ini disusun untuk mendukung pengembangan kurikulum **muf-up**.*
