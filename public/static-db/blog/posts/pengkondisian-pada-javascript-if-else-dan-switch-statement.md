---
id: "a20cb0676c3e"
title: "Pengkondisian pada Javascript: If Else dan Switch Statement"
date: "2023-01-27T03:12:37.000Z"
excerpt: "Pengkondisian atau percabangan merupakan salah satu bagian dari program control yang mengatur aliran berjalannya program. Pengkondisian atau percabangan adalah instruksi pada pemrograman yang berfungsi untuk menjalankan suatu blok kode berdasarkan pada kondisi tertentu yang terpenuhi."
tags: ["JavaScript", "Web Development"]
author:
  name: "Ngodingo Admin"
  image: "/static-db/blog/authors/admin-ngodingo.png"
---

Pengkondisian atau percabangan merupakan salah satu bagian dari program control yang mengatur aliran berjalannya program. Pengkondisian atau percabangan adalah instruksi pada pemrograman yang berfungsi untuk menjalankan suatu blok kode berdasarkan pada kondisi tertentu yang terpenuhi.

Misalnya dalam suatu program terdapat dua kemungkinan kondisi yaitu kondisi A dan B, kedua kondisi juga memiliki syarat tertentu agar terpenuhi. Jika kondisi A terpenuhi maka blok kode A akan dieksekusi oleh program dan blok kode B tidak akan dieksekusi, begitu pula sebaliknya dengan kondisi B. Agar lebih memahami penggunaan pengkondisian dalam pemrograman, berikut ini adalah pengkondisian pada bahasa pemrograman Javascript.

### **Pengkondisian Javascript**

Pengkondisian pada Javascript sendiri tidak jauh berbeda dengan bahasa pemrograman lainnya. Pengkondisian Javascript mengekseskusi kode dimana kondisi memenuhi kondisi _true_ atau _false._ Ada beberapa format penggunaan pengkondisian :

1. If statement
2. If else statement
3. If else if statement
4. Switch statement

### **Javascript If Statement**

If statement hanya akan mengeksekusi blok kode jika expression dalam tanda kurung () bernilai _true_, sedangkan jika ekspresi bernilai _false_ maka blok kode tidak akan dieksekusi dan hanya akan diabaikan saja oleh program lalu lanjut ke baris kode berikutnya.

```js
if (expression) {
  // kode
}
```

```js
const a = 10;

if (a > 0) {
  document.writeln(`${a} adalah bilangan positif`);
}
```

### **Javascript If else Statement**

If else statement sedikit berbeda dengan if statement, bedanya adalah terdapat kondisi kedua yang akan dieksekusi jika kondisi pertama tidak terpenuhi. Jika expression pada statement if bernilai _true_ maka blok kode di dalam if akan dieksekusi sedangkan kode di dalam else diabaikan. Namun, jika expression pada if bernilai _false_ maka blok kode di dalam if diabaikan dan blok kode di dalam else akan dieksekusi oleh program.

```js
if (expression) {
  // kode kondisi satu
} else {
  // kode kondisi terakhir
}
```

```js
const b = 11;

if (b % 2 == 0) {
  document.writeln(`${b} adalah bilangan genap`);
} else {
  document.writeln(`${b} adalah bilangan ganjil`);
}
```

### **Javascript If else if Statement**

If else if statement adalah pengkondisian yang digunakan ketika terdapat lebih dari dua kondisi yang akan dievaluasi. Hampir sama seperti pengkondisian if else, tetapi ada . Jika expression pada if bernilai _true_ maka blok kode di dalam if akan dieksekusi sedangkan yang lain akan diabaikan. Namun, jika expression pada if bernilai _false_ maka blok kode if akan diabaikan lalu dilanjutkan evaluasi kondisi pada else if. Jika expression pada else if bernilai _true_ maka blok kode akan dieksekusi dan yang lain akan diabaikan. Begitu seterusnya hingga jika terjadi semua statement bernilai _false_ maka otomatis blok kode pada else yang akan dieksekusi oleh program.

```js
if (expression) {
  // kode kondisi satu
} else if (expression) {
  // kode kondisi dua
} else if (expression) {
  // kode kondisi tiga
} else {
  // kode kondisi terakhir
}
```

```js
const nilai = 70;

if (nilai >= 90) {
  document.writeln("Nilai A");
} else if (nilai >= 80) {
  document.writeln("Nilai B");
} else if (nilai >= 70) {
  document.writeln("Nilai C");
} else {
  document.writeln("Nilai D");
}
```

### **Javascript Switch Statement**

Switch statement adalah pengkondisian yang dapat digunakan untuk mengevaluasi satu hingga beberapa kondisi. Switch statement digunakan untuk kondisi yang lebih sederhana karena hanya dapat mengevaluasi expression dengan operator perbaindingan sama dengan (==). Hampir sama seperti if else if statement, tetapi ada perbedaan pada cara kerja dan sintaksnya karena menggunakan kata kunci switch dan case.

Switch statement akan mengevaluasi nilai variabel yang ada dalam tanda kurung (). Case diikuti nilai dari variabel, jika perbandingan nilai dengan variabel tersebut bernilai _true_ maka blok kode case tersebut akan dieksekusi dan yang lain diabaikan. Break menghentikan eksekusi blok kode dari case yang bernilai _true_. Jika semua case bernilai _false_ maka otomatis blok kode pada default yang akan dieksekusi oleh program.

```js
switch (variable) {
  case value1:
    // kode kondisi satu
    break;
  case value2:
    // kode kondisi dua
    break;
  case value3:
    // kode kondisi tiga
    break;
  default:
  // kode kondisi terakhir
}
```

```js
const grade = "C";

switch (grade) {
  case "A":
    document.writeln("Sangat Baik");
    break;
  case "B":
    document.writeln("Baik");
    break;
  case "C":
    document.writeln("Cukup");
    break;
  default:
    document.writeln("Kurang");
}
```

Perlu diperhatikan bahwa urutan evaluasi kondisi dilakukan satu persatu dari atas ke bawah, maka perlu diperhatikan lebih teliti terkait prioritas dan urutan kodisi secara logis sesuai algoritma program. Jika urutan kondisi tidak sesuai maka hasilnya program akan mengeksekusi blok kode program yang tidak seharusnnya dan program tidak berjalan sesuai dengan algoritma.
