function insertionSort(arrayToBeSorted) {
    for (let i = 1; i < arrayToBeSorted.length; i++) {
        let key = arrayToBeSorted[i];
        let j = i - 1;
        while (j >= 0 && key > arrayToBeSorted[j]) {
            arrayToBeSorted[j + 1] = arrayToBeSorted[j];
            j--;
        }
        arrayToBeSorted[j + 1] = key;
    }
    return arrayToBeSorted;
}

function binarySum(binary1, binary2) {
    const bin1 = binary1.split("").map(v => +(v));
    const bin2 = binary2.split("").map(v => +(v));
    const sum = Array(Math.max(bin1.length, bin2.length) + 1).fill(0);
    let carry = 0;
    let i = sum.length - 1;
    while (i > 0) {
        sum[i] = bin1[i - 1] ? bin1[i - 1] : 0 + bin2[i - 1] ? bin2[i - 1] : 0 + carry;
        if (sum[i] >= 2) {
            sum[i] = sum[i] % 2;
            carry = 1;
        } else {
            carry = 0;
        }
        i--;
    }
    return sum.join("");
}

function selectionSort(arrayToBeSorted) {
    for (let i = 0; i < arrayToBeSorted.length - 1; i++) {
        let minIndex = i;
        let j = i + 1;
        while (j < arrayToBeSorted.length) {
            if (arrayToBeSorted[minIndex] > arrayToBeSorted[j]) {
                minIndex = j;
            }
            j++;
        }
        if (minIndex !== i) {
            arrayToBeSorted[minIndex] = arrayToBeSorted[minIndex] + arrayToBeSorted[i];
            arrayToBeSorted[i] = arrayToBeSorted[minIndex] - arrayToBeSorted[i];
            arrayToBeSorted[minIndex] = arrayToBeSorted[minIndex] - arrayToBeSorted[i];
        }
    }
    return arrayToBeSorted;
}


function mergeSort1(arrayToBeSorted) {
    return (function divide(dividedArray) {
        const n = dividedArray.length;
        if (n > 1) {
            return merge1(divide(dividedArray.slice(0, n / 2)), divide(dividedArray.slice(n / 2)));
        } else {
            return dividedArray;
        }
    })(arrayToBeSorted);
}

function merge1(array1, array2) {
    const mergedArray = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < array1.length || pointer2 < array2.length) {
        const ele1 = array1[pointer1];
        const ele2 = array2[pointer2];
        if (ele1 < ele2 || !ele2) {
            mergedArray.push(ele1);
            pointer1++;
        } else {
            mergedArray.push(ele2);
            pointer2++;
        }
    }
    return mergedArray;
}

function mergeSortFull(arrayToBeSorted) {
    (function mergeSort(startIndex, endIndex) {
        const n = endIndex - startIndex;
        if (n < 2) {
            return;
        }
        const midIndex = Math.round((startIndex + endIndex) / 2);
        mergeSort(startIndex, midIndex);
        mergeSort(midIndex, endIndex);
        merge(arrayToBeSorted, startIndex, midIndex, endIndex);
    })(0, arrayToBeSorted.length);
    return arrayToBeSorted;
}

function merge(arrayToBeSorted, startIndex, midIndex, endIndex) {
    let pointerL = 0;
    let pointerR = 0;
    const arrayL = arrayToBeSorted.slice(startIndex, midIndex);
    const arrayR = arrayToBeSorted.slice(midIndex, endIndex);
    while (pointerL < arrayL.length || pointerR < arrayR.length) {
        const ele1 = arrayL[pointerL];
        const ele2 = arrayR[pointerR];
        if (ele1 < ele2 || !ele2) {
            arrayToBeSorted[startIndex + pointerL++ + pointerR] = ele1;
        } else {
            arrayToBeSorted[startIndex + pointerR++ + pointerL] = ele2;
        }
    }
    arrayL.length = arrayR.length = 0;
    return arrayToBeSorted;
}

module.exports = {
    selectionSort,
    insertionSort,
    mergeSort1,
    mergeSortFull
}

