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


function mergeSort(arrayToBeSorted) {
    return (function divide(dividedArray) {
        const n = dividedArray.length;
        if (n > 1) {
            return merge(divide(dividedArray.slice(0, n / 2)), divide(dividedArray.slice(n / 2)));
        } else {
            return dividedArray;
        }
    })(arrayToBeSorted);
}

function merge(array1, array2) {
    const mergedArray = [];
    let pointer1 = 0;
    let pointer2 = 0;
    console.log('COmparing arrays', array1, array2);
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

// console.log(selectionSort([50, 200, 40, 60, 10, 30]));
// console.log(binarySum("1011", "111"));
// console.log(merge([1, 2, 9], [3, 4, 4]));
console.log(mergeSort1([5,3,8,2]));