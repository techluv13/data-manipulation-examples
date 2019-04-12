// GROUP BY Method 1: Aggregate Object array data and return as Object array

/**
 * Aggregate Object array data and return the aggregated values as Object array
 * @param {object[]} data Object array data
 * @param {string} keyValue Level of aggregation
 * @param {string} metric Metric to be aggregated
 * @return {object[]} aggregated values as Object array
 */
function groupBy(data, keyValue, metric) {
  return [...new Set(data.map((item) => item[keyValue]))]
      .map((key) => ({[keyValue]: key, [metric]: data.reduce((res, current) =>
        current[keyValue] === key ? res + current[metric] : res, 0)}));
}

// GROUP BY Method 2: Aggregate Object array data and return as Object

/**
 * Aggregate Object array data and return the aggregated values as a single
 * object with keys as level values
 * @param {object[]} data JSON array data
 * @param {string} key Level of aggregation
 * @param {string} metric Metric to be aggregated
 * @return {object} Aggreated object with keys as level values
 */
function groupBy2(data, key, metric) {
  return data.reduce((res, item) => ({...res, [item[key]]: res[item[key]] ?
    res[item[key]] + item[metric] : item[metric]}), {});
};

module.exports = {
  groupByAsList: groupBy,
  groupByAsObject: groupBy2,
};
