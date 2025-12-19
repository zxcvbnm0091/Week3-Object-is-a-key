// Logic Challenge Object | Part 3

// Akhirnya ketemu object

// Soal 1
function changeMe(arr) {
  // you can only write your code here!
  const currentYear = new Date().getFullYear();
  let myObj = {};
  for (item of arr) {
    myObj[`${item[0]} ${item[1]}`] = {
      firstName: item[0],
      lastName: item[1],
      gender:
        item[2].toLowerCase() == "male" || "female"
          ? item[2]
          : "Invalid Gender",
      age:
        item[3] && Number.isInteger(item[3])
          ? currentYear - item[3]
          : "Invalid Birth Year",
    };
  }
  console.log(myObj);
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
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
