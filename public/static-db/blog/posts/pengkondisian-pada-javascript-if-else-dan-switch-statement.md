---
id: 'a20cb0676c3e'
title: 'Pengkondisian pada Javascript: If Else dan Switch Statement'
date: '2023-01-27T03:12:37.000Z'
excerpt: "Pengkondisian atau percabangan merupakan salah satu bagian dari program control yang mengatur aliran berjalannya program. Pengkondisian atau percabangan adalah instruksi pada pemrograman yang berfungsi untuk menjalankan suatu blok kode berdasarkan pada kondisi tertentu yang terpenuhi."
tags: ['JavaScript', 'Web Development']
author: 
  name: 'Ngodingo Admin'
  image: '/static-db/blog/authors/author-1.jpg'
---

![""](https://cdn-images-1.medium.com/max/1024/1*RlGZrvTvRLN1KR-DE-YucQ.png)

Pengkondisian atau percabangan merupakan salah satu bagian dari program control yang mengatur aliran berjalannya program. Pengkondisian atau percabangan adalah instruksi pada pemrograman yang berfungsi untuk menjalankan suatu blok kode berdasarkan pada kondisi tertentu yang terpenuhi.

Misalnya dalam suatu program terdapat dua kemungkinan kondisi yaitu kondisi A dan B, kedua kondisi juga memiliki syarat tertentu agar terpenuhi. Jika kondisi A terpenuhi maka blok kode A akan dieksekusi oleh program dan blok kode B tidak akan dieksekusi, begitu pula sebaliknya dengan kondisi B. Agar lebih memahami penggunaan pengkondisian dalam pemrograman, berikut ini adalah pengkondisian pada bahasa pemrograman Javascript.

### **Pengkondisian Javascript**

Pengkondisian pada Javascript sendiri tidak jauh berbeda dengan bahasa pemrograman lainnya. Pengkondisian Javascript mengekseskusi kode dimana kondisi memenuhi kondisi _true_ atau _false._ Ada beberapa format penggunaan pengkondisian :

1\. If statement

2\. If else statement

3\. If else if statement

4\. Switch statement

### **Javascript If Statement**

If statement hanya akan mengeksekusi blok kode jika expression dalam tanda kurung () bernilai _true_, sedangkan jika ekspresi bernilai _false_ maka blok kode tidak akan dieksekusi dan hanya akan diabaikan saja oleh program lalu lanjut ke baris kode berikutnya.

![""](https://cdn-images-1.medium.com/max/483/1*FmVFP2gN4LLf7HOfT5qtvA.png)

![""](https://cdn-images-1.medium.com/max/503/1*D2FpZxxfCnu2Pgr-XKNSUg.png)

### **Javascript If else Statement**

If else statement sedikit berbeda dengan if statement, bedanya adalah terdapat kondisi kedua yang akan dieksekusi jika kondisi pertama tidak terpenuhi. Jika expression pada statement if bernilai _true_ maka blok kode di dalam if akan dieksekusi sedangkan kode di dalam else diabaikan. Namun, jika expression pada if bernilai _false_ maka blok kode di dalam if diabaikan dan blok kode di dalam else akan dieksekusi oleh program.

![""](https://cdn-images-1.medium.com/max/489/1*CDLFSES1HND1gEIIBElYtw.png)

![""](https://cdn-images-1.medium.com/max/497/1*CNMJvz-Zdi7eAt14apNXsw.png)

### **Javascript If else if Statement**

If else if statement adalah pengkondisian yang digunakan ketika terdapat lebih dari dua kondisi yang akan dievaluasi. Hampir sama seperti pengkondisian if else, tetapi ada . Jika expression pada if bernilai _true_ maka blok kode di dalam if akan dieksekusi sedangkan yang lain akan diabaikan. Namun, jika expression pada if bernilai _false_ maka blok kode if akan diabaikan lalu dilanjutkan evaluasi kondisi pada else if. Jika expression pada else if bernilai _true_ maka blok kode akan dieksekusi dan yang lain akan diabaikan. Begitu seterusnya hingga jika terjadi semua statement bernilai _false_ maka otomatis blok kode pada else yang akan dieksekusi oleh program.

![""](https://cdn-images-1.medium.com/max/495/1*N4mvLQXGr9J7ehhQ4fuBrA.png)

![""](https://cdn-images-1.medium.com/max/487/1*s82sUEV6Ce19bo4PRo6MZQ.png)

### **Javascript Switch Statement**

Switch statement adalah pengkondisian yang dapat digunakan untuk mengevaluasi satu hingga beberapa kondisi. Switch statement digunakan untuk kondisi yang lebih sederhana karena hanya dapat mengevaluasi expression dengan operator perbaindingan sama dengan (==). Hampir sama seperti if else if statement, tetapi ada perbedaan pada cara kerja dan sintaksnya karena menggunakan kata kunci switch dan case.

Switch statement akan mengevaluasi nilai variabel yang ada dalam tanda kurung (). Case diikuti nilai dari variabel, jika perbandingan nilai dengan variabel tersebut bernilai _true_ maka blok kode case tersebut akan dieksekusi dan yang lain diabaikan. Break menghentikan eksekusi blok kode dari case yang bernilai _true_. Jika semua case bernilai _false_ maka otomatis blok kode pada default yang akan dieksekusi oleh program.

![""](https://cdn-images-1.medium.com/max/485/1*br-MMjg0wuwvNKl7OiKWbQ.png)

![""](https://cdn-images-1.medium.com/max/484/1*F_0GMe3QwrsXvqmrk9OzQw.png)

Perlu diperhatikan bahwa urutan evaluasi kondisi dilakukan satu persatu dari atas ke bawah, maka perlu diperhatikan lebih teliti terkait prioritas dan urutan kodisi secara logis sesuai algoritma program. Jika urutan kondisi tidak sesuai maka hasilnya program akan mengeksekusi blok kode program yang tidak seharusnnya dan program tidak berjalan sesuai dengan algoritma.