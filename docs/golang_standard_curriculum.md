# Kurikulum Standar Golang Developer (Edisi 2025)

Kurikulum ini disusun untuk mencetak Backend Engineer yang handal dalam membangun sistem terdistribusi, performansi tinggi, dan cloud-native menggunakan Go. Standar 2025 menekankan pada penguasaan Standard Library sebelum menggunakan Framework.

---

## 🟢 Fase 1: Dasar & Filosofi Go (Bulan 1–2)
**Goal:** Memahami cara kerja runtime Go dan menulis kode yang idiomatik.

1.  **Sintaksis Dasar:**
    *   Variabel, Tipe Data, Konstan, dan `iota`.
    *   Control Flow: `if`, `for`, `switch`, dan `defer` (sangat penting).
2.  **Struktur Data:**
    *   Arrays & **Slices** (Memahami internal slice header).
    *   Maps & Structs.
    *   Pointers: Kapan menggunakan pointer vs value.
3.  **Fungsi & Error Handling:**
    *   Multiple Return Values.
    *   **Error as Values**: Pola `if err != nil`, `errors.Is`, `errors.As`.
4.  **Modern Go (1.23+):**
    *   Iterators (Range-over-function).
    *   Generics dasar (`any`, `comparable`, constraints).
5.  **Tooling Dasar:**
    *   Go Modules (`go mod init`, `go mod tidy`).
    *   **`golangci-lint`**: Linter standar industri.

---

## 🟡 Fase 2: Backend Engineering (Bulan 3–4)
**Goal:** Membangun layanan backend yang robust menggunakan standard library.

1.  **Interfaces & Composition:**
    *   Interface sebagai kontrak (Implicit implementation).
    *   Struct Embedding (Bukan Inheritance).
2.  **Standard Library Mastery:**
    *   `net/http`: Routing baru (Go 1.22+) dan middleware.
    *   `context`: Pembatalan (cancellation) dan timeout.
    *   `encoding/json`: Marshalling/Unmarshalling.
    *   `io` & `os`: Operasi file dan stream.
3.  **Database & Persistence:**
    *   Database SQL (PostgreSQL).
    *   Migration: Menggunakan `golang-migrate` atau `atlas`.
    *   ORM vs Query Builder: GORM (ORM) vs `sqlc` (Type-safe SQL).
4.  **Testing:**
    *   Table-driven Tests.
    *   **Fuzzing**: Pengujian otomatis dengan input acak.
    *   Mocking dengan `testcontainers-go` atau `moq`.

---

## 🟠 Fase 3: Concurrency & Sistem Terdistribusi (Bulan 5–6)
**Goal:** Menguasai kekuatan utama Go dalam menangani konkurensi.

1.  **Advanced Concurrency:**
    *   Goroutines & Channels.
    *   Select Statement & Worker Pools.
    *   **Structured Concurrency**: Menggunakan `errgroup` dan `sync.WaitGroup`.
2.  **Communication Protocols:**
    *   **gRPC & Protocol Buffers**: Standar komunikasi antar mikroservis.
    *   RESTful API: Best practices (Richardson Maturity Model).
3.  **Messaging Systems:**
    *   Integrasi dengan Kafka, RabbitMQ, atau NATS.
4.  **Distributed Patterns:**
    *   Circuit Breakers, Retries with Backoff, dan Idempotency.

---

## 🔴 Fase 4: Cloud-Native & Observability (Bulan 7+)
**Goal:** Siap mendeploy aplikasi ke skala produksi global.

1.  **Observability (OTel):**
    *   Structured Logging dengan `slog` (Standard Library).
    *   Metrics dengan Prometheus.
    *   Distributed Tracing dengan **OpenTelemetry**.
2.  **Infrastructure & DevOps:**
    *   Docker: Multi-stage builds untuk binary super kecil.
    *   Kubernetes: Deployments, Services, dan ConfigMaps.
3.  **Performance Tuning:**
    *   Profiling dengan `pprof` (CPU & Memory).
    *   Benchmarking: Menulis micro-benchmark.
    *   Optimasi: Memahami **Escape Analysis** dan GC Pressure.

---

## 🛠️ Ringkasan Praktik Terbaik Go (2025)

| ❌ Hindari | ✅ Lakukan (2025 Standard) |
| :--- | :--- |
| Framework Bloat (Spring-like) | Gunakan **Standard Library** semaksimal mungkin |
| Deep Inheritance | Gunakan **Composition & Interfaces** |
| Panic untuk error biasa | Kembalikan **error** sebagai value |
| Global State | Gunakan **Dependency Injection** |
| `interface{}` (Any) tanpa alasan | Gunakan **Generics** atau Tipe Spesifik |

---
*Dokumen ini disusun untuk mendukung pengembangan kurikulum **muf-up**.*
