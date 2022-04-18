const data = [15,14,1,3,4,5,6,-3,67,98,24,7,22,3,3,4,6,10,45]
let test = [5,8,7,10,12,4] 



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
-It then compares all the values of the array with the reference and divides the array
into those larger than the reference to the right and those less than the reference to the left
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
    return indexTracker;
}

quickSort(data, 0, data.length-1)
console.log(data)
