# Kurikulum Standar Rust Developer (Edisi 2025)

Kurikulum ini dirancang untuk mencetak Engineer yang ahli dalam membangun sistem yang aman (memory-safe), berkinerja tinggi, dan siap untuk era AI serta WebAssembly. Standar 2025 menekankan pada penguasaan Ownership Model dan ekosistem Async Rust.

---

## 🟢 Fase 1: Fondasi & Ownership (Bulan 1–2)
**Goal:** Memahami paradigma unik Rust yang menjamin keamanan memori tanpa Garbage Collector.

1.  **Sintaksis Dasar:**
    *   Variabel & Mutability (`let` vs `let mut`).
    *   Tipe Data: Skalar (int, float, bool, char) & Komposit (tuple, array).
    *   Control Flow: `if`, `loop`, `while`, `for`, dan `match` (Pattern Matching).
2.  **The Holy Grail: Ownership:**
    *   Konsep Move, Copy, dan Clone.
    *   Borrowing: Shared references (`&T`) vs Mutable references (`&mut T`).
    *   Lifetime Elision: Memahami kapan data "hidup" dan "mati".
3.  **Struktur Data:**
    *   Structs (Classic, Tuple, Unit-like).
    *   Enums: Menggunakan `Option<T>` dan `Result<T, E>`.
    *   Pattern Matching dengan `if let` dan `match`.
4.  **Error Handling (Standar 2025):**
    *   Unrecoverable errors (`panic!`).
    *   Recoverable errors (`Result`).
    *   Library Wajib: **`thiserror`** (untuk library) & **`anyhow`** (untuk aplikasi).
5.  **Tooling & Cargo:**
    *   Cargo workflow, `Cargo.toml`, dan `clippy` (Linter wajib).

---

## 🟡 Fase 2: Intermediate & Type System (Bulan 3–4)
**Goal:** Menulis kode yang reusable dan memahami manajemen memori tingkat lanjut.

1.  **Generics & Traits:**
    *   Mendefinisikan Shared Behavior dengan Traits.
    *   Trait Bounds & Deriving Traits (`Debug`, `Clone`, `Serialize`).
    *   Trait Objects (`dyn Trait`) untuk Dynamic Dispatch.
2.  **Smart Pointers:**
    *   `Box<T>` untuk alokasi Heap.
    *   `Rc<T>` & `Arc<T>` untuk Reference Counting (Shared Ownership).
    *   `RefCell<T>` untuk Interior Mutability.
3.  **Collections:**
    *   Vector, String vs `&str`, dan HashMap.
4.  **Testing & Documentation:**
    *   Unit Testing, Integration Testing, dan Documentation Tests.
    *   Penggunaan `cargo-nextest` untuk eksekusi test yang sangat cepat.

---

## 🟠 Fase 3: Concurrency & Backend (Bulan 5–6)
**Goal:** Menguasai pemrograman asinkron dan membangun layanan backend skala besar.

1.  **Async Rust (The Tokio Stack):**
    *   Memahami `Future` dan Polling.
    *   Runtime: **Tokio** (Standard) atau **Monoio** (Thread-per-core).
    *   Async/Await syntax dan penanganan `JoinHandle`.
2.  **Web & API Development:**
    *   **Axum**: Framework web standar industri yang modular.
    *   Serialization dengan **Serde** (Standar de-facto).
    *   Database: **SeaORM** (Typed ORM) atau `sqlx` (Compile-time checked SQL).
3.  **Concurrency Patterns:**
    *   Safe Shared State: `Arc<Mutex<T>>`.
    *   Messaging: Channels (mpsc, oneshot, broadcast).
4.  **Observability:**
    *   Structured Logging dengan **`tracing`**.
    *   Metrics & Tracing dengan OpenTelemetry.

---

## 🔴 Fase 4: Wasm, AI & Systems (Bulan 7+)
**Goal:** Ekspansi ke WebAssembly, AI, dan optimasi sistem tingkat rendah.

1.  **WebAssembly (Wasm):**
    *   Frontend Rust: **Leptos** (Signals-based) atau **Dioxus**.
    *   Wasm Component Model & `wit-bindgen`.
2.  **AI & High Performance Data:**
    *   **Polars**: Manipulasi data super cepat (Alternatif Pandas).
    *   **Candle**: Lightweight ML framework dari HuggingFace.
    *   Vector DB integration (Qdrant/Milvus).
3.  **Unsafe & FFI:**
    *   Kapan menggunakan `unsafe`.
    *   Memanggil library C/C++ dari Rust.
4.  **Performance Tuning:**
    *   Profiling dengan `flamegraph`.
    *   Benchmarking dengan `criterion`.

---

## 🛠️ Ringkasan Praktik Terbaik Rust (2025)

| ❌ Hindari | ✅ Lakukan (2025 Standard) |
| :--- | :--- |
| Terlalu banyak `.unwrap()` | Gunakan **`match`**, `?` operator, atau **`expect()`** |
| Manual memory management | Percayakan pada **Borrow Checker** |
| Deeply nested `if/else` | Gunakan **Pattern Matching** |
| `String` untuk semua teks | Gunakan **`&str`** untuk efisiensi jika memungkinkan |
| Framework yang terlalu "magic" | Gunakan **Axum** yang eksplisit dan modular |

---
*Dokumen ini disusun untuk mendukung pengembangan kurikulum **muf-up**.*
