# React Testing [![Build Status](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://id.reactjs.org/docs/forms.html)
##### Pada Live Sesion Tanggal 29 dan 30 Maret 2023 Membahas Mengenai **React Testing** dimana meliputi berbagai materi sebagai berikut:
- Basic Testing
- Create Basic Testing with RTL
- Testing Custom Hook

## Basic Testing
Testing adalah proses veriifikasi dimana bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

**Kategori Testing :**
-    Menjalankan aplikasi secara lengkap di dalam environment peramban (browser) asli, yang biasa dikenal dengan “end-to-end”.
Pertimbangan memilih perkakas untuk testing :
-    Kecepatan iterasi vs environment yang realistis
-    Seberapa banyak mock

**Tools yang digunakan untuk testing :**
-    **Jest** merupakan test runner pada javascript yang memungkinkan anda mengakses DOM melalui jsdom.
-    **React testing library** merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya.

**Cara instalasi :**
-    Ketika kita menggunakan Create-react-app, jest dan react testing library akan secara default sudah terinstall.
-    Ketika kita menggunakan custom react setup, kita menginstall dan men set up Jest dan React testing library secara manual.

**pada umumnya rest api bisa diartikan sebagai rest**

##### Perbedaan gRPC (http/2) 0 OK dan REST (http/1.1) 200 OK
##### -gRPC :
1. modern (Banget)
2. header cache
3. cepat
4. aman (Banget)

##### GraphQL (http/1.1) 200 OK selalu mengeluarkan 


## Create Basic Testing with RTL
Render merupakan fungsi RTL yang akan merender file JSX apapun yang dibutuhkan, baru setelah itu kita bisa mengakses ke komponent react yang akan di test.
Debug merupakan fungsi RTL yang digunakan untuk meyakinkan bahwa file JSX sudah terender, debug sendiri merupakan fungsi yang digunakan untuk mengetahui hasil dari fungsi render.
Memilih elemen 
Kategori testing :
-    LabelText
-    PlaceholderText
-    AltText
-    DisplayValue
## Testing Custom Hook
Library yang digunakan untuk mengetes custom hooks adalah dengan menggunakan react hooks testing library. 
```sh
npm install -D @testing-library/react-hooks
```