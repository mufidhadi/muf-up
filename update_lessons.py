import yaml
from ruamel.yaml import YAML
import sys

def update_curriculum():
    yaml_util = YAML()
    yaml_util.preserve_quotes = True
    yaml_util.indent(mapping=2, sequence=4, offset=2)
    yaml_util.width = 4096

    file_path = 'src/curriculum.yaml'
    with open(file_path, 'r', encoding='utf-8') as f:
        data = yaml_util.load(f)

    # MATERI 45: AUTO-PILOT (CI/CD)
    lesson_45 = {
        "id": "github-actions-ci",
        "title": "Auto-Pilot: Testing Otomatis dengan GitHub Actions",
        "content": """**Tujuan Pembelajaran:** Mampu membuat alur kerja otomatis (CI/CD) agar setiap kali kamu mengupdate kode, program akan otomatis diuji dan diverifikasi kebersihannya.

Sebagai penutup perjalanan Python, kamu harus mengenal **GitHub Actions**. Ini adalah sistem yang menjalankan perintah otomatis setiap kali kamu melakukan "Push" kode ke GitHub.

**Kenapa ini Penting?**
1. **Verifikasi Otomatis:** Ia akan menjalankan `pytest` dan `ruff` secara otomatis. Jika ada error, ia akan memberimu "Lampu Merah".
2. **Kualitas Terjaga:** Menjamin tidak ada kode rusak yang masuk ke server produksi.
3. **Deployment Otomatis:** Bisa dikonfigurasi untuk langsung mendeploy aplikasi jika semua test berhasil.

**Analogi:**
Seperti sistem sabuk pengaman otomatis di mobil modern. Kamu tidak perlu ingat untuk memasangnya, sistem yang akan memastikan semuanya aman sebelum mobil meluncur.""",
        "codeExample": "# Contoh alur kerja .github/workflows/ci.yml\n# name: Python CI\n# on: [push]\n# jobs:\n#   test:\n#     runs-on: ubuntu-latest\n#     steps:\n#       - uses: actions/checkout@v4\n#       - name: Run Tests\n#         run: uv run pytest",
        "quiz": {
            "question": "Apa manfaat utama dari penggunaan CI/CD seperti GitHub Actions?",
            "options": [
                "Agar kita tidak perlu menulis kode lagi.",
                "Menjalankan pengujian dan verifikasi kode secara otomatis setiap ada perubahan.",
                "Menyembunyikan kode dari orang lain.",
                "Hanya untuk mempercepat loading website."
            ],
            "correctAnswerIndex": 1
        }
    }

    # PROSES INJEKSI KE MODUL 6
    for path in data:
        if path['id'] == 'python-path':
            for curr in path.get('curriculums', []):
                if curr['id'] == 'python':
                    for mod in curr.get('modules', []):
                        if mod['id'] == 'ai-specialization':
                            lessons = mod['lessons']
                            updated = False
                            for i, l in enumerate(lessons):
                                if l['id'] == 'github-actions-ci':
                                    lessons[i] = lesson_45
                                    updated = True
                            if not updated: lessons.append(lesson_45)

    with open(file_path, 'w', encoding='utf-8') as f:
        yaml_util.dump(data, f)
    print("✅ Berhasil menambahkan Materi 45: Auto-Pilot.")

if __name__ == "__main__":
    update_curriculum()
