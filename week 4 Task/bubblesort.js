const test1=[ 234, 43, 55, 63, 5, 6, 235, 547 ];
const test2=[ 1, 4, 2, 5, -2, 3 ];
const test3=[ 52, 37, 63, 14, 17, 8, 6, 25 ];


function bubbleSort(list){
    /* 
    -The first loop serves as the number of iterations that the inner loop has to go through
    for all elements to be properly checked.
    -This first loop has a time complexity of O(n)
    */
    for(let i=0; i<list.length; i++){
        /*
        -The second for loop compares each element in the list and swaps their positions if the 
        preceeding element is greater than the next.
        -The second loop will perform this computation again on the next iteration of the first loop,
        doing this results in a concept of larger numbers bubbling up and smaller numbers bubbling down
        -This second loop has a time complexity of O(n)
        */
        for(let j=0;j<list.length; j++){
            if (list[j]>list[j+1]){
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
            }
        }
        
    }
    // The total time complexity for this function is O(n*n)
    return list;
}

bubbleSort(test1)
bubbleSort(test2)
bubbleSort(test3)
console.log(test1)
console.log(test2)
console.log(test3)