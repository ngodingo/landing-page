---
id: '2a5411a897ce'
title: 'Perulangan For, While, dan Do While pada Javascript'
date: '2023-01-30T02:51:46.000Z'
excerpt: "Setelah mempelajari tentang pengkondisian atau percabangan pada artikel sebelumnya, maka artikel kali ini akan membahas tentang perulangan. Tetapi sebelum membahas lebih lanjut tentang apa itu perulangan, mari kita mulai dengan satu pertanyaan sederhana."
tags: ['JavaScript', 'Web Development']
author: 
  name: 'Ngodingo Admin'
  image: '/static-db/blog/authors/author-1.jpg'
---

![""](https://cdn-images-1.medium.com/max/1024/1*luJMjtGODEDCIauBtv_NGg.png)

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

![""](https://cdn-images-1.medium.com/max/946/1*Nqth_IJB6Jd1ZucXl0GVYg.png)

Sintaks Perulangan For

Contoh perulangan _for_ :

![""](https://cdn-images-1.medium.com/max/960/1*KPewPv44nq0sbIxvU7Lutg.png)

Contoh Perulangan For

Output :

![""](https://cdn-images-1.medium.com/max/469/1*Cp61MAf5mdQ8DEBb3rPfjQ.png)

![""](https://cdn-images-1.medium.com/max/468/1*ZQdVeL7YebKytX1GB2Rnxw.png)

Output

### **Perulangan While**

**Perulangan while** termasuk dalam jenis _uncountable loop_. Perulangan ini lebih sederhana dibandingkan perulangan _for_, menggunakan kata kunci _while_ diikuti _expression_ kondisi dalam tanda kurung tanpa ada _init statement_ dan _post statement_. Sama seperti perulangan _for_, pengecekan kondisi pada perulangan ini dilakukan sebelum perulangan dieksekusi. Jika perulangan cukup sederhana dan hanya membutuhkan kondisi saja, maka perulangan _while_ lebih baik digunakan daripada _for_.

![""](https://cdn-images-1.medium.com/max/960/1*WnafiOJytHF2yE0dg8GF6Q.png)

Sintaks Perulangan While

Contoh perulangan _while_ :

![""](https://cdn-images-1.medium.com/max/960/1*g_BWuhKcRDchqoL-jDhGYg.png)

Contoh Perulangan While

Output :

![""](https://cdn-images-1.medium.com/max/471/1*bEaz-Vvb8TxcgX6ovvMAYg.png)

![""](https://cdn-images-1.medium.com/max/470/1*vKSpVkQwPefs05q7OWvgGw.png)

Output

### **Perulangan Do While**

**Perulangan do while** termasuk dalam jenis _uncountable loop_. Perulangan ini mirip dengan perulangan _while_, tetapi berbeda pada pengecekan kondisinya. Pengecekan kondisi pada perulangan while dilakukan di awal sebelum perulangan dan blok kode belum dieksekusi, sedangkan pada do while dilakukan setelah perulangan. Oleh karena itu pada perulangan _do while_ pasti perulangan dan blok kode dieksekusi minimal sekali sebelum pengecekan kondisi _true_ atau _false_.

![""](https://cdn-images-1.medium.com/max/960/1*m6_IRuoK4lRpVR3Ad0COqA.png)

Sintaks Perulangan Do While

Contoh perulangan _do while_ :

![""](https://cdn-images-1.medium.com/max/960/1*j1NJRL2fN8OyBTOAzzaOsw.png)

Contoh Perulangan Do While

Output :

![""](https://cdn-images-1.medium.com/max/464/1*DgD-F-6owNBzyPHeMjWOxQ.png)

![""](https://cdn-images-1.medium.com/max/458/1*mE3LflFOOvwzJEmi9NH07A.png)