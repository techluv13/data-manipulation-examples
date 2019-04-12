/**
 * 
 * @param {object[]} objectList List of objects to be sorted
 * @param {string} attribute Attribute to be sorted by
 * @param {boolean} natural Flag specifying whether natural sorting
 */
function natsort(objectList, attribute, natural = false) {
    let sortedList = objectList;
    if (objectList && objectList.length && attribute in objectList[0]) {
        sortedList = objectList.sort((a, b) => compareValues(a[attribute], b[attribute], natural));
    } else {
        console.error('Object list empty or attribute not present in the object');
    }
    return sortedList;
}

/**
 * 
 * @param {object} value1 First Object
 * @param {object} value2 Second Object
 * @param {boolean} natural Flag specifying whether natural sorting
 */
function compareValues(value1, value2, natural = false) {
    const digitMatchRegex = /\d+/g;
    const type1 = Object.prototype.toString.call(value1);
    const type2 = Object.prototype.toString.call(value2);
    if (type1 === '[object String]' && type2 === '[object String]') {
        if (natural) {
            const numericalValue1 = value1.match(digitMatchRegex) ? (value1.match(digitMatchRegex)[0] ? +value1.match(digitMatchRegex)[0] : 0) : 0;
            const numericalValue2 = value2.match(digitMatchRegex) ? (value2.match(digitMatchRegex)[0] ? +value2.match(digitMatchRegex)[0] : 0) : 0;
            return numericalValue1 - numericalValue2;
        }
    }
    return value1 > value2 ? 1 : -1;
}
