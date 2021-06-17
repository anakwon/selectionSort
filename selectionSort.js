//Find minimum and swap it in the beinning of the element

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        var minimum = i;

       for (let j = i+1; j < arr.length; j++){
           if (arr[j] < arr[minimum]){
               minimum = j;
           }
           if ( i !== minimum) {
               console.log(i, minimum);
               let temp = arr[i];
               arr[i] = arr[minimum];
               arr[minimum] = temp;
           }
       }
    }

    return arr;
}


selectionSort([0,2,34,22,10,19,17])