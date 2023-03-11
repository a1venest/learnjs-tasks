function getMaxSubSum() {
    let array = [];

    while(true){
        let value = prompt("Введите число:");
        if(value == null || "" || !isFinite(value)) break;
        array.push(+value);
    }

    let maxSum = 0; 
  
    for (let i = 0; i < array.length; i++) {
      let sum = 0;
      for (let j = i; j < array.length; j++) {
        sum += array[j];
        maxSum = Math.max(maxSum, sum);
      }
    }
  
    return maxSum;
  }

alert(getMaxSubSum());