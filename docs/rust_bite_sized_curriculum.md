# Kurikulum Bite-Sized Rust (Edisi 2025)

Daftar materi mikro (micro-learning) untuk menaklukkan Rust secara bertahap dalam waktu 20-40 menit per topik.

---

## 🟢 Modul 1: Fondasi & Ownership (Wajib Lulus!)
1.  **The Setup:** Instalasi Rustup, toolchain, dan Rust Analyzer di VS Code.
2.  **Hello Ferrris:** Membuat project pertama dengan `cargo new`.
3.  **Variable Rules:** Memahami `let`, `mut`, dan `const`.
4.  **Shadowing:** Teknik menimpa variabel dengan nama yang sama.
5.  **Ownership (Move):** Kenapa variabel tidak bisa dipakai setelah dipindahkan?
6.  **Borrowing:** Aturan satu mutable OR banyak shared references.
7.  **Lifetimes Basics:** Memahami scope dan referensi yang valid.
8.  **String vs &str:** Perbedaan memori antara heap-allocated string dan string slices.
9.  **Match Mastery:** Pattern matching sebagai pengganti `switch`.

---

## 🟡 Modul 2: Struktur & Error Handling
10. **The Architect:** Membuat Struct dan implementasi `impl` pertama.
11. **Enum Power:** Menyimpan data di dalam Enum (Algebraic Data Types).
12. **The Result:** Mengelola sukses/gagal dengan tipe `Result`.
13. **Option Type:** Mengangani nilai kosong (`None`) tanpa `null`.
14. **Error Bubble:** Menggunakan operator `?` untuk meneruskan error.
15. **Anyhow/Thiserror:** Setup handling error profesional di aplikasi.
16. **Vector Lab:** Menyimpan koleksi data dinamis di heap.
17. **Map Key:** Menggunakan `HashMap` untuk penyimpanan key-value.

---

## 🟠 Modul 3: Traits & Smart Pointers
18. **Trait Contract:** Mendefinisikan interface bersama (traits).
19. **Trait Bounds:** Membatasi input generics dengan traits.
20. **Box Pointer:** Mengalokasikan data di heap secara eksplisit.
21. **Shared Ownership:** Menggunakan `Arc` untuk akses thread-safe.
22. **Interior Mutability:** Teknik mengubah data di dalam immutable struct (`RefCell`).
23. **Generic Types:** Membuat fungsi yang fleksibel untuk berbagai tipe data.
24. **Doc Master:** Menulis dokumentasi otomatis dengan `cargo doc`.

---

## 🔴 Modul 4: Async Rust & Web
25. **The Future:** Memahami konsep dasar `Future` di Rust.
26. **Tokio Runtime:** Setup runtime asinkron standar industri.
27. **Async Web:** Membuat server HTTP sederhana dengan **Axum**.
28. **Serde Magic:** Serialization dan Deserialization JSON otomatis.
29. **SQLX Lab:** Query database PostgreSQL dengan validasi compile-time.
30. **Tracing Log:** Implementasi structured logging yang bersih.
31. **Concurrency:** Menggunakan `spawn` dan `select!` untuk tugas paralel.

---

## 🟣 Modul 5: WebAssembly (Wasm) & AI
32. **Leptos Setup:** Framework frontend Rust berbasis Signals.
33. **Wasm Bindgen:** Menghubungkan Rust dengan JavaScript di browser.
34. **Fast Data:** Analisis data jutaan baris dengan **Polars**.
35. **Local ML:** Inference model AI sederhana dengan **Candle**.
36. **FFI Basics:** Memanggil fungsi C dari dalam kode Rust.
37. **Zero-Cost:** Optimasi kode dengan Inlining dan LTO (Link Time Optimization).

---

## 🔵 Modul 6: Professional Engineering
38. **Nextest:** Menjalankan test paralel super cepat.
39. **Benchmarking:** Mengukur performa fungsi dengan `criterion`.
40. **Distroless:** Membuat Docker image super kecil (~5MB) untuk Rust app.
41. **Safety First:** Menggunakan `clippy` untuk audit keamanan kode.
42. **Auto-Pilot:** Setup GitHub Actions untuk lint, test, dan build Rust.

---
*Daftar ini adalah panduan praktis untuk mengisi materi **muf-up**.*
