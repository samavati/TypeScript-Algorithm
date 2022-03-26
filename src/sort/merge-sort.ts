/**
 * Merges two sub-arrays of arr[].
 * First subarray is arr[l..m]
 * Second subarray is arr[m+1..r]
 * @param arr Array which we attempt to sort
 * @param l index of the first element
 * @param m index of the middle element
 * @param r index of the last element
 */
const merge = (arr: number[], l: number, m: number, r: number) => {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

/**
 * sorts a given array with merge sort algorithm.
 * this algorithm manipulates the original array 
 * @param arr Given array to sort
 * @param l index of first element default is 0.
 * @param r index of last element default is arr.length - 1.
 */
export const mergeSort = (arr: number[], l: number = 0, r: number = arr.length - 1) => {
    if (l >= r) {
        return; //returns recursively
    }
    var m = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}