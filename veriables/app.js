console.log("************ Data Types ****************");

//? const ve left ecmascript ile gelmiştir var eski versiyonlardan beri bulunmaktadı //

// const fs2 = "cohort 2";
// console.log(fs2);



// const sayi = 33;
// console.log(sayi);

// ? değişkenin değerini öğrenmemizi sağlar//
// console.log(typeof sayi);
// console.log(typeof fs2);

// const sayi1 = "33";

// console.log(sayi1);
// console.log(typeof sayi1);


//? let ile sonradan değer ataması yapılabilir
// let pi;
// pi=3,14


// const s1 = "hello";
// const s2 = "eypes f2";
//  console.log(s1 + s2) //! string concatination

//  const s3 = 20;
//  const s4 = 30;
//  const s5 = true;

 //?  string bir ifade ile karşılaşana kadar doğal
 //?  halinde hareket eder string ifadeden sonra string 
 //?  concatination yaparak yan yana yazar 
//  console.log(s1 + s2 + s3 + s4 + s5);


//?  ilk değerlere string değer yazılırsa hepsini string algılar
//?  ve numberları da toplamaz 
//  console.log(s1 + s2 + s5 + s3 + s4);


//  const n1 = 5;
//  const n2 = "10";
//  console.log(n1 + n2)
//  console.log(n2 + n1)
//?  gene sayıları toplamaz


// let de const gibi yaygin kullanılan değişken tanımlama yöntemidir
// constan farkı sadece tanımlama kısmında değil istenildiği zaman değeri 
// değiştirilebilir const gibi tanımlandığı blok içerisinde geçerlidir başka
// yerlerden erişilemez (block-scoped) const kullanamadığımız durumlarda 
// değişkenin değeri sürekli değişecekse let kullanılr

// let dil ="javascript";
// console.log(dil);

// dil = "java";
// console.log(dil);

// dil = true;
// console.log(dil);
// console.log(dil ,typeof dil); //? hem değeri hemde type gösterir 

// dil = 3.14;
// console.log(dil);

// let cohort
// console.log(cohort);

// cohort = null;
// console.log(cohort);

// let  num1 = 5;
// let  num2 = 3;
// let  result = num1 + num2;
// console.log(result);

// console.log(result);
// console.log(++result);
// console.log(result++);
// console.log(result);

// count = 55;
// console.log(count)
// var ile bir değişken tanımlandığında let de olduğu gibi
// değeri sonradan değiştirilebilir var değişkenleri global 
// değişkenler gibidir let ve const ile tanımlanan değişkenler
// block scope dur yani sadece tanımlandığı block alan icerisinde gecerlidir

//? consta sonradan değer atanamaz 

// const cola = 20 ;
// const chocolate = 5 ;
// const bisquit = 15 ;
// const totalprice = cola + chocolate + bisquit;
// console.log(totalprice)

// console.log('totalprice:' , totalprice);
// console.log('totalprice:' + totalprice);
//  is nan boolean değeri gösterir 
//  boolean tru false

// const yearofbirthday = 1980;
// const name = "jane";
// console.log(name + "is" +(2024 - yearofbirthday) + "years old" )
// const data = Number(prompt('veri gir'))
// console.log(data)


// const squaree = pi * r**2;
// console.log('square of circle ${squaree}')

// const v1 = true
// const v2 = false
// console.log(null && null&& true);

// const num = Number(prompt("plase enter a number:"));

// if (num > 0){
//     console.log(`${num} is positive`);
// } else if (num < 0){
//     console.log(`${num} is negative`);
// } else {
//     console.log(`${num} is equal to zero`);
// }

const n1 = +prompt("number1:")
const n2 = +prompt("number2:")
const n3 = +prompt("number3:")

if (n1 => n2 && n1 >= n3 )  {
    console.log(`${n1} is biggest`)
}

// let biggest = n1;
//  if(n2 >= biggest ){
//     biggest = n2;
//  } else if (n3 >= biggest){
//     biggest = n3;
//  }
//  console.log(`${biggest} is biggest`)

// console.log(`the biggest ${Math.max(n1, n2, n3)} `);

// let isDelete = confirm('silmek istediğinize emin misiniz')
//  console.log(
//     isDelete ? 'silindi' : 'silinmedi'
//  )

// const date = new Date()

// 5 > 4 ? 'evet 5 büyük dörtten' : 'hayır matematiksiz'

// const date = new Date()

// let result = prompt('2 + 5 kaç yapar?', '2 + 5')
// if(result === '7'){
//     console.log('doğru cevap')
// } else{
//     console.log('yanlış cevap gardaş')
// }

// for(let is = 1; i <= 100; i++) {}
// for(let i=0;i=10;i++){
//     console.log(i);
// }

//? 1 den n e kadar toplama
// const n = Number(prompt("enter a number :"))
// let sum=0
// for(let j =1;j<n;j++){
//     sum+=j
// }
// console.log("SUM :" + sum)
//  math floor = en yakın alt sayıya
//  math ceil = en yakın üst tamsayıya yuvarlar
//  math round = ya alt ya üst hangisine yakınsa
//  math trunch = kesirli sayının tam kısmını alır
// asaal olup olmadığını anlayabiliriz 

console.log(" ***** WHİLE *****");
// let count = 0 //? başlangıç değeri
// while(count <=10) { //? koşul
//     console.log(count)
//     count++; } //? sayaç 
console.log(" ***** WHİLE SYNTAX *****")
 
// const sum = Number(prompt("lütfen 0-100 arası bir not giriniz"));
// while(sum<0 || sum>100){
//     console.log("lütfen 0-100 arası bir not giriniz")
// }
// console.log("Teşekkürler")

// count = 1;
// while(count <=10){ //! folse olur durur sınırlama olmazsa gene kısır döngü
//     console.log(count)
//     count++ //! eğer artırım fonksiyonu yazılmazsa kısır döngüye girer
// }
// let grade = Number(prompt('your grade :'))
// while(grade < 0 || grade > 100){
// console.log('grade shoul be 0-100')
// grade++
// }
// if(grade < 0 || grade > 100){
//     console.log("false number")
// }
// for(;grade < 0 || grade > 100 ;){
//     console.log('grade should be 0-100')
//     grade = Number(prompt('your grade :'))
// }
// // console.log('your grade ' , grade)
// let counter = 0
// let number = Number(prompt('your number'))
// number = number / 10
// counter ++;
// for(let i = 0; i <= 5; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }
// const names = ['Tayfun', 'ahmet',]
// for (let i = 0; i <= 4; i++){
//     console.log(names[i])
// }
// function topla(){
// let total = 0
// for (let i = 0; i < arguments.lenght; i++){
//     total += arguments[i]
// }
// return total
    
// }
// topla (2, 5, 7, 9, 10)

// console.log()

// let str1 = "hello world";
// console.log(str1);

// let nums = [1, "prototurk", true, null, 3]
// let math = Math.floor(Math.random() * 11)
// console.log(math)

//! ******************* function****************

// function printHello(){
//     console.log("Hello World")
// }
// printHello()
// function name(firstName, lastName){
// console.log(`merhaba $(firstName)`)
// }
// name("Ahmet", "Ali")

let biggest = function(s1, s2, s3){

}

let s1 = +prompt("1.sayıyı giriniz")
let s2 = +prompt("2.sayıyı giriniz")
let s3 = +prompt("3.sayıyı giriniz")
biggest(s1, s2, s3)