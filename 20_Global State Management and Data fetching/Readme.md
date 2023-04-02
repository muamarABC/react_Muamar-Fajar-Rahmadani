


# Global State Management and Data Fetching  [![Build Status](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://id.reactjs.org/docs/forms.html)
Pada Live Sesion Tanggal 24, 27, dan 28 Maret 2023 Membahas Mengenai **Global State Management and Data Fetching** dimana meliputi berbagai materi sebagai berikut:

- Global State Introduction
- Redux Introduction
- Bagian Penting Redux

## Global State Introduction
Global State Management dibuat sebagai sarana untuk memusatkan dan mengelola data dalam aplikasi, membuatnya mudah berubah dan tersedia untuk semua komponen dalam aplikasi.
## Redux Introduction
Redux adalah open-source JavaScript library untuk mengelola dan memusatkan status aplikasi.
###### **Redux Libraries dan Tools**
1.	React-Redux
2.	Redux Toolkit
3.	Redux DevTools Extension

###### **Kapan saat yang tepat untuk menggunakan Redux**
1.	Banyak state yang perlu ditaruh di banyak tempat
2.	State pada app sering berubah
3.	Logic untuk mengubah state kompleks
4.	Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5.	Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu
## Bagian Penting Redux
-	Actions (Digunakan untuk memberikan informasi dari aplikasi ke store)
-	Reducer (Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru)
-	Store (Objek sentral yang menyimpan state pada aplikasi)
- 	Redux menggunakan struktur "one-way data flow" 
-	Redux menggunakan beberapa tipe code

#### Installation
##### 1. untuk package redux
```sh
npm install react-redux
```
##### 2. untuk redux toolkit
```sh
npm install @reduxjs/toolkit
```



