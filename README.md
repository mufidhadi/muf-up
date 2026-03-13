# Muf-Up: Python Learning Platform

Muf-Up adalah platform pembelajaran Python interaktif yang membantu Anda mempelajari Python secara efektif dan menyenangkan. Platform ini dilengkapi dengan kurikulum lengkap, latihan kode, validasi, dan evaluasi. Dengan menggunakan Muf-Up, Anda dapat mempelajari Python secara mandiri dan memantapkan kemampuan Anda dalam waktu yang singkat.

## Cara Menjalankan

Anda dapat menjalankan proyek ini secara lokal menggunakan Node.js secara langsung atau menggunakan Docker.

### Opsi 1: Menggunakan Docker (Direkomendasikan)

**Prasyarat:** Docker & Docker Compose

1.  Salin file `.env.example` menjadi `.env`:
    ```bash
    cp .env.example .env
    ```
2.  Edit file `.env` jika diperlukan.
3.  Jalankan container:
    ```bash
    docker-compose up --build
    ```
4.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Opsi 2: Menjalankan Secara Lokal (Node.js)

**Prasyarat:** Node.js (v20+)

1.  Instal dependensi:
    ```bash
    npm install
    ```
2.  Salin file `.env.example` menjadi `.env` (atau `.env.local`):
    ```bash
    cp .env.example .env
    ```
3.  Edit file `.env` jika diperlukan.
4.  Jalankan aplikasi dalam mode pengembangan:
    ```bash
    npm run dev
    ```
5.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Struktur Proyek

- `src/`: Source code aplikasi React.
- `src/constants.ts`: Berisi data kurikulum dan modul pembelajaran.
- `Dockerfile` & `docker-compose.yml`: Konfigurasi containerization.
- `scripts/`: Berbagai script utilitas untuk manajemen konten (seperti `add_quizzes.cjs`).

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran.
