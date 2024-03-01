// değişkenler

var password;
console.log(password);

password="12134";
console.log(password);

yas=25;
console.log(yas);

//dğeişken tanımlama kuralları
/*
1-) değişken isimleri rakam ile başlayamaz
2-) değişken isimlerinde komut isimleri kullanuılamaz.
3-) değişken isimlerinde boşluk bırakılamaz camelCase veya _ kullanılır
4-) dğeişken isimlerinde türkçe karakter kullanılmammalı
*/

// sabitler const olarak tanımlanır.
const email="asdasda@gmail.com";
console.log(email);

let firstName="Mustafa";
console.log(typeof firstName);

let age=30;
console.log(typeof age);

let kredi_kullanimi=false;
console.log(typeof kredi_kullanimi);

let phone;
console.log(typeof phone);

let liste=["aslı","sertaç","kerem"];
console.log(typeof liste);

let address={
    city:"istanbul",
    country:"turkey",
};
console.log(typeof address);

var hesapla=function(){
return 0;
}
console.log(typeof address);

let veri;
const a=20;
const b=10;

veri=a+b;

console.log(veri);
console.log(typeof veri);


// date object

let zaman=new Date();
let birthday =new Date(1988,4,12);

// set methods

 zaman.setDate(25);
 zaman.setMonth(3);
 zaman.setFullYear(2025);
 zaman.setHours(20);


 


// get methods
console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());


console.log(zaman.getFullYear()-birthday.getFullYear());
console.log(zaman.getMonth()-birthday.getMonth());

console.log(zaman);
console.log(typeof zaman);

// numbers

let veri2;
veri2=Number("5");
veri2=parseInt("7");
veri2=parseFloat("5.12");
veri2=parseInt("5c");
veri2=parseInt("c5");
veri2=isNaN("c5");
veri2=isNaN("7");

var sayi=15.43857328934;
veri2=sayi.toPrecision(3);
veri2=sayi.toFixed(6);
veri2=Math.PI;
veri2=Math.round(3.2);
veri2=Math.ceil(3.1);
veri2=Math.floor(8.3);
veri2=Math.pow(3,2);
veri2=Math.sqrt(64);
veri2=Math.abs(-65);
veri2=Math.min(1,34,5,213,5,6);
veri2=Math.max(3,27,4324);
veri2=Math.random()*10;
veri2=Math.floor(Math.random()*10);


// strings
const name="Mustafa";
const secondName="Köroğlu";
const agee="37";

let names=["Mustafa","Kerem","Aslı","Öznur"];
let years=[1990,1999,1999,2001];
let mix=["Mustafa","Köroğlu",1999,null,undefined,["yüzme","programlama"]];
console.log(mix);
console.log(names);
console.log(names.length);
console.log(typeof names);

// get array item

console.log(names[0]);

// set array items

names[0]="Mert";
console.log(names[0]);

names[6]="Mustafa";
names[names.length]="Mahmut";

// add item
names.push("eda");
console.log(names);

//remove item
years.pop();
console.log(years);

years.shift();
console.log(years);

console.log(years);

//indexOf

 let index=names.indexOf("öznur");
console.log("index: "+ index);

names.reverse();
console.log(names);








console.log(veri2);
console.log(typeof veri2);