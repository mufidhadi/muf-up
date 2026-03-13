<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Muf-Up: Python Learning Platform

Muf-Up adalah platform pembelajaran Python interaktif yang didukung oleh AI (Gemini).

View your app in AI Studio: [https://ai.studio/apps/3e61ab21-1a2b-4a93-a6e6-4f738bdc1fa0](https://ai.studio/apps/3e61ab21-1a2b-4a93-a6e6-4f738bdc1fa0)

## Cara Menjalankan

Anda dapat menjalankan proyek ini secara lokal menggunakan Node.js secara langsung atau menggunakan Docker.

### Opsi 1: Menggunakan Docker (Direkomendasikan)

**Prasyarat:** Docker & Docker Compose

1.  Salin file `.env.example` menjadi `.env`:
    ```bash
    cp .env.example .env
    ```
2.  Edit file `.env` dan masukkan `GEMINI_API_KEY` Anda.
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
3.  Edit file `.env` dan masukkan `GEMINI_API_KEY` Anda.
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
