# Kurikulum Standar Pemrograman Python (Edisi 2025)

Dokumen ini berisi standar materi pembelajaran Python yang disusun berdasarkan kebutuhan industri tahun 2025. Kurikulum ini menekankan pada penggunaan tool modern (Modern Tooling), integrasi AI, dan performa tinggi (High-performance).

---

## 🟢 Fase 1: Fondasi (Bulan 1–2)
**Goal:** Menguasai sintaksis dan cara berpikir "Pythonic".

1.  **Sintaksis Inti:**
    *   Variabel, Tipe Data (String, Integer, Float, Boolean).
    *   Type Casting & Type Hinting Dasar.
2.  **Control Flow:**
    *   `if / elif / else`.
    *   Perulangan: `for` loops, `while` loops.
    *   Struktur Kontrol Baru: `match-case` (Python 3.10+).
3.  **Struktur Data:**
    *   List, Dictionary, Tuple, dan Set.
    *   Teknik List Comprehension (Wajib untuk efisiensi).
4.  **Fungsi:**
    *   Argumen: `*args` dan `**kwargs`.
    *   Lambda Functions.
    *   Docstrings (PEP 257).
5.  **Standar Industri:**
    *   Adopsi **PEP 8** (Style Guide).
    *   Penggunaan **Indentasi 4 Spasi** (Bukan Tab).

---

## 🟡 Fase 2: Intermediate & Modern Ecosystem (Bulan 3–4)
**Goal:** Menulis kode yang maintainable dan selevel dengan standar profesional.

1.  **Object-Oriented Programming (OOP):**
    *   Class & Object, Inheritance, Mixins.
    *   **Dataclasses**: Standar modern untuk struktur data (lebih baik dari dict).
2.  **Error Handling:**
    *   `try / except / finally`.
    *   Custom Exception Classes.
3.  **Functional Tools:**
    *   Iterators & Generators (`yield`).
    *   Decorators (untuk cross-cutting concerns).
4.  **Modern Tooling (Standar 2025):**
    *   **Package Manager:** Menggunakan **`uv`** (sangat cepat, pengganti pip/poetry).
    *   **Linter & Formatter:** Menggunakan **`Ruff`** (standar baru industri untuk kecepatan).
    *   **Static Typing:** Menggunakan `mypy` atau `pyright`.
5.  **Environment Management:**
    *   Virtual Environment (`uv venv` atau `venv`).
    *   Manajemen Secrets: `.env` files & `python-dotenv`.

---

## 🟠 Fase 3: Advanced & Performance (Bulan 5–6)
**Goal:** Menangani konkurensi tinggi dan arsitektur sistem yang kompleks.

1.  **Asynchronous Programming:**
    *   `asyncio`, `async / await`.
    *   Handling concurrent tasks & event loops.
2.  **Metaprogramming & Advanced Types:**
    *   Context Managers (`with` statement).
    *   Dunder Methods (`__init__`, `__call__`, dll).
    *   Data Validation dengan **Pydantic** (Standar wajib untuk API).
3.  **Software Testing:**
    *   Unit Testing dengan **`pytest`**.
    *   Mocking & Integration Testing.
4.  **Databases & ORM:**
    *   SQL Dasar (PostgreSQL/SQLite).
    *   ORM Modern: **SQLAlchemy** atau **Tortoise-ORM** (untuk async).

---

## 🔴 Fase 4: Spesialisasi (Bulan 7+)
**Pilih jalur berdasarkan permintaan pasar 2025.**

### 1. AI & Data Engineering (Prioritas Tinggi)
*   **AI Orchestration:** **LangChain** atau **LlamaIndex** (untuk aplikasi berbasis LLM).
*   **Data Processing:** NumPy, Pandas, dan **Polars** (alternatif Pandas yang jauh lebih cepat).
*   **Machine Learning:** Scikit-learn, PyTorch, atau TensorFlow.

### 2. Web & API Development
*   **FastAPI:** Pilihan utama untuk API high-performance & async-first.
*   **Django:** Untuk aplikasi enterprise yang membutuhkan fitur lengkap (batteries-included).
*   **Frontend Integration:** React atau HTMX (untuk aplikasi yang berfokus pada Python).

### 3. DevOps & Automation
*   **Containerization:** Docker & Docker Compose.
*   **CI/CD:** GitHub Actions (Automated Linting dengan Ruff & Testing dengan Pytest).
*   **Cloud Deployment:** AWS Lambda / GCP Cloud Run.

---

## 🛠️ Ringkasan Praktik Terbaik (2025)

| ❌ Hindari (Legacy) | ✅ Lakukan (2025 Standard) |
| :--- | :--- |
| `pip install` | **`uv add`** (Lebih cepat & aman) |
| `if x == None:` | `if x is None:` |
| Hardcoding path | Gunakan **`pathlib`** |
| `print()` debugging | Gunakan **`logging`** atau Debugger |
| Manual `f.close()` | Gunakan **`with open(...)`** (Context Managers) |
| Mengabaikan tipe data | Gunakan **Type Hints** |

---
*Dokumen ini disusun untuk mendukung pengembangan kurikulum **muf-up**.*
