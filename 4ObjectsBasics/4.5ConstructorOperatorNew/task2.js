function Calculator(){
    this.read() = function(){
        this.number1 = prompt("Введите первое число:");
        this.number2 = prompt("Введите второе число:");
    };
    this.sum() = function(){
        return this.number1 + this.number2;
    };
    this.mul() = function(){
        return this.number1 * this.number2;
    };
  };
  
  let calculator = new Calculator()
  calculator.read();
  
  alert( `Сумма чисел ${number1} и ${number2} = ${calculator.sum()}` );
  alert( `Произведение чисел ${number1} и ${number2} = ${calculator.mul()}` );