// Logic Challenge tanpa tipe data object | Part 2
// Sabar wkwk

// Soal 1
/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let arr = []
  for (let i = 1; i <= angka; i++) {
    let a = angka / i
    if (Number.isInteger(a)) {
      arr.push([a, i])
    }
  }
  let myObj = {}
  arr.forEach((sub) => {
    let digit = sub.join("").length
    myObj[digit] = myObj[digit] || []
    myObj[digit].push(sub)
  })
  
  const key = Math.min(...Object.keys(myObj))
  return key
  
  // without object
  // const digit = arr.map((sub) => sub.join("").length)
  // const minDigit = Math.min(...digit)
  // return minDigit
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log(""); // end soal 1


// Soal 2
// DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
// saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        
      }
    }
  }
  return arr.join("")
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

console.log(""); // end soal 2


// Soal 3
// TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let arr = kalimat.split("")
  let newArr = []
  arr.forEach((letter) => {
      if(letter === letter.toUpperCase()){
        newArr.push(letter.toLowerCase())
      }
      else{
        newArr.push(letter.toUpperCase())
      }
    }
  )
  return newArr.join("")
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

console.log(""); // end soal 3


// Soal 4
/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/
function checkAB(num) {
  // you can only write your code here!
  let arr = num.split(" ").join("").split("")
  let idxA = -1;
  let idxB = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      idxA = i
    }
    else if (arr[i] === "b") {
      idxB = i
    }
    if (idxA >= 0 && idxB >= 0) {
      // console.log(idxB)
      if (Math.abs(idxA - idxB) === 3) return true
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

console.log(""); // end soal 4