function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [5,4,3,2,1];
  shuffle(arr);
  alert(arr);