Optional Chaining, adalah 
Pada Live Sesion Tanggal 1 Maret 2023, Membahas Mengenai **Data Structure**
1. Mengapa Belajar Data Structures?
    * Mengerti kualitas kode yang dibuat.
    * Efisiensi kode.

2. Data Structures
    * Data adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori komputer (string, number, Boolean, dll).
    * Data Structure adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer.
    * Data dapat dikelola dengan berbagai cara.

3. Basic Data Structures **(Array)**
    * Data structure paling dasar.
    * Serbaguna
        * Reading
            * Melihat nilai apa yang terkandung pada indeks tertentu di dalam array.
            * Operasi yang efisien.
            * Jenis operasi tercepat karena hanya membutuhkan 1 steps.
            * Setiap cell pada memori memiliki alamat spesifik yang diwakili dengan angka
            * Angka yang dimiliki lebih besar dari cell sebelumnya
            * Ketika membaca sebuah value pada indeks tertentu memori komputer dapat langsung melompat ke indeks tersebut, karena:
                * Komputer bisa melompat ke alamat memori manapun dalam satu steps.
                * Ketika mengalokasikan sebuah array, komputer juga membuat catatan dimana alamat memori array dimulai.

        * Searching
            * Mencari apakah nilai tertentu ada didalam array atau tidak.
            * Kebalikan dari Reading.
            * Ketika melakukan operasi searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu.
            * Komputer tidak bisa tahu begitu saja nilai apa yang terkandung pada setiap memori.
            * Perlu memeriksa setiap cell satu per satu.
            * Kurang efisien disbanding dengan Reading.
            * Memeriksa satu per satu cell.
            * Membutuhkan banyak steps sesuai dengan ukuran array atau disebut juga linear search.

        * Insertion
            * Efisiensi tergantung dimana kita memasukan value nya.
            * Memasukan value pada akhir dari array hanya membutuhkan 1 steps.
            * Memasukan value baru di awal atau tengah array perlu menggeser data yang sudah ada pada array.
            * Sehingga akan membutuhkan steps tambahan.

        * Deletion
            * Operasi menghilangkan value pada indeks tertentu.
            * Membutuhkan jumlah N steps untuk array yang mengandung N data.

2.	Set
    * Data structure sama seperti array, tetapi perbedaan nya hanya pada set yang tidak mengizinkan duplikat value dimasukan kedalam nya.
    * Dari keempat operasi reading, searching, insertion, dan deletion terdapat perbedaan efisiensi pada operasi. Sedangkan untuk operasi lainnya sama seperti array.
