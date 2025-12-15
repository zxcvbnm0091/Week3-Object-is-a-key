// Logic Challenge Object | Part 3

// Akhirnya ketemu object


// Soal 1
function changeMe(arr) {
  // you can only write your code here!
  const currentYear = new Date().getFullYear();
  let myObj = {}
  for (item of arr) {
    myObj[`${item[0]} ${item[1]}`] = {
      "firstName": item[0],
      "lastName": item[1],
      "gender": item[2].toLowerCase() == "male" || "female" ? item[2] : "Invalid Gender",
      "age": item[3] && Number.isInteger(item[3]) ? currentYear - item[3] : "Invalid Birth Year"
    }
  }
  console.log(myObj)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""

console.log(""); // end soal 1



// Soal 2
/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/
function shoppingTime(memberId, money) {
  // you can only write your code here!
  const products = [
    { name: "Sepatu Stacatu", price: 1500000 },
    { name: "Baju Zoro", price: 500000 },
    { name: "Baju H&N", price: 250000 },
    { name: "Sweater Uniklooh", price: 175000 },
    { name: "Casing Handphone", price: 50000}
  ];
  
  const orderedProducts = products.slice().sort((a,b) => b.price - a.price)
  
  if (!memberId) return "Mohon maaf, toko X hanya berlaku untuk member saja";
  if (money < 50000) return "Mohon maaf, uang tidak cukup";
  let transaction = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney : money
  }
  
  for (product of orderedProducts) {
    if (transaction.changeMoney >= product.price) {
      transaction.listPurchased.push(product.name)
      transaction.changeMoney -= product.price;
      
    }
  }
  return transaction;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
// { memberId: '1820RzKrnWn08',
//   money: 2475000,
//   listPurchased:
//    [ 'Sepatu Stacattu',
//      'Baju Zoro',
//      'Baju H&N',
//      'Sweater Uniklooh',
//      'Casing Handphone' ],
//   changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
// { memberId: '82Ku8Ma742',
//   money: 170000,
//   listPurchased:
//    [ 'Casing Handphone' ],
//   changeMoney: 120000 }

console.log(shoppingTime('', 2475000)); // Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); // Mohon maaf, uang tidak cukup
console.log(shoppingTime()); // Mohon maaf, toko X hanya berlaku untuk member saja

console.log(""); // end soal 2



// Soal 3
/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/
function countProfit(shoppers) {
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];
  
  let products = listBarang.map(([name, price, stock]) =>
    ({ product: name, shopper: [], leftOver: stock, totalProfit: 0 })
  )
  
  shoppers.forEach((customer) => {
    let product = products.find((prod) => prod.product === customer.product)
    let productPrice = listBarang.find(([name, price, stock]) => name === customer.product)
    // console.log(product)
    // console.log(productPrice[1] * customer.amount)
    if (product && customer.amount <= product.leftOver) {
      product.shopper.push(customer.name);
      product.leftOver -= customer.amount;
      product.totalProfit += productPrice[1] * customer.amount
    }
  })
  
  return products
  
}

// TEST CASES
console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi', 'Vanessa' ],
//     leftOver: 5,
//     totalProfit: 7500000 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
  {name: 'Devi', product: 'Baju Zoro', amount: 1},
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}
]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); // []

console.log(""); // end soal 3