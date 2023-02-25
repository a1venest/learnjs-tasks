function filterRangeInPlace(arr, a, b){
    for(let i = 0; i< arr.Length; i++)
    {       
        if(a<=arr[i]<=b)
        {
            arr.splice(i,1);
            i--;
        }
    }
}

let array = [6,5,4,3,2,1];

filterRangeInPlace(array,2,4);

allert(array);