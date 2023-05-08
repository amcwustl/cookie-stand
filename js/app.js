'use strict';

// Globals
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
// Helper Functions
function generateCustomers(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function totalArray(myArray){
  let x = 0;
  for (let i in myArray){
    x += myArray[i];
  }
  return x;
}


// Objects

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customerArr: [],
  cookiesArr: [],
  totalCookies: 0,
  customers: function() {
    let customers = [];
    for (let i in hours){
      customers.push(generateCustomers(this.minCust, this.maxCust));
    }
    return customers;
  },
  cookiesSold: function(){
    let myArr = [];
    for (let i in this.customerArr){
      myArr.push(Math.round(this.avgSale * this.customerArr[i]));
    }
    return myArr;
  },
  generateVals: function(){
    this.customerArr = this.customers();
    this.cookiesArr = this.cookiesSold();
    this.totalCookies = totalArray(this.cookiesArr);
  }

};
seattle.generateVals();
console.log(seattle.customerArr);
console.log(seattle.cookiesArr);
console.log(seattle.totalCookies);

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customerArr: [],
  cookiesArr: [],
  totalCookies: 0,
  customers: function() {
    let customers = [];
    for (let i in hours){
      customers.push(generateCustomers(this.minCust, this.maxCust));
    }
    return customers;
  },
  cookiesSold: function(){
    let myArr = [];
    for (let i in this.customerArr){
      myArr.push(Math.round(this.avgSale * this.customerArr[i]));
    }
    return myArr;
  },
  generateVals: function(){
    this.customerArr = this.customers();
    this.cookiesArr = this.cookiesSold();
    this.totalCookies = totalArray(this.cookiesArr);
  }

};

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  customerArr: [],
  cookiesArr: [],
  totalCookies: 0,
  customers: function() {
    let customers = [];
    for (let i in hours){
      customers.push(generateCustomers(this.minCust, this.maxCust));
    }
    return customers;
  },
  cookiesSold: function(){
    let myArr = [];
    for (let i in this.customerArr){
      myArr.push(Math.round(this.avgSale * this.customerArr[i]));
    }
    return myArr;
  },
  generateVals: function(){
    this.customerArr = this.customers();
    this.cookiesArr = this.cookiesSold();
    this.totalCookies = totalArray(this.cookiesArr);
  }

};

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  customerArr: [],
  cookiesArr: [],
  totalCookies: 0,
  customers: function() {
    let customers = [];
    for (let i in hours){
      customers.push(generateCustomers(this.minCust, this.maxCust));
    }
    return customers;
  },
  cookiesSold: function(){
    let myArr = [];
    for (let i in this.customerArr){
      myArr.push(Math.round(this.avgSale * this.customerArr[i]));
    }
    return myArr;
  },
  generateVals: function(){
    this.customerArr = this.customers();
    this.cookiesArr = this.cookiesSold();
    this.totalCookies = totalArray(this.cookiesArr);
  }

};

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  customerArr: [],
  cookiesArr: [],
  totalCookies: 0,
  customers: function() {
    let customers = [];
    for (let i in hours){
      customers.push(generateCustomers(this.minCust, this.maxCust));
    }
    return customers;
  },
  cookiesSold: function(){
    let myArr = [];
    for (let i in this.customerArr){
      myArr.push(Math.round(this.avgSale * this.customerArr[i]));
    }
    return myArr;
  },
  generateVals: function(){
    this.customerArr = this.customers();
    this.cookiesArr = this.cookiesSold();
    this.totalCookies = totalArray(this.cookiesArr);
  }
};
// Executable Code