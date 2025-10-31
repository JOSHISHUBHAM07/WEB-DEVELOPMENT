// 1st
// let teas = ["green tea","black tea","chai","oolong tea"]
// let selectedTeas = []
// for (let i  = 0; i < teas.length; i++) {
//   if (teas[i] === "chai") {
//     break;
//   }
//     selectedTeas.push(teas[i])
// }
// console.log(selectedTeas);

// 2md
// let cities = ["London","New York","Paris","Berlin"];
// let visitedCities=[]

// for (let i = 0; i < cities.length; i++) {
//   if(cities[i]==="Paris"||cities==="paris"){
//     continue
//   }
//   visitedCities.push(cities[i])
// }
// console.log(visitedCities);

// let number =[1,2,3,4,5]
// let smallNumber =[]

// for (const num of number) {

//   if (num == 4) {
//     break;
//   }
//   smallNumber.push(num)
// }
// console.log(smallNumber);

// 4
// let teas =["chai","green tea","herbal tea","black tea"]
// let preferredTeas = []

// for (const name of teas) {
//   if (name === "herbal tea") {
//     continue
//   }
//   preferredTeas.push(name)
// }
// console.log(preferredTeas);

// 5th

// let citiesPopulation = {
//   London: 8900000,
//   "New York": 8400000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };
// let cityPopulation = {};
// for (const city in citiesPopulation) {
//   if (city == "Berlin") {
//     break
//   }
//   console.log(citiesPopulation[city]);
//   cityPopulation[city] = citiesPopulation[city];
// }
// console.log(cityPopulation);

// 6
// let worldCities = {
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };

// let largecities = {};

// for (const city in worldCities) {
//   if (worldCities[city]<3000000) {
//     continue
//   }
//   largecities[city]=worldCities[city]
// }
// console.log(largecities);

// 7 For Each Loop
// let teaCollection = ["green tea","black tea","chai","oolong tea"]

// let available = []

// teaCollection.forEach(function (tea)  {
//   if (tea == "chai") {
//     return
//   }
//   available.push(tea)

// });
// console.log(available);

//8th

// let worldCities = ["Berlin","Tokyo","Sydney","Paris"]

// let traveledCities =[]

// worldCities.forEach(city => {
//   if (city == "Sydney") {
//     return
//   }
//   traveledCities.push(city)
// });

// 9th

// let number = [2, 5, 7, 9];
// let doubleNumbers = [];

// for (let i = 0; i < number.length; i++) {
//   if(number[i] == 7){

//     continue
//   }
//   doubleNumbers.push(number[i]*2)
// }
// console.log(doubleNumbers);

// 10th

let myTeas = ["chai","green tea","black tea","jasmin tea","herbal tea"]
let shortTeas = []

for (const tea of myTeas) {
  if (tea.length>10) {
    break
  }
  shortTeas.push(tea)
}