const fs = require('fs');
const dm = require(`${__dirname}/group-by`);
const ns = require('./object-sort');
const salesDataPath = 'sales.json';

try {
  const salesDataString = fs.readFileSync(salesDataPath, { encoding: 'utf8' });
  const sales = JSON.parse(salesDataString);

  // Product having maximum Sales
  // Method 1
  let aggregatedData = dm.groupByAsList(sales, 'Company', 'Sales');
  console.log(aggregatedData);
  console.log(ns.sortNatural(aggregatedData, 'Sales', true)[0]['Company']);
  // Method2
  aggregatedData = dm.groupByAsObject(sales, 'Company', 'Sales');
  console.log(aggregatedData);
  console.log(Object.entries(aggregatedData).sort((a, b) => b[1] - a[1])[0][0]);

  // Date having maximum Sales
  // Method 1
  aggregatedData = dm.groupByAsList(sales, 'Date', 'Sales');
  console.log(aggregatedData);
  console.log(ns.sortNatural(aggregatedData, 'Sales', true)[0]['Date']);
  // Method2
  aggregatedData = dm.groupByAsObject(sales, 'Date', 'Sales');
  console.log(aggregatedData);
  console.log(Object.entries(aggregatedData).sort((a, b) => b[1] - a[1])[0][0]);

  // Product having maximum Sales
  // Method 1
  aggregatedData = dm.groupByAsList(sales, 'Product', 'Sales');
  console.log(aggregatedData);
  console.log(ns.sortNatural(aggregatedData, 'Sales', true)[0]['Product']);
  // Method2
  aggregatedData = dm.groupByAsObject(sales, 'Product', 'Sales');
  console.log(aggregatedData);
  console.log(Object.entries(aggregatedData).sort((a, b) => b[1] - a[1])[0][0]);
} catch (error) {
  console.log('Error: ', error);
}
