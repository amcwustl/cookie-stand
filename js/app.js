'use strict';

// Globals
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
let cityArr = [];

// HTML Table Start and helper fuctions

let citiesTable = document.getElementById('cities');
let chart = {};

function createHeader() {
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
}

function renderAll(){
  for (let i in cityArr){
    cityArr[i].generateCookies();
    cityArr[i].render();
  }
}

function footerRow() {
  let tableFoot = document.createElement('tr');
  citiesTable.appendChild(tableFoot);
  let footerVal = document.createElement('td');
  footerVal.innerText = 'Total';
  tableFoot.appendChild(footerVal);
  for (let i in hours){
    let footerVal = document.createElement('td');
    let hourlyCookies = 0;
    for (let j in cityArr){
      hourlyCookies += cityArr[j].cookiesArr[i];
    }
    footerVal.innerText = hourlyCookies;
    tableFoot.appendChild(footerVal);
  }
  let footerValTotal = document.createElement('td');
  let dailyCookies = 0;
  for (let i in cityArr){
    dailyCookies += cityArr[i].totalCookies;
  }
  footerValTotal.innerText = dailyCookies;
  tableFoot.appendChild(footerValTotal);
}

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

};

// executable code:

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 2.3);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
cityArr.push(seattle, tokyo, dubai, paris, lima);

createHeader();
renderAll();
footerRow();

// create graph.  Chat GPT recommended Chart.JS.  Code snippets taken from chatgpt + examination of chart.js documentation
function renderChart(){
  let chartData = {
    labels: hours,
    datasets: []
  };

  let colors = ['red','green','blue','purple','black','orange','brown'];

  for (let i in cityArr){
    let dataset = {
      label: cityArr[i].name,
      data: cityArr[i].cookiesArr,
      borderColor: colors[i],
      backgroundColor: colors[i],
      fill: false
    };
    chartData.datasets.push(dataset);
  }

  const ctx = document.getElementById('myChart');
  chart = new Chart(ctx, {
    type: 'line',
    data: chartData
  });
}
renderChart();


// add form
let button = document.querySelector('button');
button.addEventListener('click', toggleForm);

function toggleForm(){
  const form= document.getElementById('myForm');
  if (form.style.display ==='none'){
    form.style.display = 'block';
  } else {
    form.style.display='none';
  }
}

function formHandler(event) {
  let newChart = document.getElementById('chart');
  while (newChart.firstChild) {
    newChart.removeChild(newChart.firstChild);
  }
  let newCanvas = document.createElement('canvas');
  newCanvas.id = 'myChart';
  newChart.appendChild(newCanvas);

  renderChart();
}

