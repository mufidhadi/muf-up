import { Curriculum } from './types';

export const CURRICULUM_GROUPS: Curriculum[] = [
  {
    id: 'python',
    title: 'Python',
    description: 'Dasar-dasar pemrograman Python dari nol hingga mahir.',
    modules: [
    {
      id: 'intro',
      title: '1. Pengenalan & Filosofi Python',
      lessons: [
        {
          id: 'what-is-python',
          title: 'Apa itu Python? (Sebuah Pengantar)',
          content: `**Tujuan Pembelajaran:** Memahami sejarah, filosofi, dan kegunaan bahasa pemrograman Python di dunia nyata.

Python diciptakan oleh Guido van Rossum pada tahun 1991 dengan satu filosofi utama: **"Kode lebih sering dibaca daripada ditulis."** Oleh karena itu, sintaks Python dirancang agar sangat mirip dengan bahasa manusia (Bahasa Inggris), membuatnya sangat intuitif bagi pemula maupun profesional.

**Mengapa Python Sangat Populer?**
1. **Keterbacaan Tinggi (Readability):** Python tidak menggunakan tanda kurung kurawal \`{}\` atau titik koma \`;\` yang rumit. Ia menggunakan indentasi (spasi) untuk menstrukturkan kode, memaksa programmer menulis kode yang rapi.
2. **"Batteries Included":** Python datang dengan pustaka standar (standard library) yang sangat besar. Kamu bisa melakukan banyak hal (membaca file, koneksi internet, matematika kompleks) tanpa perlu menginstal tambahan apa pun.
3. **Multi-Paradigma:** Mendukung pemrograman prosedural, berorientasi objek (OOP), maupun fungsional.
4. **Ekosistem Raksasa:** Menjadi standar industri untuk Data Science, Artificial Intelligence (AI), Machine Learning, dan Web Development (Backend).

**Analogi Sederhana:**
Mempelajari Python itu seperti belajar memasak menggunakan resep yang ditulis dengan bahasa sehari-hari, bukan dengan istilah kimia yang rumit. Kamu fokus pada "apa yang ingin dimasak", bukan "bagaimana cara kerja kompornya".`,
          codeExample: '# Filosofi Python (Zen of Python) bisa dilihat dengan menjalankan perintah ini:\n# import this\n\n# Contoh kode sederhana:\nprint("Selamat datang di dunia Python!")'
        },
        {
          id: 'setup',
          title: 'Persiapan Lingkungan Kerja (Environment)',
          content: `**Tujuan Pembelajaran:** Mengetahui alat-alat yang dibutuhkan untuk menulis dan menjalankan kode Python secara profesional.

Untuk menjadi programmer Python yang handal, kamu tidak hanya butuh bahasanya, tapi juga "bengkel" tempat kamu bekerja.

**Komponen Utama:**
1. **Interpreter Python:** Ini adalah mesin utama yang menerjemahkan kodemu menjadi bahasa mesin. Kamu bisa mengunduhnya secara gratis di \`python.org\`.
2. **IDE (Integrated Development Environment) / Code Editor:** Tempat kamu mengetik kode.
   - **VS Code (Visual Studio Code):** Paling populer, ringan, dan gratis. Sangat direkomendasikan.
   - **PyCharm:** IDE khusus Python yang sangat kuat, cocok untuk proyek skala besar.
   - **Jupyter Notebook:** Sangat populer di kalangan Data Scientist karena memungkinkan eksekusi kode per blok beserta visualisasi grafiknya.

**Virtual Environment (Lingkungan Virtual):**
Praktik terbaik (best practice) dalam Python adalah menggunakan *Virtual Environment* (seperti \`venv\` atau \`conda\`). Tujuannya agar pustaka (library) yang kamu instal untuk Proyek A tidak bentrok dengan pustaka di Proyek B. Bayangkan ini seperti memiliki ruang kerja terpisah untuk setiap proyekmu.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Persiapan Lingkungan Kerja (Environment)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'basics',
      title: '2. Dasar-Dasar Pemrograman',
      lessons: [
        {
          id: 'variables',
          title: 'Variabel & Tipe Data (Menyimpan Informasi)',
          content: `**Tujuan Pembelajaran:** Memahami cara komputer menyimpan dan membedakan berbagai jenis informasi.

**Variabel** adalah wadah atau "kotak" di dalam memori komputer yang diberi nama untuk menyimpan data. Di Python, kamu tidak perlu mendeklarasikan tipe data secara eksplisit (Dynamic Typing). Komputer akan otomatis menebaknya.

**Tipe Data Primitif (Dasar):**
1. **String (\`str\`):** Teks. Selalu diapit oleh tanda kutip tunggal (\`'\`) atau ganda (\`"\`).
   - Contoh: \`"Budi"\`, \`'Halo Dunia'\`
2. **Integer (\`int\`):** Bilangan bulat, baik positif maupun negatif, tanpa desimal.
   - Contoh: \`42\`, \`-10\`, \`0\`
3. **Float (\`float\`):** Bilangan pecahan atau desimal. Menggunakan titik (\`.\`) bukan koma.
   - Contoh: \`3.14\`, \`-0.001\`
4. **Boolean (\`bool\`):** Tipe data logika yang hanya memiliki dua nilai: \`True\` (Benar) atau \`False\` (Salah). Sangat penting untuk pengambilan keputusan.

**Aturan Penamaan Variabel (Best Practice):**
- Gunakan huruf kecil dan pisahkan kata dengan garis bawah (disebut *snake_case*). Contoh: \`nama_lengkap\`, \`total_harga\`.
- Harus deskriptif. Jangan gunakan \`x\` atau \`y\`, gunakan \`umur\` atau \`harga\`.`,
          codeExample: '# Contoh deklarasi variabel\nnama_pengguna = "Andi Setiawan"  # String\numur = 25                        # Integer\ntinggi_badan = 175.5             # Float\nstatus_aktif = True              # Boolean\n\n# Menggabungkan teks dan variabel (F-String)\nprint(f"Halo, nama saya {nama_pengguna}, umur {umur} tahun.")'
        },
        {
          id: 'operators',
          title: 'Operator Matematika & Logika',
          content: `**Tujuan Pembelajaran:** Melakukan manipulasi data menggunakan operasi matematika dan perbandingan logika.

Python mendukung berbagai operasi layaknya kalkulator ilmiah, ditambah operasi logika untuk membandingkan nilai.

**1. Operator Aritmatika:**
- \`+\` (Penjumlahan)
- \`-\` (Pengurangan)
- \`*\` (Perkalian)
- \`/\` (Pembagian, hasilnya selalu Float)
- \`//\` (Pembagian Bulat / Floor Division, membuang desimal)
- \`%\` (Modulo / Sisa Bagi, sangat berguna untuk mengecek bilangan ganjil/genap)
- \`**\` (Pangkat)

**2. Operator Perbandingan (Menghasilkan Boolean):**
- \`==\` (Sama dengan) -> Hati-hati, \`=\` untuk mengisi variabel, \`==\` untuk membandingkan!
- \`!=\` (Tidak sama dengan)
- \`>\`, \`<\`, \`>=\`, \`<=\` (Lebih besar, lebih kecil, dll)

**3. Operator Logika:**
Digunakan untuk menggabungkan beberapa kondisi.
- \`and\`: Benar JIKA SEMUA kondisi benar.
- \`or\`: Benar JIKA SALAH SATU kondisi benar.
- \`not\`: Membalikkan nilai (True jadi False, False jadi True).`,
          codeExample: 'a = 10\nb = 3\n\nprint("Pembagian:", a / b)        # 3.333...\nprint("Pembagian Bulat:", a // b) # 3\nprint("Sisa Bagi:", a % b)        # 1\nprint("Pangkat:", a ** b)         # 1000\n\n# Logika\nprint("Apakah a lebih besar dari b?", a > b) # True\nprint("Kondisi gabungan:", (a > 5) and (b < 5)) # True'
        }
      ]
    },
    {
      id: 'control-flow',
      title: '3. Alur Kontrol (Pengambilan Keputusan)',
      lessons: [
        {
          id: 'if-else',
          title: 'Percabangan (If, Elif, Else)',
          content: `**Tujuan Pembelajaran:** Membuat program yang bisa mengambil keputusan berdasarkan kondisi tertentu.

Program yang pintar tidak berjalan lurus dari atas ke bawah; ia bisa memilih jalur yang berbeda tergantung pada situasi. Inilah fungsi percabangan.

**Struktur Logika:**
- **\`if\` (Jika):** Kondisi pertama yang dicek. Jika \`True\`, jalankan blok kodenya.
- **\`elif\` (Else If / Atau Jika):** Kondisi alternatif jika \`if\` sebelumnya \`False\`. Kamu bisa menggunakan banyak \`elif\`.
- **\`else\` (Selain itu):** Jalan terakhir jika semua kondisi \`if\` dan \`elif\` bernilai \`False\`.

**Pentingnya Indentasi:**
Di Python, blok kode yang berada di dalam \`if\` harus menjorok ke dalam (biasanya 4 spasi). Ini bukan sekadar estetika, tapi aturan sintaks mutlak. Jika indentasi salah, program akan error (\`IndentationError\`).`,
          codeExample: 'nilai_ujian = 85\n\nif nilai_ujian >= 90:\n    print("Grade: A - Luar Biasa!")\nelif nilai_ujian >= 80:\n    print("Grade: B - Kerja Bagus!")\nelif nilai_ujian >= 70:\n    print("Grade: C - Cukup.")\nelse:\n    print("Grade: D - Kamu harus belajar lebih giat.")'
        },
        {
          id: 'loops',
          title: 'Perulangan (For & While Loops)',
          content: `**Tujuan Pembelajaran:** Mengotomatisasi tugas yang berulang tanpa harus menulis kode berkali-kali.

Prinsip utama programmer adalah DRY (*Don't Repeat Yourself*). Jika kamu harus mencetak angka 1 sampai 1000, kamu tidak menulis \`print()\` 1000 kali, kamu menggunakan *Loop*.

**1. For Loop (Perulangan Pasti):**
Digunakan ketika kamu tahu persis berapa kali kamu ingin mengulang, atau ketika kamu ingin menelusuri isi sebuah koleksi (seperti List atau String).
- Sering dipasangkan dengan fungsi \`range(start, stop, step)\` untuk menghasilkan urutan angka.

**2. While Loop (Perulangan Bersyarat):**
Digunakan ketika kamu ingin terus mengulang *selama* suatu kondisi masih bernilai \`True\`. Hati-hati dengan *Infinite Loop* (perulangan tanpa henti) jika kondisinya tidak pernah berubah menjadi \`False\`.

**Kontrol Tambahan:**
- \`break\`: Menghentikan perulangan secara paksa dan keluar dari loop.
- \`continue\`: Melewati sisa kode di iterasi saat ini dan langsung lanjut ke iterasi berikutnya.`,
          codeExample: '# Menggunakan For Loop dengan range\nprint("Hitung mundur:")\nfor i in range(5, 0, -1):  # Mulai dari 5, berhenti sebelum 0, langkah -1\n    print(i)\n\n# Menggunakan While Loop dengan break\nprint("\\nMencari angka rahasia:")\nangka = 1\nwhile True:  # Loop ini secara teori berjalan selamanya\n    if angka == 3:\n        print("Angka 3 ditemukan! Berhenti.")\n        break  # Keluar dari loop\n    print(f"Bukan {angka}...")\n    angka += 1'
        }
      ]
    },
    {
      id: 'functions',
      title: '4. Fungsi',
      lessons: [
        {
          id: 'intro-functions',
          title: 'Mengenal Fungsi',
          content: `Fungsi adalah blok kode yang bisa dipanggil kapan saja. Ini membantu agar kode tidak berantakan.`,
          codeExample: 'def sapa(nama):\n    print("Halo " + nama + "!")\n\nsapa("Andi")\nsapa("Siti")'
        },
        {
          id: 'return-values',
          title: 'Nilai Balik (Return)',
          content: `Fungsi bisa mengembalikan hasil perhitungan menggunakan kata kunci \`return\`.`,
          codeExample: 'def tambah(a, b):\n    return a + b\n\nhasil = tambah(5, 3)\nprint(hasil)'
        }
      ]
    },
    {
      id: 'data-structures',
      title: '5. Struktur Data',
      lessons: [
        {
          id: 'lists',
          title: 'List (Daftar)',
          content: `List digunakan untuk menyimpan banyak item dalam satu variabel. Item dalam list bisa diakses menggunakan indeks (mulai dari 0).`,
          codeExample: 'buah = ["Apel", "Jeruk", "Mangga"]\nprint(buah[0])\nbuah.append("Pisang")\nprint(buah)'
        },
        {
          id: 'dictionaries',
          title: 'Dictionary (Kamus)',
          content: `Dictionary menyimpan data dalam pasangan "kunci" dan "nilai" (key-value pairs).`,
          codeExample: 'kontak = {"nama": "Budi", "telp": "0812"}\nprint(kontak["nama"])'
        },
        {
          id: 'tuples-sets',
          title: 'Tuple & Set',
          content: `- **Tuple**: Mirip list tapi tidak bisa diubah (immutable).
- **Set**: Kumpulan item unik tanpa urutan.`,
          codeExample: 'titik = (10, 20)\nangka_unik = {1, 2, 2, 3}\nprint(angka_unik) # Output: {1, 2, 3}'
        }
      ]
    },
    {
      id: 'oop',
      title: '6. Pemrograman Berorientasi Objek (OOP)',
      lessons: [
        {
          id: 'classes-objects',
          title: 'Class & Object',
          content: `OOP adalah cara mengatur kode dengan membayangkan semuanya sebagai "Objek". Class adalah cetakannya, Object adalah hasilnya.`,
          codeExample: 'class Mobil:\n    def __init__(self, merk):\n        self.merk = merk\n\n    def klakson(self):\n        print("Beep beep!")\n\nmobil_saya = Mobil("Toyota")\nprint(mobil_saya.merk)\nmobil_saya.klakson()'
        },
        {
          id: 'inheritance',
          title: 'Pewarisan (Inheritance)',
          content: `Sebuah class bisa mewarisi sifat dari class lain.`,
          codeExample: 'class Hewan:\n    def suara(self):\n        pass\n\nclass Kucing(Hewan):\n    def suara(self):\n        print("Meong!")\n\nmpus = Kucing()\nmpus.suara()'
        }
      ]
    },
    {
      id: 'advanced',
      title: '7. Topik Lanjutan',
      lessons: [
        {
          id: 'error-handling',
          title: 'Penanganan Error (Try Except)',
          content: `Gunakan \`try\` dan \`except\` agar program tidak langsung mati saat terjadi kesalahan.`,
          codeExample: 'try:\n    hasil = 10 / 0\nexcept ZeroDivisionError:\n    print("Tidak bisa membagi dengan nol!")'
        },
        {
          id: 'file-handling',
          title: 'Bekerja dengan File',
          content: `Python bisa membaca dan menulis file di komputer kamu.`,
          codeExample: '# Contoh menulis file\nwith open("test.txt", "w") as f:\n    f.write("Halo Python!")'
        },
        {
          id: 'decorators',
          title: 'Decorator',
          content: `Decorator adalah fungsi yang mengubah perilaku fungsi lain tanpa mengubah kodenya secara langsung. Ini adalah fitur tingkat lanjut yang sering digunakan di framework web.`,
          codeExample: 'def my_decorator(func):\n    def wrapper():\n        print("Sebelum fungsi dijalankan")\n        func()\n        print("Setelah fungsi dijalankan")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()'
        },
        {
          id: 'generators',
          title: 'Generator',
          content: `Generator memungkinkan kamu membuat urutan data secara efisien tanpa memakan banyak memori.`,
          codeExample: 'def hitung_mundur(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor i in hitung_mundur(3):\n    print(i)'
        }
      ]
    },
    {
      id: 'ecosystem',
      title: '8. Ekosistem & Library',
      lessons: [
        {
          id: 'pip-modules',
          title: 'PIP & Modul',
          content: `Kamu bisa menggunakan kode buatan orang lain dengan menginstalnya menggunakan \`pip\`.`,
          codeExample: 'import math\nprint(math.sqrt(16))'
        }
      ]
    },
    {
      id: 'dev-concepts',
      title: '9. Konsep Pengembangan (API, MCP, SDK, dll)',
      lessons: [
        {
          id: 'api-concept',
          title: 'Apa itu API?',
          content: `**API (Application Programming Interface)** adalah "pelayan" yang menghubungkan dua aplikasi berbeda agar bisa saling bicara.
          
Analogi: Kamu (Aplikasi A) memesan makanan ke Pelayan (API), Pelayan membawakan pesananmu ke Dapur (Aplikasi B), lalu Pelayan membawakan makanan kembali kepadamu.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Apa itu API?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'mcp-concept',
          title: 'Apa itu MCP?',
          content: `**MCP (Model Context Protocol)** adalah standar baru yang memungkinkan model AI (seperti Claude atau Gemini) untuk mengakses data dan alat (tools) dari aplikasi lain secara aman dan terstruktur.
          
Ini membantu AI "melihat" filemu, "membaca" databasemu, atau "menjalankan" perintah di komputermu dengan cara yang seragam.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Apa itu MCP?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'sdk-concept',
          title: 'Apa itu SDK?',
          content: `**SDK (Software Development Kit)** adalah "kotak peralatan" lengkap untuk membangun aplikasi di platform tertentu.
          
Isinya biasanya:
- **Library**: Kode yang sudah jadi.
- **Dokumentasi**: Petunjuk penggunaan.
- **Debugger/Tools**: Alat bantu pengembangan.
          
Contoh: Android SDK untuk membuat aplikasi Android.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Apa itu SDK?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'library-framework',
          title: 'Library vs Framework',
          content: `- **Library (Pustaka)**: Koleksi fungsi yang bisa kamu panggil kapan saja. **Kamu yang memegang kendali** (misal: NumPy, Pandas).
- **Framework (Kerangka Kerja)**: Struktur aplikasi yang sudah jadi, di mana kamu tinggal mengisi bagian-bagian tertentu. **Framework yang memegang kendali** (misal: Django, FastAPI).
          
Istilah teknisnya adalah **Inversion of Control** (Pembalikan Kendali).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Library vs Framework" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'data-formats',
      title: '10. Format Data (JSON, YAML, XML, LaTeX)',
      lessons: [
        {
          id: 'json-format',
          title: 'JSON (JavaScript Object Notation)',
          content: `JSON adalah format data paling populer untuk pertukaran data antar aplikasi (API). Strukturnya mirip dengan Dictionary di Python.
          
- **Kelebihan**: Ringan, mudah dibaca manusia dan mesin.`,
          codeExample: 'import json\n\ndata = {"nama": "Andi", "umur": 25}\n# Mengubah ke string JSON\njson_str = json.dumps(data)\n# Membaca string JSON\ndata_back = json.loads(json_str)'
        },
        {
          id: 'yaml-format',
          title: 'YAML (YAML Ain\'t Markup Language)',
          content: `YAML sering digunakan untuk file konfigurasi (seperti di Docker atau Kubernetes). Ia sangat bergantung pada indentasi (seperti Python).
          
- **Kelebihan**: Sangat bersih dan mudah dibaca manusia.`,
          codeExample: '# Contoh YAML\n# nama: Andi\n# umur: 25\n# hobi:\n#   - coding\n#   - gaming'
        },
        {
          id: 'xml-latex',
          title: 'XML & LaTeX',
          content: `- **XML**: Format lama yang menggunakan tag (seperti HTML). Masih banyak digunakan di sistem perbankan dan dokumen lama.
- **LaTeX**: Bahasa markup untuk membuat dokumen ilmiah atau matematika yang rapi. Sangat kuat untuk menulis rumus matematika yang kompleks.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "XML & LaTeX" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'web-networking',
      title: '11. Web & Networking',
      lessons: [
        {
          id: 'http-requests',
          title: 'HTTP Request & cURL',
          content: `Bagaimana aplikasi berkomunikasi di internet? Menggunakan protokol HTTP.
          
- **cURL**: Alat baris perintah (command line) untuk mengirim request ke server.
- **HTTP Methods**: GET (ambil data), POST (kirim data), PUT (update), DELETE (hapus).`,
          codeExample: 'import requests\n\nresponse = requests.get("https://api.github.com")\nprint(response.status_code)\nprint(response.json())'
        },
        {
          id: 'http-streaming-websocket',
          title: 'HTTP Streaming & WebSocket',
          content: `- **HTTP Streaming**: Mengirim data secara terus-menerus tanpa menutup koneksi (cocok untuk log real-time).
- **WebSocket**: Koneksi dua arah (duplex). Server bisa mengirim data ke client kapan saja tanpa diminta (cocok untuk Chat atau Dashboard Saham).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "HTTP Streaming & WebSocket" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'message-brokers',
          title: 'Message Brokers',
          content: `Ketika aplikasi kita sangat besar, kita butuh "perantara" pesan agar antar bagian aplikasi tidak saling menunggu.
          
Contoh: **RabbitMQ**, **Apache Kafka**, **Redis Pub/Sub**.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Message Brokers" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'web-frameworks',
          title: 'Web Server Frameworks',
          content: `Untuk membuat server di Python, kita menggunakan framework:
- **FastAPI**: Modern, sangat cepat, otomatis membuat dokumentasi API.
- **Flask**: Ringan dan fleksibel.
- **Django**: Lengkap ("Batteries included"), cocok untuk proyek raksasa.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Web Server Frameworks" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'database-orm',
      title: '12. Database & ORM',
      lessons: [
        {
          id: 'db-intro',
          title: 'Apa itu Database?',
          content: `**Database** adalah tempat penyimpanan data yang terorganisir agar mudah dicari dan dikelola.
          
Jenis Utama:
- **SQL (Relational)**: Data disimpan dalam tabel yang saling terhubung (seperti Excel yang canggih). Contoh: **PostgreSQL**, **MySQL**, **SQLite**.
- **NoSQL (Non-Relational)**: Data disimpan dalam format fleksibel seperti dokumen (JSON). Contoh: **MongoDB**, **Redis**, **Cassandra**.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Apa itu Database?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'sql-queries',
          title: 'Query & CRUD',
          content: `Untuk bicara dengan database SQL, kita menggunakan bahasa **SQL (Structured Query Language)**.
          
Operasi Dasar (**CRUD**):
- **C**reate: \`INSERT INTO users (nama) VALUES ('Andi');\`
- **R**ead: \`SELECT * FROM users WHERE id = 1;\`
- **U**pdate: \`UPDATE users SET nama = 'Budi' WHERE id = 1;\`
- **D**elete: \`DELETE FROM users WHERE id = 1;\``,
          quiz: {
            question: "Apa poin utama dari materi '" + "Query & CRUD" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'orm-concept',
          title: 'ORM (Object Relational Mapping)',
          content: `**ORM** adalah teknik yang memungkinkan kita mengelola database menggunakan objek Python, tanpa harus menulis SQL manual.
          
Keuntungan:
- Kode lebih bersih dan mudah dibaca.
- Lebih aman dari serangan SQL Injection.
          
Library Populer: **SQLAlchemy**, **Django ORM**, **Peewee**.`,
          codeExample: '# Contoh SQLAlchemy\nuser = session.query(User).filter_by(id=1).first()\nuser.nama = "Budi"\nsession.commit()'
        },
        {
          id: 'migration-seed',
          title: 'Migration & Seed',
          content: `- **Migration**: Sistem "Version Control" untuk struktur database. Jika kamu menambah kolom baru, migration mencatat perubahan itu agar bisa diterapkan di komputer temanmu atau di server.
- **Seed (Seeding)**: Proses mengisi database dengan data awal atau data contoh (dummy data) agar aplikasi bisa langsung dicoba tanpa harus input manual satu per satu.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Migration & Seed" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'modern-python',
      title: '13. Modern Python (Type Hints & Pydantic)',
      lessons: [
        {
          id: 'type-hints',
          title: 'Type Hints (Petunjuk Tipe)',
          content: `Python adalah bahasa yang dinamis, namun di proyek besar, kita sering bingung variabel ini isinya apa. Type Hints membantu kita (dan editor) tahu tipe data apa yang diharapkan.
          
Sintaks Dasar:
\`variable: type = value\`
          
Contoh:
\`nama: str = "Andi"\`
\`umur: int = 25\``,
          codeExample: 'def sapa(nama: str) -> str:\n    return f"Halo {nama}"\n\n# Editor akan memberi tahu jika kita memasukkan angka ke fungsi ini'
        },
        {
          id: 'typing-module',
          title: 'Modul Typing',
          content: `Untuk tipe data yang lebih kompleks seperti List atau Dictionary, kita menggunakan modul \`typing\`.
          
- **List[int]**: Daftar berisi angka bulat.
- **Optional[str]**: Bisa berisi teks atau \`None\`.
- **Dict[str, float]**: Kamus dengan kunci teks dan nilai angka desimal.`,
          codeExample: 'from typing import List, Optional\n\ndef hitung_rata(nilai: List[int]) -> float:\n    return sum(nilai) / len(nilai)'
        },
        {
          id: 'pydantic-intro',
          title: 'Mengenal Pydantic',
          content: `Pydantic adalah library paling populer untuk validasi data di Python. Ia memastikan data yang masuk ke aplikasi kita sesuai dengan format yang kita inginkan.
          
Sangat sering digunakan di:
- **FastAPI**: Untuk validasi request API.
- **LangChain**: Untuk struktur data AI.`,
          codeExample: 'from pydantic import BaseModel\n\nclass User(BaseModel):\n    id: int\n    nama: str\n    email: str'
        },
        {
          id: 'pydantic-validation',
          title: 'Validasi Otomatis',
          content: `Kehebatan Pydantic adalah ia akan otomatis menolak data yang salah tipe atau tidak lengkap, dan memberikan pesan error yang jelas.`,
          codeExample: 'from pydantic import ValidationError\n\ntry:\n    user = User(id="bukan_angka", nama="Andi")\nexcept ValidationError as e:\n    print(e.json())'
        }
      ]
    },
    {
      id: 'best-practices',
      title: '14. Best Practices & Design Principles',
      lessons: [
        {
          id: 'kiss-dry-yagni',
          title: 'KISS, DRY, & YAGNI',
          content: `Tiga prinsip dasar untuk menjaga kode tetap bersih dan mudah dikelola:
          
- **KISS (Keep It Simple, Stupid)**: Jangan membuat solusi yang terlalu rumit jika ada cara yang lebih sederhana. Kode yang simpel lebih mudah diperbaiki dan dipahami orang lain.
- **DRY (Don't Repeat Yourself)**: Jangan menulis kode yang sama berulang kali. Jika ada logika yang dipakai di dua tempat, buatlah menjadi fungsi atau kelas yang bisa digunakan kembali.
- **YAGNI (You Ain't Gonna Need It)**: Jangan menambahkan fitur atau kode "untuk jaga-jaga di masa depan". Tulis hanya apa yang kamu butuhkan sekarang.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "KISS, DRY, & YAGNI" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'solid-principles',
          title: 'SOLID Principles',
          content: `Lima prinsip desain untuk membuat kode berorientasi objek (OOP) lebih fleksibel dan mudah dipelihara:
          
1. **S**ingle Responsibility: Satu kelas hanya boleh punya satu tanggung jawab.
2. **O**pen/Closed: Kode harus terbuka untuk ditambah fiturnya, tapi tertutup untuk diubah kode aslinya.
3. **L**iskov Substitution: Objek anak harus bisa menggantikan objek induk tanpa merusak program.
4. **I**nterface Segregation: Jangan memaksa kelas mengimplementasikan fungsi yang tidak mereka butuhkan.
5. **D**ependency Inversion: Bergantunglah pada abstraksi, bukan pada implementasi detail.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "SOLID Principles" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'tdd-concept',
          title: 'TDD (Test Driven Development)',
          content: `**TDD** adalah metode pengembangan di mana kamu **menulis tes dulu sebelum menulis kode**.
          
Siklus TDD (Red-Green-Refactor):
1. **Red**: Tulis tes yang pasti gagal (karena kodenya belum ada).
2. **Green**: Tulis kode seminimal mungkin agar tes tersebut berhasil.
3. **Refactor**: Rapikan kode tanpa merusak hasil tes.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "TDD (Test Driven Development)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'clean-code-python',
          title: 'Clean Code di Python (PEP 8)',
          content: `Di dunia Python, kita punya standar penulisan kode yang disebut **PEP 8**.
          
Beberapa aturannya:
- Gunakan 4 spasi untuk indentasi.
- Nama fungsi/variabel gunakan \`snake_case\`.
- Nama kelas gunakan \`PascalCase\`.
- Maksimal panjang baris adalah 79 karakter.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Clean Code di Python (PEP 8)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'software-testing',
      title: '15. Software Testing & Pytest',
      lessons: [
        {
          id: 'testing-intro',
          title: 'Kenapa Harus Testing?',
          content: `Testing adalah proses memastikan kode kita berjalan sesuai harapan dan tidak rusak saat kita menambah fitur baru.
          
**Test Case**: Skenario spesifik untuk menguji satu fungsi (Input -> Proses -> Ekspektasi Output).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Kenapa Harus Testing?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'testing-levels',
          title: 'Level Testing (Unit, Integration, E2E)',
          content: `- **Unit Test**: Menguji bagian terkecil kode (misal: satu fungsi) secara terisolasi.
- **Integration Test**: Menguji bagaimana beberapa bagian kode bekerja sama.
- **End-to-End (E2E) Test**: Menguji seluruh aliran aplikasi dari sudut pandang pengguna (misal: dari login sampai checkout).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Level Testing (Unit, Integration, E2E)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'specialized-testing',
          title: 'Smoke, Regression, & Validation',
          content: `- **Smoke Test**: Tes cepat untuk memastikan fungsi paling kritis aplikasi tidak mati total.
- **Regression Test**: Memastikan fitur lama tidak rusak setelah ada perubahan kode baru.
- **Validation Test**: Memastikan produk akhir memenuhi kebutuhan bisnis/pengguna.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Smoke, Regression, & Validation" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'pytest-intro',
          title: 'Mengenal Pytest',
          content: `**Pytest** adalah framework testing paling populer di Python. Ia sangat mudah digunakan dan memiliki fitur canggih seperti "Fixtures" dan "Parameterization".`,
          codeExample: '# Instalasi: pip install pytest\n\ndef tambah(a, b):\n    return a + b\n\ndef test_tambah():\n    assert tambah(1, 2) == 3'
        },
        {
          id: 'pytest-advanced',
          title: 'Fitur Canggih Pytest',
          content: `- **Fixtures**: Menyiapkan data atau kondisi sebelum tes dijalankan (misal: koneksi database).
- **Markers**: Mengelompokkan tes (misal: @pytest.mark.slow).
- **Parametrize**: Menjalankan satu tes dengan banyak variasi data input.`,
          codeExample: 'import pytest\n\n@pytest.mark.parametrize("a,b,hasil", [(1,2,3), (4,5,9)])\ndef test_tambah_banyak(a, b, hasil):\n    assert a + b == hasil'
        }
      ]
    },
    {
      id: 'profiling-optimization',
      title: '16. Profiling & Optimasi Kode',
      lessons: [
        {
          id: 'profiling-intro',
          title: 'Apa itu Profiling?',
          content: `**Profiling** adalah proses mengukur performa kodemu untuk mencari bagian mana yang paling lambat atau memakan paling banyak memori.
          
"Jangan menebak di mana letak kelambatan, ukurlah!"
          
Tool Profiling:
- **cProfile**: Tool bawaan Python untuk mengukur waktu eksekusi fungsi.
- **memory_profiler**: Untuk melihat penggunaan RAM per baris kode.`,
          codeExample: 'import cProfile\n\ndef fungsi_berat():\n    # ... kode ...\n\ncProfile.run("fungsi_berat()")'
        },
        {
          id: 'optimization-tips',
          title: 'Tips Optimasi Kode',
          content: `Setelah tahu bagian yang lambat, kamu bisa melakukan optimasi:
- **Vectorization**: Gunakan NumPy/Pandas daripada loop \`for\` manual (bisa 100x lebih cepat).
- **Caching**: Simpan hasil perhitungan berat agar tidak dihitung ulang (\`@lru_cache\`).
- **Generator**: Gunakan generator untuk mengolah data besar tanpa memakan banyak RAM.`,
          codeExample: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef hitung_berat(n):\n    # ... hasil disimpan di memori ...'
        },
        {
          id: 'premature-optimization',
          title: 'Bahaya Premature Optimization',
          content: `"Premature optimization is the root of all evil." - Donald Knuth.
          
Artinya: Jangan mengoptimasi kode sebelum kamu yakin kode itu benar-benar lambat dan mengganggu. Fokuslah pada kejelasan kode terlebih dahulu, baru optimasi jika diperlukan.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Bahaya Premature Optimization" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    }
  ]
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Pengolahan data, matematika, dan pipeline data.',
    modules: [
    {
      id: 'ai-math-data',
      title: '17. Data Science & Math (NumPy, Pandas)',
      lessons: [
        {
          id: 'numpy-basics',
          title: 'NumPy: Komputasi Numerik',
          content: `NumPy adalah fondasi dari hampir semua library AI di Python. Ia memungkinkan kita bekerja dengan Array (matriks) secara sangat cepat.`,
          codeExample: 'import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr * 2)'
        },
        {
          id: 'pandas-basics',
          title: 'Pandas: Analisis Data Dasar',
          content: `Pandas digunakan untuk mengolah data dalam bentuk tabel (DataFrame), mirip seperti Excel tapi dalam kode.`,
          codeExample: 'import pandas as pd\ndata = {"Nama": ["AI", "Bot"], "Skor": [95, 80]}\ndf = pd.DataFrame(data)\nprint(df)'
        }
      ]
    },
    {
      id: 'data-visualization',
      title: '18. Data Visualization & Matplotlib',
      lessons: [
        {
          id: 'viz-intro',
          title: 'Kenapa Visualisasi Data?',
          content: `Visualisasi data adalah seni mengubah angka mentah menjadi grafik yang mudah dimengerti. "Satu gambar bermakna seribu kata."
          
Manfaat:
- **Menemukan Pola**: Melihat tren kenaikan atau penurunan dengan cepat.
- **Mendeteksi Outlier**: Menemukan data yang aneh atau salah input.
- **Komunikasi**: Membantu orang lain (seperti bos atau klien) memahami hasil analisis kita.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Kenapa Visualisasi Data?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'matplotlib-basics',
          title: 'Mengenal Matplotlib',
          content: `**Matplotlib** adalah library visualisasi paling dasar dan populer di Python. Ia memberikan kontrol penuh atas setiap elemen grafik.
          
Komponen Utama:
- **Figure**: Kanvas tempat kita menggambar.
- **Axes**: Area grafik di dalam kanvas (sumbu X dan Y).`,
          codeExample: 'import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4]\ny = [10, 20, 25, 30]\n\nplt.plot(x, y)\nplt.title("Grafik Garis Sederhana")\nplt.show()'
        },
        {
          id: 'chart-types',
          title: 'Jenis-Jenis Grafik Utama',
          content: `Setiap data butuh jenis grafik yang berbeda:
- **Line Plot**: Untuk tren waktu (misal: harga saham).
- **Bar Chart**: Untuk membandingkan kategori (misal: jumlah penjualan per produk).
- **Scatter Plot**: Untuk melihat hubungan dua variabel (misal: tinggi badan vs berat badan).
- **Histogram**: Untuk melihat distribusi data (misal: sebaran umur penduduk).`,
          codeExample: 'plt.bar(["A", "B", "C"], [5, 12, 8])\nplt.scatter([1, 2, 3], [10, 15, 13])'
        },
        {
          id: 'customizing-plots',
          title: 'Kustomisasi Grafik',
          content: `Agar grafik lebih profesional, kita bisa menambahkan:
- **Labels**: Nama sumbu X dan Y.
- **Legend**: Keterangan warna/garis.
- **Grid**: Garis bantu.
- **Colors & Styles**: Mengubah warna dan jenis garis.`,
          codeExample: 'plt.plot(x, y, color="red", linestyle="--", marker="o")\nplt.xlabel("Waktu")\nplt.ylabel("Nilai")\nplt.grid(True)'
        }
      ]
    },
    {
      id: 'data-engineering',
      title: '19. Data Engineering (ETL & Pipeline)',
      lessons: [
        {
          id: 'de-intro',
          title: 'Apa itu Data Engineering?',
          content: `Data Engineering adalah proses merancang, membangun, dan memelihara sistem yang mengumpulkan, menyimpan, dan memproses data dalam skala besar.
          
Perbedaan:
- **Data Engineer**: Membangun "pipa" data (infrastruktur).
- **Data Scientist**: Menganalisis data dari pipa tersebut untuk mencari wawasan.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Apa itu Data Engineering?" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'pandas-advanced',
          title: 'Pandas Lanjutan',
          content: `**Pandas** adalah library paling populer di Python untuk manipulasi dan analisis data. Ia memperkenalkan struktur data **DataFrame** yang mirip seperti tabel Excel.
          
Kegunaan Utama:
- Membaca file CSV, Excel, JSON, dan SQL.
- Membersihkan data (menangani data kosong/hilang).
- Melakukan filter, sorting, dan grouping data dengan sangat cepat.`,
          codeExample: 'import pandas as pd\n\ndf = pd.read_csv("data.csv")\n# Filter data\ndf_filtered = df[df["umur"] > 20]\n# Grouping\ndf_grouped = df.groupby("kota").mean()'
        },
        {
          id: 'etl-elt-pipelines',
          title: 'ETL & ELT Pipelines',
          content: `Proses memindahkan data dari sumber ke tempat penyimpanan.
          
- **Extract**: Mengambil data dari sumber (API, Database, File).
- **Transform**: Membersihkan dan mengubah format data.
- **Load**: Memasukkan data ke Data Warehouse.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "ETL & ELT Pipelines" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'data-modeling',
          title: 'Data Modeling & Databases',
          content: `Dasar dari penyimpanan data.
          
Konsep Utama:
- **SQL vs NoSQL**: Memilih database yang tepat untuk jenis data tertentu.
- **OLTP vs OLAP**: Database untuk transaksi harian vs database untuk analisis (Data Warehouse).
- **Star & Snowflake Schema**: Cara menyusun tabel agar analisis data menjadi sangat cepat.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Data Modeling & Databases" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'big-data-tech',
          title: 'Big Data & Distributed Computing',
          content: `Ketika data terlalu besar untuk satu komputer, kita butuh sistem terdistribusi.
          
Teknologi Populer:
- **Apache Spark**: Pemrosesan data super cepat di memori.
- **Apache Kafka**: Menangani aliran data (streaming) secara real-time.
- **Hadoop**: Penyimpanan data terdistribusi (HDFS).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Big Data & Distributed Computing" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'data-orchestration',
          title: 'Data Orchestration (Airflow)',
          content: `Bagaimana cara menjalankan ribuan pipa data secara otomatis dan terjadwal? Kita butuh Orchestrator.
          
**Apache Airflow** adalah standar industri untuk ini. Ia menggunakan kode Python (DAG) untuk mengatur alur kerja data yang kompleks.`,
          codeExample: '# Airflow DAG: Task A -> Task B -> Task C'
        },
        {
          id: 'data-warehouse-lake',
          title: 'Data Warehouse vs Data Lake',
          content: `- **Data Warehouse**: Data terstruktur dan siap pakai (contoh: BigQuery, Redshift).
- **Data Lake**: Tempat menyimpan segala jenis data (mentah, gambar, teks) dalam skala raksasa (contoh: AWS S3, Google Cloud Storage).
- **Data Lakehouse**: Gabungan keduanya (contoh: Databricks).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Data Warehouse vs Data Lake" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'data-prep-feature-eng',
      title: '20. Data Preparation & Feature Engineering',
      lessons: [
        {
          id: 'data-cleaning',
          title: 'Data Cleaning (Pembersihan Data)',
          content: `Data mentah seringkali "kotor". Pembersihan data adalah langkah paling memakan waktu namun paling krusial.
          
Langkah Utama:
- **Handling Missing Values**: Menghapus atau mengisi data yang kosong (Imputation).
- **Removing Duplicates**: Menghapus data ganda yang bisa merusak model.
- **Outlier Detection**: Menangani nilai ekstrem yang tidak masuk akal (misal: umur 500 tahun).
- **Data Consistency**: Memastikan format data seragam (misal: "Jakarta" vs "jakarta").`,
          codeExample: '# Pandas: df.dropna(), df.fillna(), df.drop_duplicates()'
        },
        {
          id: 'feature-scaling',
          title: 'Feature Scaling (Penyekalaan)',
          content: `Banyak algoritma AI sensitif terhadap perbedaan skala angka (misal: Gaji jutaan vs Umur puluhan).
          
- **Normalization (Min-Max)**: Mengubah angka ke rentang 0 sampai 1.
- **Standardization (Z-Score)**: Mengubah angka agar memiliki rata-rata 0 dan standar deviasi 1.`,
          codeExample: 'from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\n# scaled_data = scaler.fit_transform(data)'
        },
        {
          id: 'categorical-encoding',
          title: 'Categorical Encoding',
          content: `Komputer hanya mengerti angka. Kita harus mengubah teks (kategori) menjadi angka.
          
- **One-Hot Encoding**: Membuat kolom baru untuk setiap kategori (0 atau 1). Cocok untuk data tanpa urutan (misal: Warna).
- **Label Encoding**: Memberi angka urut (0, 1, 2). Cocok untuk data berurutan (misal: SD, SMP, SMA).`,
          codeExample: 'import pandas as pd\n# pd.get_dummies(df, columns=["Warna"])'
        },
        {
          id: 'feature-engineering-detail',
          title: 'Seni Feature Engineering',
          content: `Proses menciptakan fitur baru dari data yang ada untuk membantu model belajar lebih baik.
          
Contoh:
- **Date Extraction**: Mengubah tanggal menjadi "Hari dalam seminggu" atau "Apakah hari libur?".
- **Binning**: Mengelompokkan umur menjadi "Anak", "Remaja", "Dewasa".
- **Interaction Features**: Mengalikan dua fitur (misal: Luas Tanah * Harga per Meter).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Seni Feature Engineering" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'feature-selection',
          title: 'Feature Selection (Pemilihan Fitur)',
          content: `Tidak semua data itu penting. Memilih fitur yang paling berpengaruh bisa mempercepat model dan mencegah "Overfitting".
          
Teknik:
- **Correlation Matrix**: Melihat hubungan antar variabel.
- **Feature Importance**: Menggunakan model (seperti Random Forest) untuk melihat fitur mana yang paling banyak membantu prediksi.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Feature Selection (Pemilihan Fitur)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    }
  ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Machine Learning, Deep Learning, dan AI Engineering.',
    modules: [
    {
      id: 'machine-learning',
      title: '21. Machine Learning',
      lessons: [
        {
          id: 'ml-intro',
          title: 'Apa itu Machine Learning?',
          content: `Machine Learning (ML) adalah teknik di mana komputer belajar dari pola data tanpa diprogram secara eksplisit.
          
Tipe ML:
- **Supervised**: Belajar dari data berlabel (contoh: prediksi harga rumah).
- **Unsupervised**: Mencari pola tersembunyi (contoh: pengelompokan pelanggan).`,
          codeExample: '# Contoh sederhana Linear Regression dengan Scikit-Learn\n# (Simulasi konsep)\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression()'
        },
        {
          id: 'classification-deep-dive',
          title: 'Klasifikasi (Classification)',
          content: `Klasifikasi adalah tugas memprediksi "Kategori" atau "Label" dari suatu data.
          
Contoh:
- Email: Spam atau Bukan Spam?
- Gambar: Kucing atau Anjing?
- Penyakit: Positif atau Negatif?
          
Algoritma Populer: Logistic Regression, Decision Trees, Random Forest, dan SVM.`,
          codeExample: 'from sklearn.ensemble import RandomForestClassifier\nclf = RandomForestClassifier()\n# clf.fit(X_train, y_train)'
        },
        {
          id: 'scikit-learn',
          title: 'Scikit-Learn Dasar',
          content: `Library paling populer untuk ML tradisional. Kamu bisa melakukan klasifikasi, regresi, dan clustering dengan mudah.`,
          codeExample: 'from sklearn.model_selection import train_test_split\n# Membagi data menjadi data latih dan data uji'
        }
      ]
    },
    {
      id: 'deep-learning',
      title: '22. Deep Learning & Neural Networks',
      lessons: [
        {
          id: 'neural-networks-theory',
          title: 'Teori Jaringan Saraf',
          content: `Jaringan Saraf Tiruan (ANN) meniru cara otak bekerja dengan lapisan input, tersembunyi, dan output.
          
Komponen Utama:
- **Neuron**: Unit pemrosesan dasar.
- **Weights & Biases**: Parameter yang dipelajari model.
- **Activation Functions**: Menentukan apakah neuron harus "aktif" (contoh: ReLU, Sigmoid).`,
          codeExample: '# Konsep dasar neuron: output = activation(dot(input, weight) + bias)'
        },
        {
          id: 'backpropagation',
          title: 'Backpropagation & Gradient Descent',
          content: `Ini adalah "mesin" di balik pembelajaran AI. 
- **Loss Function**: Mengukur seberapa salah prediksi AI.
- **Optimizer**: Mengubah weights untuk memperkecil kesalahan (Loss).
- **Backpropagation**: Menghitung kontribusi setiap neuron terhadap kesalahan.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Backpropagation & Gradient Descent" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'computer-vision',
      title: '23. Computer Vision (Visi Komputer)',
      lessons: [
        {
          id: 'cv-intro',
          title: 'Bagaimana Komputer Melihat?',
          content: `Gambar bagi komputer hanyalah kumpulan angka (piksel). Computer Vision bertujuan untuk memahami makna di balik piksel tersebut.`,
          codeExample: 'import cv2\n# img = cv2.imread("gambar.jpg")\n# print(img.shape) # (Tinggi, Lebar, Saluran Warna)'
        },
        {
          id: 'cnn-theory',
          title: 'Convolutional Neural Networks (CNN)',
          content: `CNN adalah jenis arsitektur AI khusus untuk gambar. Ia menggunakan "Filter" untuk mendeteksi fitur seperti garis, bentuk, hingga wajah.
          
Lapisan CNN:
- **Convolution**: Ekstraksi fitur.
- **Pooling**: Mengurangi ukuran data agar lebih efisien.
- **Fully Connected**: Klasifikasi akhir.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Convolutional Neural Networks (CNN)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'object-detection',
          title: 'Deteksi Objek & YOLO',
          content: `Bukan hanya mengklasifikasi gambar, tapi juga menemukan di mana objek berada. YOLO (You Only Look Once) adalah algoritma tercepat untuk tugas ini.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Deteksi Objek & YOLO" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'ai-lifecycle-image',
      title: '24. AI Lifecycle & Image Processing',
      lessons: [
        {
          id: 'ai-lifecycle',
          title: 'Siklus Hidup AI (Training - Inference)',
          content: `Membangun AI bukan hanya soal "coding", tapi soal alur data:
          
1. **Pre-processing**: Membersihkan dan menyiapkan data mentah agar siap dipelajari.
2. **Training**: Proses model "belajar" dari data (membutuhkan GPU/Waktu lama).
3. **Inference**: Menggunakan model yang sudah jadi untuk menebak data baru (proses cepat).
4. **Post-processing**: Mengolah hasil tebakan AI agar lebih berguna bagi manusia (misal: membulatkan angka atau menerjemahkan kode ke teks).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Siklus Hidup AI (Training - Inference)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'image-manipulation',
          title: 'Image Manipulation (Pengolahan Gambar)',
          content: `Dalam AI visi komputer, kita sering memanipulasi gambar sebelum dimasukkan ke model.
          
Teknik Dasar:
- **Resizing**: Mengubah ukuran gambar.
- **Grayscale**: Mengubah ke hitam putih.
- **Augmentation**: Memutar, membalik, atau memburamkan gambar agar model lebih pintar.
          
Library Populer: **OpenCV (cv2)**, **Pillow (PIL)**.`,
          codeExample: 'from PIL import Image\n\n# img = Image.open("foto.jpg")\n# img_resized = img.resize((224, 224))\n# img_gray = img.convert("L")'
        }
      ]
    },
    {
      id: 'gen-ai',
      title: '25. Generative AI & LLM',
      lessons: [
        {
          id: 'llm-intro',
          title: 'Large Language Models (LLM)',
          content: `LLM seperti Gemini atau GPT adalah model raksasa yang dilatih dengan hampir seluruh teks di internet. Sebagai AI Engineer, kamu akan sering berinteraksi dengan model ini melalui API.`,
          codeExample: '# Contoh integrasi Gemini API\n# response = ai.models.generateContent("Halo!")'
        },
        {
          id: 'prompt-engineering',
          title: 'Prompt Engineering',
          content: `Seni memberikan instruksi yang tepat kepada AI agar mendapatkan hasil terbaik. Teknik seperti "Few-shot prompting" atau "Chain of Thought" sangat krusial.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Prompt Engineering" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'rag-concept',
          title: 'RAG (Retrieval Augmented Generation)',
          content: `Teknik memberikan pengetahuan tambahan kepada AI dari dokumen pribadi kamu tanpa harus melatih ulang modelnya.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "RAG (Retrieval Augmented Generation)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'diffusion-models',
          title: 'Diffusion Models (Image Gen)',
          content: `Teknik di balik pembuatan gambar seperti Midjourney atau Stable Diffusion. AI belajar dengan cara "membersihkan" gambar yang penuh dengan noise (bintik-bintik) hingga menjadi gambar yang jelas sesuai instruksi teks.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Diffusion Models (Image Gen)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'fine-tuning-llm',
          title: 'Fine-tuning LLM',
          content: `Proses melatih ulang LLM yang sudah pintar dengan data spesifik agar ia menjadi ahli di bidang tertentu (misal: menjadi AI khusus hukum atau medis).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Fine-tuning LLM" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'ai-agents',
          title: 'AI Agents & Tool Use',
          content: `Masa depan AI bukan hanya menjawab pertanyaan, tapi melakukan tindakan. AI Agent bisa menggunakan "Tools" (seperti kalkulator, browser, atau database) untuk menyelesaikan tugas yang kompleks secara mandiri.`,
          codeExample: '# Agent: "Tolong pesankan tiket pesawat ke Bali"\n# Agent akan mencari jadwal, membandingkan harga, dan melakukan booking.'
        }
      ]
    },
    {
      id: 'embeddings',
      title: '26. Vector Embeddings',
      lessons: [
        {
          id: 'text-embeddings',
          title: 'Text Embeddings',
          content: `Text Embedding adalah proses mengubah teks menjadi deretan angka (vektor) yang mewakili makna kata tersebut. Kata-kata dengan makna mirip akan memiliki posisi vektor yang berdekatan.
          
Kegunaan:
- **Pencarian Semantik**: Mencari berdasarkan makna, bukan hanya kata kunci.
- **RAG**: Memberikan konteks dokumen ke LLM.
- **Klasifikasi Teks**: Mengelompokkan dokumen secara otomatis.`,
          codeExample: '# Contoh: "Kucing" dan "Anak Kucing" akan punya vektor yang sangat mirip'
        },
        {
          id: 'image-embeddings',
          title: 'Image Embeddings',
          content: `Mirip dengan teks, Image Embedding mengubah gambar menjadi vektor. Ini memungkinkan komputer untuk "membandingkan" kemiripan visual antar gambar.`,
          codeExample: '# Digunakan untuk: Pencarian gambar serupa, deteksi duplikat, dll.'
        },
        {
          id: 'multimodal-embeddings',
          title: 'Multimodal Embeddings (CLIP)',
          content: `Teknik canggih di mana teks dan gambar dipetakan ke dalam ruang vektor yang sama. Ini memungkinkan kita mencari gambar hanya dengan mengetikkan deskripsi teks (Text-to-Image Search).`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Multimodal Embeddings (CLIP)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'vector-databases',
          title: 'Vector Databases',
          content: `Tempat khusus untuk menyimpan dan mencari jutaan vektor embedding dengan sangat cepat. Contoh populer: Pinecone, Milvus, Weaviate, dan ChromaDB.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Vector Databases" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'reinforcement-learning',
      title: '27. Reinforcement Learning (RL)',
      lessons: [
        {
          id: 'rl-basics',
          title: 'Belajar dari Hadiah (Rewards)',
          content: `RL adalah cara melatih AI melalui sistem "Reward" (hadiah) dan "Punishment" (hukuman), mirip seperti melatih hewan peliharaan.
          
Elemen RL:
- **Agent**: Si AI yang belajar.
- **Environment**: Dunia tempat AI berada.
- **Action**: Apa yang dilakukan AI.
- **State**: Kondisi AI saat ini.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Belajar dari Hadiah (Rewards)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'mdp-intro',
          title: 'Markov Decision Process (MDP)',
          content: `MDP adalah kerangka matematika untuk memodelkan pengambilan keputusan di mana hasilnya sebagian acak dan sebagian di bawah kendali pembuat keputusan (Agent).
          
Komponen MDP:
- **S (States)**: Himpunan semua kondisi yang mungkin.
- **A (Actions)**: Himpunan semua tindakan yang bisa diambil.
- **P (Transition Probability)**: Peluang berpindah dari satu state ke state lain setelah mengambil tindakan tertentu.
- **R (Rewards)**: Hadiah yang diterima setelah transisi.
- **γ (Discount Factor)**: Menentukan seberapa penting hadiah di masa depan dibanding hadiah saat ini.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Markov Decision Process (MDP)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'q-learning',
          title: 'Q-Learning & Eksplorasi',
          content: `AI mencoba berbagai tindakan untuk menemukan strategi terbaik (Policy) yang memaksimalkan total hadiah dalam jangka panjang.`,
          codeExample: '# Q-Table: Menyimpan nilai "kebaikan" setiap tindakan di setiap kondisi'
        },
        {
          id: 'rl-applications',
          title: 'Aplikasi RL',
          content: `RL digunakan untuk:
- Melatih AI bermain game (AlphaGo).
- Robotika (berjalan, memegang barang).
- Sistem rekomendasi yang adaptif.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Aplikasi RL" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'ppo-theory',
          title: 'PPO (Proximal Policy Optimization)',
          content: `PPO adalah algoritma RL yang sangat populer karena stabil dan mudah digunakan. Ia memastikan perubahan pada strategi (policy) tidak terlalu drastis agar proses belajar tetap lancar.`,
          codeExample: '# Konsep: Membatasi perubahan policy dengan fungsi "Clipping"'
        },
        {
          id: 'marl-intro',
          title: 'MARL (Multi-Agent RL)',
          content: `MARL adalah cabang RL di mana banyak AI belajar bersama dalam satu dunia. Mereka bisa bekerja sama (kooperatif) atau saling bersaing (kompetitif).
          
Tantangan MARL:
- **Non-stationarity**: Dunia berubah karena AI lain juga belajar.
- **Scalability**: Semakin banyak AI, semakin sulit koordinasinya.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "MARL (Multi-Agent RL)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    },
    {
      id: 'forecasting',
      title: '28. Time Series & Forecasting',
      lessons: [
        {
          id: 'time-series-intro',
          title: 'Mengenal Time Series',
          content: `Time Series adalah data yang dikumpulkan secara berurutan berdasarkan waktu.
          
Contoh:
- Harga saham harian.
- Suhu udara setiap jam.
- Penjualan bulanan toko.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Mengenal Time Series" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'forecasting-basics',
          title: 'Forecasting (Peramalan)',
          content: `Forecasting adalah proses memprediksi nilai di masa depan berdasarkan data masa lalu.
          
Metode:
- **Statistik**: ARIMA, Exponential Smoothing.
- **ML**: Prophet (oleh Meta), XGBoost.
- **Deep Learning**: LSTM, GRU, Transformer.`,
          codeExample: '# Contoh: Memprediksi penjualan bulan depan berdasarkan data 2 tahun terakhir'
        }
      ]
    },
    {
      id: 'model-optimization',
      title: '29. Model Optimization & Efficiency',
      lessons: [
        {
          id: 'quantization',
          title: 'Quantization (Kuantisasi)',
          content: `Kuantisasi adalah proses mengurangi presisi angka dalam model (misal dari 32-bit ke 8-bit). Ini membuat model jauh lebih kecil dan cepat tanpa banyak mengurangi akurasi.
          
Tipe Kuantisasi:
- **PTQ (Post-Training Quantization)**: Dilakukan setelah model selesai dilatih.
- **QAT (Quantization-Aware Training)**: Model dilatih sambil mensimulasikan efek kuantisasi.`,
          codeExample: '# Contoh: Mengubah model ke format INT8 untuk dijalankan di HP'
        },
        {
          id: 'knowledge-distillation',
          title: 'Knowledge Distillation (Distilasi)',
          content: `Teknik melatih model kecil (Student) untuk meniru perilaku model besar yang sudah pintar (Teacher). Hasilnya adalah model ringan yang punya kecerdasan mendekati model raksasa.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Knowledge Distillation (Distilasi)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'pruning',
          title: 'Pruning (Pemangkasan)',
          content: `Membuang koneksi antar neuron yang tidak penting atau jarang digunakan. Mirip seperti memangkas dahan pohon yang layu agar pohon tetap sehat dan ringan.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Pruning (Pemangkasan)" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'peft-lora',
          title: 'PEFT & LoRA',
          content: `**Parameter-Efficient Fine-Tuning (PEFT)** memungkinkan kita melatih ulang model raksasa (seperti LLM) hanya dengan mengubah sedikit sekali parameter. **LoRA** adalah teknik paling populer untuk ini.`,
          codeExample: '# LoRA: Menambahkan matriks kecil di samping lapisan asli model'
        }
      ]
    },
    {
      id: 'ai-engineering',
      title: '30. AI Engineering Workflow (MLOps & Ethics)',
      lessons: [
        {
          id: 'mlops',
          title: 'MLOps & Deployment',
          content: `Membuat model hanyalah 20% dari pekerjaan. 80% sisanya adalah bagaimana menjalankan model tersebut di server agar bisa dipakai jutaan orang secara stabil.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "MLOps & Deployment" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        },
        {
          id: 'ethics-ai',
          title: 'Etika & Keamanan AI',
          content: `Sebagai AI Engineer, kamu harus memastikan AI yang kamu buat tidak bias, aman dari serangan (prompt injection), dan menghormati privasi data.`,
          quiz: {
            question: "Apa poin utama dari materi '" + "Etika & Keamanan AI" + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },
        }
      ]
    }
  ]
  }
];
