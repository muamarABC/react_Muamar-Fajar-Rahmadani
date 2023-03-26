# React Form [![Build Status](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://id.reactjs.org/docs/forms.html)
##### Pada Live Sesion Tanggal 20, 22, dan 23 Maret 2023 Membahas Mengenai **React Form** dimana meliputi berbagai materi sebagai berikut:
#




- Controled Component
- Uncontroled Component
- Materi Tambahan

## - Controled Componen
Pada HTML, elemen form biasanya menyimpan state dan memperbaruinya berdasarkan masukan dari user. Pada React, state yang bisa berubah seperti ini biasanya disimpan pada properti dari komponen, dan hanya akan diubah menggunakan **setState()**.
Kita bisa menggunakan *state* untuk menggabungkan keduanya, Sebagai contoh, jika kita ingin membuat form pada contoh sebelumnya mencatat sebuah nama ketika nama dikirim, kita dapat menuliskan form sebagai sebuah controlled component:

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
Dari Kode diatas, Karena atribut value sudah di set pada elemen form, nilai yang ditampilkan akan selalu sama dengan this.state.value, yang menjadikan React sebagai sumber kebenaran tunggal dari state. Dan karena handleChange dijalankan setiap ketikan untuk memperbarui state React, nilai yang ditampilkan akan terbarui ketika user mengetik handleChange tersebut.

Pada Controled Component dapat **Menangani Banyak Input**, dimana jika kita membutuhkan penanganan banyak elemen input terkontrol, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.

##### Apa yang membuat Elemen 'Controlled'?
#
Berikut adalah elemen yang membuat componen menjadi controlled
| Element | Value Property | Change Callback | New value in callback
| ------ | ------ | ------ | ------ |
| "<input type="text"/>" | value="string" | onChange | event.target.value |
| <input type="chechbox"/> | value={boolean} | onChange | event.target.checked |
| <input type="radio"/> | value={boolean} | onChange | event.target.checked |
| <textarea /> | value="string" | onChange | event.target.value |
| <select /> | value="option value" | onChange | event.target.value |

## - Uncontroled Component
Uncontroled Component adalah sebuah alternatif untuk kita menggunakan controled component dalam sebuah form, dimana data form akan ditangani oleh DOM-nya sendiri. kita bisa menggunakan *ref* untuk mendapatkan nilai form dari DOM.

##### contoh code yang menerima Uncontroled Component:
#
```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('Sebuah nama telah dikirim: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nama:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Kirim" />
      </form>
    );
  }
}
```
Dari kode di atas, karena uncontrolled component menyimpan sumber kebenaran dalam DOM, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Bisa dikatakan ini menjadi solusi untuk pengerjaan cepat tetapi tidak rapi.

## - Materi Tambahan
Memberikan validasi lebih baik menggunakan library Formik yup, atau jika ingin eksplorasi lebih dalam bisa menggunakan Zod. 
Zod bisa digunakan validasi seperti yup, namun Zod ini sudah terintegrasi. Jika membuat form yang terdapat validasi yang banyak kita bisa menggunakan Yup ataupun Zod karena validasinya sudah terintegrasi.
##### Contoh Penerapan Code Formik Yup
```javascript
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
```
Di atas bisa kita lihar, validasi dilakukan manual. Jangan ragu untuk menulis validasi sendiri atau menggunakan library Biasanya menggunakan Yup untuk validasi skema objek. Yup memiliki API yang sangat mirip dengan Joi / React PropTypes tetapi cukup kecil untuk browser dan cukup cepat untuk penggunaan runtime. 