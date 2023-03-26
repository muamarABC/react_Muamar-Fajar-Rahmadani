# React Form [![Build Status](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://id.reactjs.org/docs/forms.html)
##### Pada Live Sesion Tanggal 20, 22, dan 23 Maret 2023 Membahas Mengenai **React Form** dimana meliputi berbagai materi sebagai berikut:
#




- Controled Component
- Uncontroled Component
- Materi Tambahan

## - Controled Componen
Pada HTML, elemen form seperti <input>, <textarea>, dan <select> biasanya menyimpan state dan memperbaruinya berdasarkan masukan dari user. Pada React, state yang bisa berubah seperti ini biasanya disimpan pada properti dari komponen, dan hanya akan diubah menggunakan **setState()**.
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
