const data = [15,14,1,3,4,5,6,-3,-18,67,98,24,7,22,3,3,4,6,10,45]
let test = [5,8,7,10,12,4] 


function bubbleSort(value){
    let list=value
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