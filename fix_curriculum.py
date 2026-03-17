
import re

file_path = r'D:\project\mufid\masmuf_cloud\muf_up\src\curriculum.yaml'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new clean module block
new_module_block = """    - id: database-orm
      title: 12. Database & ORM
      lessons:
      - id: db-intro
        title: Apa itu Database?
        content: |
          # Modul: Database & ORM - Mengenal Gudang Data

          Bayangkan kamu sedang membangun aplikasi media sosial yang meledak populer. Dalam satu malam, ada 10 juta pengguna yang mendaftar. Kamu mencoba menyimpan semua data nama, email, dan kata sandi mereka di dalam sebuah file teks (`.txt`) atau spreadsheet (`.csv`). Saat kamu ingin mencari satu pengguna di baris ke-8 juta untuk memverifikasi loginnya, komputer kamu tiba-tiba macet total. Mengedit satu huruf saja di file raksasa itu membuat laptopmu panas dan hang selama berjam-jam. Inilah mimpi buruk yang terjadi jika kita memaksakan media penyimpanan tradisional untuk menangani data skala besar.

          Database hadir sebagai "Perpustakaan Raksasa" yang dikelola oleh robot super cepat. Di sini, buku-buku tidak ditumpuk acak di lantai, melainkan disusun rapi dalam rak yang terindeks, diberi kategori, dan bisa ditemukan dalam hitungan milidetik. Sistem Database (DBMS) adalah otak yang memastikan data jutaan orang tetap aman, konsisten, dan bisa diakses secepat kilat tanpa merusak performa aplikasimu.

          Setelah menyelesaikan bagian ini, kamu akan mampu **mengkategorikan** perbedaan fundamental antara arsitektur Database SQL dan NoSQL. Kamu juga akan bisa **memutuskan** kapabilitas penyimpanan yang paling tepat berdasarkan jenis data dan kebutuhan integritas aplikasi yang sedang kamu bangun.

          Sebelum menyelam ke dunia data, pastikan kamu sudah:
          * Memahami cara kerja **Variabel** untuk menampung informasi.
          * Mengenal dasar-dasar **File Handling** (membaca dan menulis file).

          ### SQL vs NoSQL: Dua Faksi Besar Dunia Data

          #### 1. SQL (Relational Database): Sang Pengatur yang Rapi
          SQL adalah kelompok "Orang Rapi". Data disimpan dalam bentuk tabel yang kaku dengan baris dan kolom, sangat mirip dengan tabel Excel namun dengan aturan yang jauh lebih ketat. Jika kamu menentukan tabel "User" wajib memiliki kolom "Umur", maka kamu tidak akan bisa menyimpan data pengguna yang umurnya kosong. Struktur ini memastikan integritas data tetap terjaga sempurna, sangat cocok untuk sistem perbankan atau e-commerce.

          ```sql
          -- Di SQL, struktur harus didefinisikan dengan jelas (Schema)
          CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              nama VARCHAR(100),
              saldo DECIMAL(15, 2)
          );
          ```

          Keunggulan utama SQL adalah **ACID Compliance**, sebuah standar keamanan transaksi yang menjamin bahwa jika terjadi kegagalan sistem saat transfer uang, data tidak akan "nyangkut" di tengah jalan. Contoh database populer di faksi ini adalah **PostgreSQL**, **MySQL**, dan **SQLite**. Mereka adalah raja mutlak untuk aplikasi yang mengutamakan keakuratan data di atas segalanya.

          ```sql
          -- Menambahkan data ke tabel yang rapi
          INSERT INTO users (nama, saldo) VALUES ('Andi', 50000.00);
          ```

          #### 2. NoSQL (Non-Relational): Sang Penjelajah yang Bebas
          Berbeda dengan SQL, NoSQL adalah kelompok "Bebas Berekspresi". Datanya tidak berbentuk tabel kaku, melainkan dokumen lentur yang seringkali mirip dengan format JSON. Di sini, User A bisa punya 5 atribut, sementara User B punya 100 atribut, dan database tidak akan protes. Kelenturan ini membuat NoSQL sangat cepat untuk menangani data yang strukturnya sering berubah-ubah atau data dalam jumlah masif yang masuk sangat cepat.

          ```json
          // Representasi data di NoSQL (seperti MongoDB)
          {
            "_id": "user123",
            "nama": "Budi",
            "riwayat_login": ["2023-10-01", "2023-10-02"],
            "metadata_tambahan": { "warna_tema": "gelap" }
          }
          ```

          NoSQL sangat ideal untuk fitur seperti *Chat Log*, *Social Media Feed*, atau data sensor IoT yang masuk ribuan kali per detik. Database seperti **MongoDB** and **Redis** memungkinkan aplikasimu berkembang (scaling) secara horizontal dengan sangat mudah. Namun ingat, kebebasan ini datang dengan risiko; tanpa skema yang ketat, kamu harus lebih berhati-hati dalam menjaga konsistensi data di level kode aplikasimu.

          ```json
          // User lain bisa punya struktur berbeda tanpa error
          {
            "_id": "user124",
            "nama": "Siti",
            "pekerjaan": "Developer"
          }
          ```

          > **Pro-Tip: Jangan Terjebak Hype!**
          > Seringkali pengembang pemula memilih NoSQL hanya karena terdengar "modern" dan "keren". Padahal, untuk aplikasi yang melibatkan transaksi keuangan atau relasi data yang kompleks, SQL tetap menjadi pilihan terbaik. Menggunakan NoSQL untuk data yang sangat terstruktur justru akan membuatmu menulis logika yang rumit di sisi Python hanya untuk meniru fitur yang sebenarnya sudah ada secara gratis di SQL.

          ### Guided Implementation: Memilih Senjata yang Tepat
          Mari kita coba simulasi pengambilan keputusan. Jika kamu sedang membangun aplikasi "Pencatatan Skor Game Real-time" dengan jutaan pemain dari seluruh dunia yang datanya sangat dinamis, NoSQL (seperti Redis atau MongoDB) akan memberikan kecepatan akses yang luar biasa. Namun, jika kamu membangun "Sistem Akuntansi Perusahaan", SQL (seperti PostgreSQL) adalah harga mati untuk menjamin tidak ada satu rupiah pun yang hilang karena ketidakkonsistenan data.

          ### Interactive Challenge
          Coba bayangkan kamu sedang membuat aplikasi perpustakaan. Kamu punya tabel `Buku` (Judul, Penulis) dan tabel `Peminjam` (Nama, Alamat). Menurutmu, apakah lebih mudah mengelola relasi "Buku mana dipinjam siapa" menggunakan SQL (Tabel berelasi) atau NoSQL (Dokumen tertanam)? Coba pikirkan konsekuensinya jika seorang penulis mengganti namanya di semua buku yang ia tulis!

          ### Summary & Next Steps
          - **SQL** mengutamakan struktur dan integritas data yang sangat ketat (ACID).
          - **NoSQL** memberikan fleksibilitas dokumen untuk data yang cepat berubah dan skala besar.
          - Pilihlah database berdasarkan kebutuhan data, bukan berdasarkan tren teknologi terbaru.

          **Berikutnya:** Database sudah kita pilih. Sekarang, bagaimana cara kita "memerintah" database tersebut untuk mengambil, mengubah, atau menghapus data kita? Mari kita pelajari bahasa sakti para penjaga data: **SQL Queries!**
        quiz:
          question: Kapan sebaiknya Anda memilih database SQL dibandingkan NoSQL?
          options:
          - Saat data tidak memiliki struktur yang jelas.
          - Saat membutuhkan keamanan transaksi yang sangat ketat (ACID compliance).
          - Saat ingin menyimpan data dalam format gambar saja.
          - Saat ingin database yang paling murah.
          correctAnswerIndex: 1
      - id: sql-queries
        title: Query & CRUD
        content: |
          # Modul: SQL Queries - Berbicara dengan Penjaga Data

          Database SQL adalah sebuah gudang raksasa yang dijaga sangat ketat oleh seorang "Penjaga Pintu" digital. Masalahnya, si penjaga ini tidak mengerti bahasa Python, Jawa, atau bahasa manusia biasa. Ia hanya patuh pada satu bahasa kuno namun sangat sakti yang disebut **SQL (Structured Query Language)**. Jika kamu ingin mengambil data dari gudangnya tapi tidak bisa berbicara dalam bahasanya, kamu akan pulang dengan tangan hampa meskipun datanya ada tepat di depan matamu.

          Bayangkan kamu sedang berada di sebuah kafe yang sangat formal. Kamu tidak bisa sekadar berteriak, "Minta kopi!". Pelayan di sana hanya akan melayani jika kamu menggunakan format pesanan yang baku: *"SAYA MINTA [Kopi Hitam] DARI [Daftar Menu] YANG HARGANYA [Di bawah 50 ribu]"*. SQL bekerja dengan cara yang persis sama. Kamu harus menyebutkan apa yang ingin kamu ambil, dari tabel mana, dan dengan syarat apa secara presisi.

          Dalam perjalanan kali ini, kamu akan mampu **merumuskan** perintah SQL deklaratif untuk melakukan operasi manajemen data fundamental yang disebut CRUD. Kamu juga akan belajar cara **menggabungkan** relasi data antar tabel yang berbeda seolah-olah mereka adalah satu kesatuan informasi yang utuh.

          Sebelum mulai memerintah database, pastikan kamu sudah:
          * Memahami konsep dasar **Tabel, Baris, dan Kolom**.
          * Mengenal tipe data dasar (Angka dan Teks).

          ### Mantra Utama: Mengenal CRUD

          Di dunia database, ada 4 operasi sakral yang akan kamu lakukan 90% dari waktumu. Operasi ini disingkat menjadi **CRUD**: *Create, Read, Update,* dan *Delete*. Menguasai keempatnya adalah kunci utama untuk mengelola informasi apa pun di dunia digital.

          #### 1. Create (Menambah Data) & Read (Mengambil Data)
          Untuk memasukkan "warga baru" ke dalam tabel, kita menggunakan perintah `INSERT INTO`. Kamu harus menyebutkan nama kolomnya dan nilainya secara berurutan. Setelah data tersimpan, kamu bisa memanggilnya kembali menggunakan perintah `SELECT`. `SELECT` adalah perintah yang paling sering digunakan; ia memungkinkanmu memfilter data secara spesifik menggunakan klausa `WHERE`.

          ```sql
          -- Memasukkan pengguna baru
          INSERT INTO users (nama, umur) VALUES ('Siti', 22);

          -- Mengambil HANYA nama dari pengguna yang umurnya di atas 20
          SELECT nama FROM users WHERE umur > 20;
          ```

          SQL sangat efisien karena ia hanya mengambil apa yang kamu minta. Jangan membiasakan menggunakan `SELECT *` (ambil semua kolom) jika kamu hanya butuh nama saja. Dengan menjadi spesifik, kamu sedang menghemat memori server dan mempercepat waktu respon aplikasimu, terutama saat tabel tersebut sudah berisi jutaan baris data.

          ```sql
          -- Mengambil semua kolom (Gunakan dengan bijak!)
          SELECT * FROM users LIMIT 5;
          ```

          #### 2. Update (Mengubah) & Delete (Menghapus)
          Data tidak selamanya statis. Saat pengguna mengganti nama atau menghapus akun, kita menggunakan `UPDATE` and `DELETE`. Keduanya adalah "perintah berbahaya" yang membutuhkan ketelitian tingkat tinggi. Kamu **wajib** menyertakan syarat `WHERE` agar perintahmu tidak salah sasaran dan merusak data milik orang lain secara tidak sengaja.

          ```sql
          -- Mengubah nama pengguna dengan ID tertentu
          UPDATE users SET nama = 'Budi Santoso' WHERE id = 1;

          -- Menghapus pengguna yang sudah tidak aktif
          DELETE FROM users WHERE last_login < '2023-01-01';
          ```

          Visualisasikan `UPDATE` and `DELETE` seperti operasi bedah. Jika kamu lupa memberikan instruksi `WHERE` yang spesifik, itu ibarat dokter yang ingin mengoperasi kaki pasien tapi malah membedah seluruh tubuhnya. Ketelitian dalam menuliskan syarat (Condition) adalah apa yang membedakan seorang pengembang profesional dengan pengembang amatir yang sering membuat database perusahaan "meledak".

          ```sql
          -- Hati-hati: Tanpa WHERE, SEMUA data akan berubah/hilang!
          -- UPDATE users SET nama = 'Zonk'; -- JANGAN DILAKUKAN
          ```

          #### 3. Kekuatan Super: JOIN
          Kekuatan sejati SQL terletak pada kemampuannya menyatukan data dari tabel yang berbeda dalam satu kedipan mata menggunakan **JOIN**. Alih-alih kamu harus melakukan perulangan `for` yang lambat di Python untuk mencocokkan data "Pembeli" dengan "Barang yang Dibeli", SQL bisa melakukannya secara otomatis di level mesin, memberikanmu hasil yang instan dan akurat.

          ```sql
          -- Menggabungkan tabel Users dan Orders
          SELECT users.nama, orders.total_harga
          FROM users
          JOIN orders ON users.id = orders.user_id;
          ```

          > **Pro-Tip: Tragedi DELETE Tanpa WHERE**
          > Ini adalah candaan paling horor sekaligus pelajaran paling mahal di dunia IT. Jika kamu mengetik `DELETE FROM users;` tanpa syarat `WHERE`, maka detik itu juga SELURUH data pengguna di perusahaanmu akan lenyap tanpa sisa. **Selalu biasakan menulis SELECT dengan syarat yang sama terlebih dahulu** untuk memastikan datanya benar, baru kemudian ganti kata `SELECT` menjadi `DELETE`.

          ### Interactive Challenge
          Tuliskan (di pikiranmu atau di coretan kertas) sebuah perintah SQL untuk mengambil HANYA kolom `harga` dari tabel `produk` di mana kategorinya adalah 'Elektronik' DAN harganya di atas 1 juta. Bisakah kamu menggabungkan dua syarat tersebut menggunakan kata kunci `AND`?

          ### Summary & Next Steps
          - **CRUD** adalah pondasi utama: *Create (Insert), Read (Select), Update, Delete*.
          - **JOIN** memungkinkan penggabungan data antar tabel secara efisien.
          - Selalu gunakan **WHERE** pada perintah Update and Delete untuk menghindari bencana data.
          - SQL adalah bahasa deklaratif; kamu memberi tahu "apa" yang kamu mau, bukan "bagaimana" cara mengambilnya.

          **Berikutnya:** Menulis SQL panjang di dalam kode Python sangat rentan terhadap kesalahan ketik dan sulit dirawat. Adakah cara agar kita bisa mengubah tabel SQL ini menjadi *Class Python* yang cantik dan otomatis? Mari kita panggil Sang Penerjemah: **ORM (Object Relational Mapping)!**
        quiz:
          question: Apa singkatan dari operasi CRUD dalam database?
          options:
          - Clear, Read, Update, Delete.
          - Create, Read, Update, Delete.
          - Create, Remove, Under, Data.
          - Change, Read, Upload, Delete.
          correctAnswerIndex: 1
      - id: orm-concept
        title: ORM (Object Relational Mapping)
        content: "Masalah terbesar dengan menulis SQL murni di dalam kode Python adalah:\\n\\
          Editor kode-mu (VS Code) tidak bisa mendeteksi jika kamu salah ketik nama\\n\\
          kolom. Jika kamu mengetik `SELETC * FORM usres`, programmu baru akan meledak\\n\\
          saat dijalankan (Runtime Error).\\n\\nDalam praktiknya, ini beban mental\\n\\
          yang luar biasa. Kita butuh \\"Penerjemah Bahasa\\" yang menyatukan gaya\\n\\
          pemrograman OOP (Objek) dengan Tabel Database. Itulah keajaiban yang dinamakan\\n\\
          ORM.\\n\\nKamu akan mampu **mengintegrasikan** entitas database ke dalam\\n\\
          paradigma kode Python menggunakan teknik *Object Relational Mapping* (ORM)\\n\\
          demi kebersihan dan keamanan kode.\\n\\n- Memahami Class/Object (OOP) dan\\n\\
          fungsi dasar SQL.\\n\\n**ORM (Object Relational Mapping)** adalah jembatan\\n\\
          sihir. \\nDengan ORM:\\n- **Tabel Database** disulap menjadi sebuah **Class**\\n\\
          di Python.\\n- **Baris Data (Row)** disulap menjadi sebuah **Object** (Instance).\\n\\n\\
          - **Kolom (Column)** disulap menjadi **Atribut**.\\n\\nJadi, kamu memanipulasi\\n\\
          database murni menggunakan Python, tanpa sebaris kode SQL pun! (Library\\n\\
          terpopuler: SQLAlchemy atau Django ORM).\\n\\nPerhatikan betapa cantiknya\\n\\
          kode ini dibandingkan menulis SQL murni:\\n\\n```python\\n# Murni sintaks\\n\\
          Python! Tidak ada teks \\"SELECT\\" atau \\\"UPDATE\\"\\n# Mengambil data (SELECT\\n\\
          * FROM users WHERE nama='Andi')\\nuser = session.query(User).filter_by(nama=\\\"\\
          Andi\\\").first()\\n\\n# Mengubah data (UPDATE users SET umur=26 WHERE...)\\n\\n\\
          user.umur = 26\\n\\n# Menerapkan perubahan ke database permanen\\n\\
          session.commit()\\n\\n```\\n\\n**\\"SQL Injection Shield\\":** Selain kodenya jadi sangat mudah dibaca,\\n\\
          ORM adalah pelindung terbaikmu dari hacker. Jika kamu menulis SQL manual\\n\\
          dengan menggabungkan string `f\\"SELECT * FROM users WHERE id = {input_user}\\"`, hacker bisa mengirimkan kode jahat. ORM menyanitasi dan memblokir trik\\n\\
          semacam ini secara otomatis!\\n\\nSebutkan satu alasan mengapa menggunakan\\n\\
          ORM sangat menguntungkan jika suatu hari nanti bosmu ingin memindahkan\\n\\
          *database* dari \\"MySQL\\" ke \\"PostgreSQL\\\"!\\n\\n### Kesimpulan\\n- **Rekap:**\\n\\
          ORM membebaskanmu dari menulis sintaks SQL manual, menyulap tabel menjadi\\n\\
          Class yang sangat Pythonic, rapi, dan terhindar dari salah ketik.\\n- **Bridge:**\\n\\
          Database sudah aman dan terkendali. Tapi bagaimana cara kamu mengelola\\n\\
          \\"sejarah perubahan\\" kolom tabel jika aplikasimu dikerjakan oleh 10 orang?\\n\\
          Kita butuh mesin waktu bernama Migration!"
        codeExample: "# Menggunakan SQLAlchemy (Pseudo-code)\\n\\n# 1. Mengambil data\\n\\
          (SELECT)\\nuser = session.query(User).filter_by(nama=\\\"Andi\\\").first()\\n\\n# 2. Mengubah data (UPDATE)\\nuser.umur = 26\\nsession.commit() # Simpan\\n\\
          ke database"
        quiz:
          question: Apa keuntungan utama menggunakan ORM dibanding menulis SQL manual?
          options:
          - Membuat aplikasi menjadi lebih berat.
          - Melindungi dari SQL Injection dan membuat kode lebih Pythonic (rapi).
          - Menghapus kebutuhan akan database.
          - Membuat internet menjadi lebih cepat.
          correctAnswerIndex: 1
      - id: migration-seed
        title: Migration & Seed
        content: "Bayangkan skenario ini: Kamu sedang mengerjakan sistem login, lalu\\n\\
          kamu butuh menambahkan kolom \\"No HP\\" ke dalam tabel `Users`. Kamu mengubah\\n\\
          database di laptopmu. Berhasil!\\nLalu kamu mengirim kodenya ke laptop\\n\\
          teman setimmu. Begitu ia menjalankan kodenya, aplikasimu meledak! Kenapa?\\n\\
          Karena di database temanmu, kolom \\\"No HP\\\" belum ada.\\n\\nBagaimana cara\\n\\
          menyingkronkan struktur tabel antar puluhan laptop developer dan server?\\n\\
          Kita butuh \\\"Buku Catatan Sejarah\\\".\\n\\nSetelah materi ini, kamu akan\\n\\
          mampu **mengelola** evolusi struktur skema database menggunakan sistem\\n\\
          *Migration* dan **mempersiapkan** lingkungan data simulasi melalui *Seeding*.\\n\\n\\
          - Paham Konsep Tabel, Kolom, dan ORM.\\n\\n**1. Migration (Migrasi):**\\n\\n\\
          Sistem *Version Control* (seperti Git) khusus untuk struktur database. Jika\\n\\
          kamu menambah kolom \\\"No HP\\\", sistem akan membuat satu file skrip otomatis.\\n\\
          Temanmu hanya perlu menjalankan skrip tersebut (contoh: `alembic upgrade\\n\\
          head`), dan tabel di komputernya akan otomatis dimodifikasi persis seperti\\n\\
           milikmu.\\n\\n**2. Seeding (Penebaran Benih):**\\nMemasukkan \\\"Data Palsu\\\"\\n\\
          (Dummy Data) atau data awal (seperti daftar kategori produk) ke dalam\\n\\
          database yang baru dibuat, agar aplikasimu tidak tampak melompong saat\\n\\
           dites.\\n\\nGaya kerjanya sangat mirip dengan Git:\\n\\n```bash\\n# Terminal:\\n\\
          Memerintahkan sistem untuk mencatat \\\"ada kolom baru lho\\\"\\nalembic revision\\n\\
          -m \\\"Menambahkan kolom No HP\\\"\\n\\n# Terminal: Mengeksekusi catatan tersebut\\n\\
          ke database lokal\\nalembic upgrade head\\n```\\n\\n**\\"Mengubah Database\\n\\
          Manual (Haram)\\":** Jika kamu sudah menggunakan sistem Migration di proyekmu,\\n\\
          JANGAN PERNAH menyentuh dan menambahkan kolom database langsung melalui\\n\\
          aplikasi manajemen GUI (seperti DBeaver atau phpMyAdmin). Ini akan merusak\\n\\
          rantai sejarah migration, dan membuat sistem tidak bisa melakukan update\\n\\
          (out of sync).\\n\\nJika *Migration* bisa dipakai untuk \\\"Maju\\\" (*Upgrade/Apply*),\\n\\
          mungkinkah ia dipakai untuk \\\"Mundur\\\" (*Downgrade/Rollback*) jika ternyata\\n\\
          kolom yang baru ditambahkan itu salah? Cari tahu fiturnya!\\n\\n### Kesimpulan\\n- **Rekap:**\\n\\
          Migration menjaga konsistensi struktur tabel di seluruh tim,\\n\\
          sedangkan Seeding mengisi tabel tersebut dengan data simulasi awal.\\n\\n\\
          - **Bridge:** Wow! Ekosistem infrastrukturmu sudah setara Senior Developer.\\n\\
          Sekarang saatnya memanjakan mata dan akal sehat kita dengan evolusi terbaru\\n\\
          Python modern: Type Hints & Pydantic!"
        quiz:
          question: Apa fungsi utama dari sistem Migration?
          options:
          - Mempercepat performa pencarian database.
          - Mencatat dan menerapkan perubahan struktur database secara terorganisir.
          - Menghapus data yang tidak penting secara otomatis.
          - Mengubah database SQL menjadi NoSQL.
          correctAnswerIndex: 1"""

# Regex to find the database-orm module block
pattern = r'(    - id: database-orm\s+title: 12\. Database & ORM\s+lessons:).*?(\s+    - id: modern-python|\Z)'

match = re.search(pattern, content, flags=re.DOTALL)
if match:
    # Construct the new content by slicing
    start_pos = match.start()
    end_pos = match.end()
    
    # Check if we need to preserve the trailing part (id: modern-python)
    trailing = match.group(2)
    
    # Note: match.group(1) is the header "    - id: database-orm..."
    new_module_full = match.group(1) + "\n" + new_module_block
    
    new_content = content[:start_pos] + new_module_full + trailing + content[end_pos:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success: Module database-orm fixed and refactored.")
else:
    print("Error: Could not find the database-orm module block.")
