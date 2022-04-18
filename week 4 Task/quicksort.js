const test1=[ 234, 43, 55, 63, 5, 6, 235, 547 ];
const test2=[ 1, 4, 2, 5, -2, 3 ];
const test3=[ 52, 37, 63, 14, 17, 8, 6, 25 ];


function quickSort(arr, start, end){
    if (start>=end){
        return;
    }
    let pivotIndex = partition(arr,start,end)
    //These are the recursive parts of the function
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)
}

/*
-This function takes the last element of an array as a refrence point(pivot). 
-It then compares all the values of the array with the reference and sorts the array
into those less than the reference to the left and those larger than the reference to the right
*/
function partition(arr,start,end){
    let pivotValue = arr[end]
    let indexTracker = start
    for (let i=start; i < end; i++){
        if (arr[i]<pivotValue){
            let temp = arr[indexTracker]
            arr[indexTracker]=arr[i]
            arr[i]=temp
            indexTracker++;
        }
    }
    let temp2=arr[indexTracker]
    arr[indexTracker]=arr[end]
    arr[end]=temp2
    //returns the position of the reference point after partitioning
    // The time complexity for this function is O(nlogn) in best case scenarios and O(n*n) in worst cases
    // The time complexit of O(nlogn) comes about due to the array being halved on each iteration
    return indexTracker;
}
quickSort(test1, 0, test1.length-1)
quickSort(test2, 0, test2.length-1)
quickSort(test3, 0, test3.length-1)
console.log(test1)
console.log(test2)
console.log(test3)