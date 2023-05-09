'use strict';

// Globals
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// HTML Table Start

let citiesTable = document.getElementById('cities');
let tableTitle = document.createElement('h2');
tableTitle.innerText = 'Total Sales by Location';
citiesTable.appendChild(tableTitle);
let headerRow = document.createElement('tr');
citiesTable.appendChild(headerRow);
let blankCell = document.createElement('th');
blankCell.innerText = ' ';
headerRow.appendChild(blankCell);
for (let i in hours){
  let hourHeader = document.createElement('th');
  hourHeader.innerText = hours[i];
  headerRow.appendChild(hourHeader);
}
let totalSales = document.createElement('th');
totalSales.innerText = 'Daily Location Total';
headerRow.appendChild(totalSales);

// Helper Functions
function generateCustomers(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructor

function City(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.totalCookies = 0;
  this.cookiesArr = [];
}

City.prototype.generateCookies = function() {
  let cookies = 0;
  for (let i in hours){
    cookies = Math.round(this.avgSale * generateCustomers(this.minCust, this.maxCust));
    this.cookiesArr.push(cookies);
    this.totalCookies += cookies;
  }
};

City.prototype.render = function(){
  let cityRow = document.createElement('tr');
  citiesTable.appendChild(cityRow);
  let cityName = document.createElement('td');
  cityName.innerText = this.name;
  cityRow.appendChild(cityName);
  for (let i in this.cookiesArr){
    let hourValue = document.createElement('td');
    hourValue.innerText = this.cookiesArr[i];
    cityRow.appendChild(hourValue);
  }
  let dailyTotal = document.createElement('td');
  dailyTotal.innerText = this.totalCookies;
  cityRow.appendChild(dailyTotal);
  // let cityName = document.createElement('h2');
  // cityName.innerText = this.name;
  // citiesDiv.appendChild(cityName);

  // let cityUL = document.createElement('ul');

  // citiesDiv.appendChild(cityUL);

  // for (let i in this.cookiesArr){
  //   let cityLI = document.createElement('li');
  //   cityLI.innerText = `${hours[i]}: ${this.cookiesArr[i]} cookies`;
  //   cityUL.appendChild(cityLI);
  // }
  // let totalLI = document.createElement('li');
  // totalLI.innerText = `Total: ${this.totalCookies} cookies`;
  // cityUL.appendChild(totalLI);
};


// // Objects

// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   customerArr: [],
//   cookiesArr: [],
//   totalCookies: 0,
//   customers: function() {
//     let customers = [];
//     for (let i in hours){
//       customers.push(generateCustomers(this.minCust, this.maxCust));
//     }
//     return customers;
//   },
//   cookiesSold: function(){
//     let myArr = [];
//     for (let i in this.customerArr){
//       myArr.push(Math.round(this.avgSale * this.customerArr[i]));
//     }
//     return myArr;
//   },
//   generateVals: function(){
//     this.customerArr = this.customers();
//     this.cookiesArr = this.cookiesSold();
//     this.totalCookies = totalArray(this.cookiesArr);
//   },
//   render: function(){
//     let cityName = document.createElement('h2');
//     cityName.innerText = this.name;
//     citiesDiv.appendChild(cityName);

//     let cityUL = document.createElement('ul');

//     citiesDiv.appendChild(cityUL);

//     for (let i in this.cookiesArr){
//       let cityLI = document.createElement('li');
//       cityLI.innerText = `${hours[i]}: ${this.cookiesArr[i]} cookies`;
//       cityUL.appendChild(cityLI);
//     }
//     let totalLI = document.createElement('li');
//     totalLI.innerText = `Total: ${this.totalCookies} cookies`;
//     cityUL.appendChild(totalLI);

//   }

// };

// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   customerArr: [],
//   cookiesArr: [],
//   totalCookies: 0,
//   customers: function() {
//     let customers = [];
//     for (let i in hours){
//       customers.push(generateCustomers(this.minCust, this.maxCust));
//     }
//     return customers;
//   },
//   cookiesSold: function(){
//     let myArr = [];
//     for (let i in this.customerArr){
//       myArr.push(Math.round(this.avgSale * this.customerArr[i]));
//     }
//     return myArr;
//   },
//   generateVals: function(){
//     this.customerArr = this.customers();
//     this.cookiesArr = this.cookiesSold();
//     this.totalCookies = totalArray(this.cookiesArr);
//   },
//   render: function(){
//     let cityName = document.createElement('h2');
//     cityName.innerText = this.name;
//     citiesDiv.appendChild(cityName);

//     let cityUL = document.createElement('ul');

//     citiesDiv.appendChild(cityUL);

//     for (let i in this.cookiesArr){
//       let cityLI = document.createElement('li');
//       cityLI.innerText = `${hours[i]}: ${this.cookiesArr[i]} cookies`;
//       cityUL.appendChild(cityLI);
//     }
//     let totalLI = document.createElement('li');
//     totalLI.innerText = `Total: ${this.totalCookies} cookies`;
//     cityUL.appendChild(totalLI);
//   }

// };

// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   customerArr: [],
//   cookiesArr: [],
//   totalCookies: 0,
//   customers: function() {
//     let customers = [];
//     for (let i in hours){
//       customers.push(generateCustomers(this.minCust, this.maxCust));
//     }
//     return customers;
//   },
//   cookiesSold: function(){
//     let myArr = [];
//     for (let i in this.customerArr){
//       myArr.push(Math.round(this.avgSale * this.customerArr[i]));
//     }
//     return myArr;
//   },
//   generateVals: function(){
//     this.customerArr = this.customers();
//     this.cookiesArr = this.cookiesSold();
//     this.totalCookies = totalArray(this.cookiesArr);
//   },
//   render: function(){
//     let cityName = document.createElement('h2');
//     cityName.innerText = this.name;
//     citiesDiv.appendChild(cityName);

//     let cityUL = document.createElement('ul');

//     citiesDiv.appendChild(cityUL);

//     for (let i in this.cookiesArr){
//       let cityLI = document.createElement('li');
//       cityLI.innerText = `${hours[i]}: ${this.cookiesArr[i]} cookies`;
//       cityUL.appendChild(cityLI);
//     }
//     let totalLI = document.createElement('li');
//     totalLI.innerText = `Total: ${this.totalCookies} cookies`;
//     cityUL.appendChild(totalLI);
//   }

// };

// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   customerArr: [],
//   cookiesArr: [],
//   totalCookies: 0,
//   customers: function() {
//     let customers = [];
//     for (let i in hours){
//       customers.push(generateCustomers(this.minCust, this.maxCust));
//     }
//     return customers;
//   },
//   cookiesSold: function(){
//     let myArr = [];
//     for (let i in this.customerArr){
//       myArr.push(Math.round(this.avgSale * this.customerArr[i]));
//     }
//     return myArr;
//   },
//   generateVals: function(){
//     this.customerArr = this.customers();
//     this.cookiesArr = this.cookiesSold();
//     this.totalCookies = totalArray(this.cookiesArr);
//   },
//   render: function(){
//     let cityName = document.createElement('h2');
//     cityName.innerText = this.name;
//     citiesDiv.appendChild(cityName);

//     let cityUL = document.createElement('ul');

//     citiesDiv.appendChild(cityUL);

//     for (let i in this.cookiesArr){
//       let cityLI = document.createElement('li');
//       cityLI.innerText = `${hours[i]}: ${this.cookiesArr[i]} cookies`;
//       cityUL.appendChild(cityLI);
//     }
//     let totalLI = document.createElement('li');
//     totalLI.innerText = `Total: ${this.totalCookies} cookies`;
//     cityUL.appendChild(totalLI);
//   }

// };

// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   customerArr: [],
//   cookiesArr: [],
//   totalCookies: 0,
//   customers: function() {
//     let customers = [];
//     for (let i in hours){
//       customers.push(generateCustomers(this.minCust, this.maxCust));
//     }
//     return customers;
//   },
//   cookiesSold: function(){
//     let myArr = [];
//     for (let i in this.customerArr){
//       myArr.push(Math.round(this.avgSale * this.customerArr[i]));
//     }
//     return myArr;
//   },
//   generateVals: function(){
//     this.customerArr = this.customers();
//     this.cookiesArr = this.cookiesSold();
//     this.totalCookies = totalArray(this.cookiesArr);
//   },
//   render: function(){
//     let cityName = document.createElement('h2');
//     cityName.innerText = this.name;
//     citiesDiv.appendChild(cityName);

//     let cityUL = document.createElement('ul');

//     citiesDiv.appendChild(cityUL);

//     for (let i in this.cookiesArr){
//       let cityLI = document.createElement('li');
//       cityLI.innerText = `${hours[i]}: ${this.cookiesArr[i]} cookies`;
//       cityUL.appendChild(cityLI);
//     }
//     let totalLI = document.createElement('li');
//     totalLI.innerText = `Total: ${this.totalCookies} cookies`;
//     cityUL.appendChild(totalLI);
//   }
// };
// Executable Code

// seattle.generateVals();
// tokyo.generateVals();
// dubai.generateVals();
// paris.generateVals();
// lima.generateVals();

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
let seattle = new City('Seattle', 23, 65, 6.3);
seattle.generateCookies();
seattle.render();
console.log(seattle);
