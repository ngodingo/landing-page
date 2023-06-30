---
id: "2a5411a897ce"
title: "Perulangan For, While, dan Do While pada Javascript"
date: "2023-01-30T02:51:46.000Z"
excerpt: "Setelah mempelajari tentang pengkondisian atau percabangan pada artikel sebelumnya, maka artikel kali ini akan membahas tentang perulangan. Tetapi sebelum membahas lebih lanjut tentang apa itu perulangan, mari kita mulai dengan satu pertanyaan sederhana."
tags: ["JavaScript", "Web Development"]
author:
  name: "Ngodingo Admin"
  image: "/static-db/blog/authors/admin-ngodingo.png"
---

Setelah mempelajari tentang pengkondisian atau percabangan pada artikel sebelumnya, maka artikel kali ini akan membahas tentang perulangan. Tetapi sebelum membahas lebih lanjut tentang apa itu perulangan, mari kita mulai dengan satu pertanyaan sederhana.

Bagaimana cara memuncukan teks yang sama sebanyak 100 kali?

Bagaimana cara menuliskan nomor berurutan dari 1 sampai 1000?

Untuk menjawab pertanyaan itu, bisa saja menggunakan cara biasa / manual dengan menyalin teks yang sama sebanyak 100 kali atau menulis satu persatu nomor dari 1 sampai 100. Tapi bukankah cara itu akan sangat merepotkan dan memakan banyak waktu. Karena ada cara yang lebih sederhana untuk melakukan tugas tersebut, yaitu dengan perulangan atau _looping_.

### **Apa itu perulangan?**

**Perulangan** adalah sebuah proses yang sama yang dilakukan secara berulang-ulang dengan jumlah tertentu selama kondisi terpenuhi atau bernilai _true_. Dengan adanya fungsi perulangan maka hanya perlu menuliskan satu kali proses untuk mengulang proses yang sama sebanyak apapun sesuai jumlah yang ditentukan. Ini artinya tidak perlu menuliskan proses satu persatu yang sangat tidak efektif.

Secara umum perulangan pada javascript dapat dibagi menjadi 2 jenis, yaitu :

· **Counted loop** merupakan jenis perulangan yang dapat diketahui atau diperkirakan dengan jelas jumlah perulangannya, sehingga dapat ditentukan banyaknya perulangan suatu proses akan dilakukan.

· **Uncountable loop** merupakan jenis perulangan yang tidak dapat diketahui atau diperkirakan jumlah perulangannya, sehingga kondisi parameternya yang menjadi penentu banyaknya perulangan suatu proses akan dilakukan.

### **Perulangan For**

**Perulangan for** termasuk dalam jenis _countable loop_. Perulangan ini menggunakan kata kunci _for_ diikuti dengan tanda kurung yang di dalamnya terdapat _expression_ kondisi. Pengecekan kondisi pada perulangan ini dilakukan sebelum perulangan dilakukan. Selama kondisi terpenuhi atau bernilai _true_ maka perulangan dilakukan dan blok kode akan dieksekusi.

**Expression** dalam tanda kurung ini yang harus diperhatikan, di dalamnya terdapat :

· **Init statement** hanya dieksekusi sekali sebagai kondisi awal sebelum perulangan.

· **Kondisi** akan dilakukan pengecekan pada setiap perulangan, jika bernilai _true_ maka akan dieksekusi, jika _false_ maka berhenti.

· **Post statement** dieksekusi di akhir setiap perulangan.

```js
for (init statement; kondisi; post statement) {
    // blok kode perulangan
}
```

Sintaks Perulangan For

Contoh perulangan _for_ :

```js
for (let index = 1; index <= 10; index++) {
  document.writeln("<p>Contoh perulangan For</p>");
}

let batas = 10;
for (let i = 0; i < batas; i++) {
  document.writeln(`<p> Nomer ke-${i} </p>`);
}
```

Contoh Perulangan For

Output :

```txt
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For
Contoh perulangan For

Nomer ke-0
Nomer ke-1
Nomer ke-2
Nomer ke-3
Nomer ke-4
Nomer ke-5
Nomer ke-6
Nomer ke-7
Nomer ke-8
Nomer ke-9
```

### **Perulangan While**

**Perulangan while** termasuk dalam jenis _uncountable loop_. Perulangan ini lebih sederhana dibandingkan perulangan _for_, menggunakan kata kunci _while_ diikuti _expression_ kondisi dalam tanda kurung tanpa ada _init statement_ dan _post statement_. Sama seperti perulangan _for_, pengecekan kondisi pada perulangan ini dilakukan sebelum perulangan dieksekusi. Jika perulangan cukup sederhana dan hanya membutuhkan kondisi saja, maka perulangan _while_ lebih baik digunakan daripada _for_.

```js
while (kondisi) {
  // blok kode perulangan
}
```

Sintaks Perulangan While

Contoh perulangan _while_ :

```js
let ulang = 1;
while (ulang <= 10) {
  document.writeln(`<p>Contoh perulangan While</p>`);
  ulang++;
}

let j = 0;
let limit = 10;
while (j < limit) {
  document.writeln(`<p>Angka ke : ${j}</p>`);
  j++;
}
```

Output :

```txt
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While
Contoh perulangan While

Angka ke : 0
Angka ke : 1
Angka ke : 2
Angka ke : 3
Angka ke : 4
Angka ke : 5
Angka ke : 6
Angka ke : 7
Angka ke : 8
Angka ke : 9
```

Output

### **Perulangan Do While**

**Perulangan do while** termasuk dalam jenis _uncountable loop_. Perulangan ini mirip dengan perulangan _while_, tetapi berbeda pada pengecekan kondisinya. Pengecekan kondisi pada perulangan while dilakukan di awal sebelum perulangan dan blok kode belum dieksekusi, sedangkan pada do while dilakukan setelah perulangan. Oleh karena itu pada perulangan _do while_ pasti perulangan dan blok kode dieksekusi minimal sekali sebelum pengecekan kondisi _true_ atau _false_.

```js
do {
  // blok kode perulangan
} while (kondisi);
```

Sintaks Perulangan Do While

Contoh perulangan _do while_ :

```js
let count = 1;
do {
  document.writeln(`<p>Contoh perulangan Do While</p>`);
  count++;
} while (count <= 10);

let k = 1;
let maks = 10;
do {
  document.writeln(`<p>Nomer : ${k}</p>`);
  k++;
} while (k < maks);
```

Output :

```txt
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While
Contoh perulangan Do While

Nomer : 1
Nomer : 2
Nomer : 3
Nomer : 4
Nomer : 5
Nomer : 6
Nomer : 7
Nomer : 8
Nomer : 9
```
