# Kurikulum Bite-Sized Golang (Edisi 2025)

Daftar materi mikro (micro-learning) untuk menguasai Go langkah demi langkah dalam durasi 15-30 menit per topik.

---

## 🟢 Modul 1: Persiapan & Sintaksis Dasar
1.  **The Setup:** Instalasi Go 1.23+ dan VS Code (Go Extension + gopls).
2.  **Hello Gophers:** Inisialisasi module (`go mod init`) dan script pertama.
3.  **Strict Storage:** Deklarasi variabel (`var` vs `:=`) dan tipe data dasar.
4.  **Flow Control:** Logika `if`, `switch`, dan perulangan `for` (Go only has one loop!).
5.  **Deferred Logic:** Memahami `defer` untuk pembersihan sumber daya.
6.  **The Pointer:** Dasar-dasar Pointer (Alamat memori vs Nilai).
7.  **Slices & Arrays:** Membuat list data dinamis dengan Slices.
8.  **Internal Header:** Memahami `length`, `capacity`, dan `backing array` pada Slice.
9.  **Key-Value Map:** Menyimpan data asosiatif dengan `map`.

---

## 🟡 Modul 2: Struktur & Error Handling
10. **The Architect:** Membuat `struct` dan method pertama.
11. **Embedding:** Menggabungkan struct (Composition).
12. **The Contract:** Membuat Interface dasar untuk abstraksi.
13. **Error as Values:** Pola `if err != nil` yang idiomatik.
14. **Error Wrapping:** Menambahkan konteks ke error dengan `%w`.
15. **Type Casting:** Menggunakan Type Assertion dan Type Switches.
16. **Modern Logic:** Menggunakan **Iterators** baru di Go 1.23.
17. **Generic Power:** Membuat fungsi generic dengan type constraints.

---

## 🟠 Modul 3: Backend & Persistence
18. **The Web Server:** Membuat HTTP server pertama dengan `net/http`.
19. **The Router:** Routing modern dengan `http.ServeMux` (Go 1.22+).
20. **JSON Bridge:** Marshalling dan Unmarshalling data JSON.
21. **Context Control:** Memahami `context.Context` untuk timeout request.
22. **The Middleware:** Membuat fungsi interceptor untuk HTTP request.
23. **Database Driver:** Menghubungkan Go ke PostgreSQL (`database/sql`).
24. **Type-safe SQL:** Pengenalan `sqlc` untuk query SQL yang aman.
25. **Migration Lab:** Setup database schema dengan `golang-migrate`.

---

## 🔴 Modul 4: Concurrency (Kekuatan Utama Go)
26. **The Goroutine:** Menjalankan fungsi di background secara ringan.
27. **Safe Talk:** Menggunakan **Channels** untuk komunikasi antar goroutine.
28. **Select Master:** Menangani banyak channel sekaligus dengan `select`.
29. **Sync Group:** Menunggu goroutine selesai dengan `sync.WaitGroup`.
30. **Shared Memory:** Menghindari race condition dengan `sync.Mutex`.
31. **Error Group:** Menjalankan banyak goroutine secara paralel dengan `errgroup`.
32. **Channel Patterns:** Generator, Fan-in, dan Fan-out.

---

## 🟣 Modul 5: Testing & Observability
33. **Test Driven:** Menulis Unit Test pertama di file `_test.go`.
34. **Table-Driven:** Menulis pengujian dengan banyak input kasus.
35. **The Fuzzer:** Mencari bug tersembunyi dengan `go test -fuzz`.
36. **Modern Logs:** Structured logging dengan library `slog`.
37. **Metrics Check:** Integrasi Prometheus metrics dasar.
38. **The Benchstat:** Mengukur performansi fungsi dengan Benchmarks.
39. **Profiler Lab:** Mencari bottleneck memori dengan `pprof`.

---

## 🔵 Modul 6: Microservices & Cloud
40. **The Protocol:** Pengenalan gRPC dan Protobuf.
41. **API Client:** Membuat client gRPC dan HTTP yang handal.
42. **Observability-First:** Setup OpenTelemetry (OTel) Tracing.
43. **Min-Bin:** Membuat Dockerfile multi-stage untuk binary Go (~20MB).
44. **The Pipeline:** Setup Linting (`golangci-lint`) di GitHub Actions.
45. **Ready to Scale:** Konsep dasar deploy Go ke Kubernetes.

---
*Daftar ini adalah panduan praktis untuk mengisi materi **muf-up**.*
