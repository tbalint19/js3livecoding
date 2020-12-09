let addTwoNumbers = function(number1, number2) {
  let result = number1 + number2
  let otherResult = number1 - number2
  console.log(result)
  return result
}

let resultOfFunction = addTwoNumbers(3, 5)
console.log(resultOfFunction)

let y = resultOfFunction + 5
console.log(y)

let a = 4
let b = 1

if (b) {

} else {

}


if (true) {
  let xyz = 345

}


let myArray = [ 1, 4, 7, 3, 2 ]

for (let number of myArray) {
  let res = number + 5
}

for (let index in myArray) {
  console.log(myArray[index])
  let res = index + 5
}


let people = [
  { name: "bela", age: 20, isMarried: true },
  { name: "kazmer", age: 30, isMarried: false },
]


for (let person of people) {
  console.log("");
  console.log("-----");
  console.log(person.age)
  console.log("-----");
  console.log("");
}
