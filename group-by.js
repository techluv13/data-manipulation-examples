// GROUP BY Method 1: Aggregate Object array data and return as Object array

/**
 * 
 * @param {object[]} data Object array data 
 * @param {string} keyValue Level of aggregation
 * @param {string} metric Metric to be aggregated
 */
function maximumSales(data, keyValue, metric) {
    return [...new Set(data.map(item => item[keyValue]))]
    .map(key => ({[keyValue]: key, [metric]: data.reduce((res, current) => current[keyValue] === key ? res + current[metric]: res, 0)}))
    .sort((res, current) => current[metric] - res[metric])[0][keyValue];
}

// GROUP BY Method 2: Aggregate Object array data and return as Object

/**
 * 
 * @param {object} data JSON array data
 * @param {string} key Level of aggregation
 * @param {string} metric Metric to be aggregated
 */
function maximumSales2(data, key, metric) {
    return Object.entries(data.reduce((res, item) => ({...res, [item[key]]: res[item[key]] ? res[item[key]] + item[metric] : item[metric]}), {})).sort((a, b) => b[1] - a[1])[0][0];
};

// Dummy Object Array with Sales data

const sales = [
    {
        Company: 'HP',
        Product: 'Keyboard',
        Sales: 7000,
        Date: '2019-03-01'
    },
    {
        Company: 'Dell',
        Product: 'Keyboard',
        Sales: 800,
        Date: '2019-03-02'
    },
    {
        Company: 'HP',
        Product: 'Keyboard',
        Sales: 500,
        Date: '2019-03-01'
    },
    {
        Company: 'Dell',
        Product: 'Keyboard',
        Sales: 700,
        Date: '2019-03-01'
    },
    {
        Company: 'Lenovo',
        Product: 'Keyboard',
        Sales: 500,
        Date: '2019-03-04'
    },
    {
        Company: 'HP',
        Product: 'Keyboard',
        Sales: 500,
        Date: '2019-03-01'
    },
    {
        Company: 'HP',
        Product: 'Keyboard',
        Sales: 700,
        Date: '2019-03-01'
    },
    {
        Company: 'Dell',
        Product: 'Keyboard',
        Sales: 800,
        Date: '2019-03-02'
    },
    {
        Company: 'Lenovo',
        Product: 'Keyboard',
        Sales: 500,
        Date: '2019-03-01'
    },
    {
        Company: 'Apple',
        Product: 'Keyboard',
        Sales: 900,
        Date: '2019-03-01'
    },
    {
        Company: 'Lenovo',
        Product: 'Keyboard',
        Sales: 50000,
        Date: '2019-03-04'
    },
    {
        Company: 'HP',
        Product: 'Keyboard',
        Sales: 500,
        Date: '2019-03-01'
    }
]

// Product having maximum Sales
// Method 1
console.log(maximumSales(sales, 'Company', 'Sales'));
// Method2
console.log(maximumSales2(sales, 'Company', 'Sales'));

// Date having maximum Sales
// Method 1
console.log(maximumSales(sales, 'Date', 'Sales'));
// Method 2
console.log(maximumSales2(sales, 'Date', 'Sales'));

// Product having maximum Sales
// Method 1
console.log(maximumSales(sales, 'Product', 'Sales'));
// Method 2
console.log(maximumSales2(sales, 'Product', 'Sales'));