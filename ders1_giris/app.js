/*
KONSOL
*/

/*
console.log("Hello JavaScript");
console.log("Hello");
alert("Dikkat");
console.warn("Bu bir uyaridir...");
console.error("Bu bir hatadir...");
prompt("Adinizi Giriniz");
*/

/*
==============degisken tanimlama================

===========VAR================

? Ancak, modern JS var keyword’unun kullanımı azaldı.
? Çünkü, var global değişken gibi düşünülebilir.
? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.

*/

var isim = "ipek";
console.log(typeof isim);
isim = 3.14;
console.log(typeof isim);

/*
==============CONST===============

TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
! CONST: Sadece başlangıçta değer atanabilir.
! Sonradan değeri değiştirilemez (non-primitive’ler hariç).mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. 
! çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

*/

const piSayisi = 3.14;
//piSayisi = 3.14;

const isim1 = "Osman";
console.log(typeof isim1);

/*
! const number;  ---> hatali yazim
number=4;
*/

/*
==============LET=============
*/

let fiyat;
fiyat = 10;
console.log(typeof fiyat);

fiyat = "Erdem";
console.log(typeof fiyat);

console.log(fiyat);

/*
String tanimlamak icin 3 farkli karakter kullanilabilir.
*/

let name1 = "Alaattin";
let name2 = "Faruk";
let name3 = `Oguzhan`;

console.log(name1 + ` ` + name2 + ` ` + name3);
