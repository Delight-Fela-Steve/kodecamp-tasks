const test1=[ 234, 43, 55, 63, 5, 6, 235, 547 ];
const test2=[ 1, 4, 2, 5, -2, 3 ];
const test3=[ 52, 37, 63, 14, 17, 8, 6, 25 ];


function mergeSort(arr){
    //splits the array into two
    let half = Math.floor(arr.length/2)
    //checks if the array has only one element
    if (arr.length < 2){
        return arr;
    }
    //left half of the array
    let left = arr.splice(0,half)
    // right half of the array
    let right = arr
    //The mergeSort is called on each half of the array
    // The results of the mergeSort is taken by the merge function and combines them into a sorted array
    let fullMerge = merge(mergeSort(left),mergeSort(right))
    return fullMerge
}

function merge(left, right){
    merged=[]
    while(left.length && right.length){
        //compares the items of each list and pushes it into the merged array
        if (left[0]<right[0]){
            merged.push(left.shift())
        }else{
            merged.push(right.shift())
        }
    }
    // returns the fully sorted array gotten from the halves
    return merged.concat(left,right)
}
/* 
The time Complexit of this mergeSort function is O(nlogn) 
as there is a while loop which halves a given array on every iteration 
*/


console.log(mergeSort(test1))
console.log(mergeSort(test2))
console.log(mergeSort(test3))