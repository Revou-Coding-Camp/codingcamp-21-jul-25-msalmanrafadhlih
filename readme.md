# Aplikasi Web Daftar Tugas Sederhana
Aplikasi web yang ringan dan intuitif untuk mengelola tugas harian Anda. Proyek ini mendemonstrasikan konsep-konsep dasar pengembangan web menggunakan HTML, CSS, dan JavaScript, termasuk penanganan formulir, manipulasi DOM, persistensi data (Local Storage), dan pemfilteran dasar.

## Fitur

* **Tambah Tugas Baru:** Tambahkan item tugas baru dengan mudah menggunakan deskripsi tugas dan tanggal jatuh tempo.
* **Tampilkan Daftar Tugas:** Lihat semua tugas Anda dalam daftar yang jelas dan terorganisir.
* **Tandai Selesai:** Ubah status penyelesaian tugas. Tugas yang sudah selesai dibedakan secara visual.
* **Hapus Tugas:** Hapus tugas dari daftar Anda saat tidak lagi diperlukan.
* **Filter Tugas:** Filter tugas Anda untuk menampilkan:
    * Semua tugas
    * Tugas Aktif (belum selesai)
    * Tugas Selesai
* **Validasi Input:** Memastikan bahwa deskripsi tugas dan tanggal jatuh tempo tidak dibiarkan kosong.
* **Persistensi Data:** Tugas disimpan ke Local Storage browser Anda, sehingga tetap ada meskipun Anda menutup dan membuka kembali browser.
* **Desain Responsif:** Aplikasi menyesuaikan tata letaknya untuk tampilan optimal di berbagai ukuran layar (desktop, tablet, seluler).

## Teknologi yang Digunakan

* **HTML5:** Untuk struktur dasar dan konten halaman web.
* **CSS3:** Untuk menata gaya aplikasi, membuatnya menarik secara visual dan mudah digunakan.
* **JavaScript (ES6+):** Untuk semua fungsionalitas interaktif, termasuk menambah, menghapus, memfilter, dan mengelola status tugas.

## Struktur Proyek

Proyek ini mengikuti struktur direktori yang rapi dan terorganisir:
```
simple-todo-list/
    ├── css/
    │    └── style.css
    ├── js/
    │    └── script.js
    └── index.html
```
## Cara Menjalankan Secara Lokal

Ikuti langkah-langkah sederhana ini untuk membuat aplikasi berjalan di mesin lokal Anda:

1.  **Kloning repositori (Opsional, jika Anda memilikinya di Git):**
    ```bash
    git clone [https://github.com/nama-pengguna-anda/simple-todo-list.git](https://github.com/nama-pengguna-anda/simple-todo-list.git)
    ```
    (Ganti `https://github.com/nama-pengguna-anda/simple-todo-list.git` dengan URL repositori Anda yang sebenarnya jika Anda menyimpannya di GitHub, jika tidak, pastikan saja Anda memiliki file-file tersebut dalam folder lokal.)

2.  **Navigasi ke direktori proyek:**
    ```bash
    cd simple-todo-list
    ```

3.  **Buka `index.html`:**
    Cukup buka file `index.html` di browser web pilihan Anda. Anda dapat melakukannya dengan mengklik dua kali pada file atau dengan menyeretnya ke jendela browser Anda.

    ```bash
    # Contoh perintah (mungkin bervariasi tergantung OS Anda)
    open index.html      # Untuk macOS
    start index.html     # Untuk Windows
    xdg-open index.html  # Untuk Linux
    ```

Aplikasi seharusnya sekarang sudah aktif di browser Anda!

## Penggunaan

1.  **Menambah Tugas:**
    * Ketik deskripsi tugas Anda ke dalam kolom input "Add a new task...".
    * Pilih tanggal jatuh tempo menggunakan kolom input tanggal.
    * Klik tombol "Add Task".

2.  **Menandai Selesai/Batal:**
    * Klik tombol "Complete" di samping tugas untuk menandainya sebagai selesai.
    * Klik tombol "Undo" (yang muncul setelah selesai) untuk mengembalikan statusnya.

3.  **Menghapus Tugas:**
    * Klik tombol "Delete" di samping tugas apa pun untuk menghapusnya dari daftar.

4.  **Memfilter Tugas:**
    * Klik tombol "All", "Active", atau "Completed" untuk memfilter tugas yang ditampilkan.

## Kontribusi

Ini adalah proyek pembelajaran sederhana. Namun, jangan ragu untuk melakukan fork repositori, membuat peningkatan, dan mengirimkan *pull request* jika Anda memiliki ide untuk memperbaikinya!

## Lisensi

Proyek ini bersifat *open source* dan tersedia di bawah [Lisensi MIT](LICENSE).

---