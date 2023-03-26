# React Form [![Build Status](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://id.reactjs.org/docs/forms.html)
##### Pada Live Sesion Tanggal 20, 22, dan 23 Maret 2023 Membahas Mengenai **React Form** dimana meliputi berbagai materi sebagai berikut:
#




- Controled Component
- Uncontroled Component
- Materi Tambahan

## - Controled Componen
Pada HTML, elemen form seperti <input>, <textarea>, dan <select> biasanya menyimpan state dan memperbaruinya berdasarkan masukan dari user. Pada React, state yang bisa berubah seperti ini biasanya disimpan pada properti dari komponen, dan hanya akan diubah menggunakan **setState()**.
Kita bisa menggunakan *state* untuk menggabungkan keduanya, Sebagai contoh, jika kita ingin membuat form pada contoh sebelumnya mencatat sebuah nama ketika nama dikirim, kita dapat menuliskan form sebagai sebuah controlled component:

Dari Kode diatas, Karena atribut value sudah di set pada elemen form, nilai yang ditampilkan akan selalu sama dengan this.state.value, yang menjadikan React sebagai sumber kebenaran tunggal dari state. Dan karena handleChange dijalankan setiap ketikan untuk memperbarui state React, nilai yang ditampilkan akan terbarui ketika user mengetik handleChange tersebut.

Pada Controled Component dapat **Menangani Banyak Input**, dimana jika kita membutuhkan penanganan banyak elemen input terkontrol, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.

##### Apa yang membuat Elemen 'Controlled'?
#
Berikut adalah elemen yang membuat componen menjadi controlled
| Element | Value Property | Change Callback | New value in callback
| ------ | ------ | ------ | ------ |
| <input type="text"/> | value="string" | onChange | event.target.value |
| <input type="chechbox"/> | value={boolean} | onChange | event.target.checked |
| <input type="radio"/> | value={boolean} | onChange | event.target.checked |
| <textarea /> | value="string" | onChange | event.target.value |
| <select /> | value="option value" | onChange | event.target.value |

## - Uncontroled Component
Uncontroled Component adalah sebuah alternatif untuk kita menggunakan controled component dalam sebuah form, dimana data form akan ditangani oleh DOM-nya sendiri. kita bisa menggunakan *ref* untuk mendapatkan nilai form dari DOM.

##### contoh code yang menerima Uncontroled Component:
#

Dari kode di atas, karena uncontrolled component menyimpan sumber kebenaran dalam DOM, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Bisa dikatakan ini menjadi solusi untuk pengerjaan cepat tetapi tidak rapi.

## - Materi Tambahan
Memberikan validasi lebih baik menggunakan library Formik yup, atau jika ingin eksplorasi lebih dalam bisa menggunakan Zod. 
Zod bisa digunakan validasi seperti yup, namun Zod ini sudah terintegrasi. Jika membuat form yang terdapat validasi yang banyak kita bisa menggunakan Yup ataupun Zod karena validasinya sudah terintegrasi.
##### Contoh Penerapan Code Formik Yup

Di atas bisa kita lihar, validasi dilakukan manual. Jangan ragu untuk menulis validasi sendiri atau menggunakan library Biasanya menggunakan Yup untuk validasi skema objek. Yup memiliki API yang sangat mirip dengan Joi / React PropTypes tetapi cukup kecil untuk browser dan cukup cepat untuk penggunaan runtime. 