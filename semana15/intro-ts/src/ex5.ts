function obtainStatistics(num1: number, num2: number): object {
    let sum: number = num1+num2
    let sub: number = num1-num2
    let mult: number = num1*num2

    let max: number = num1

    if(num2>num1){
        max = num2
        sub = num2-num1
    }

    return { 
        sum: sum, 
        subtraction: sub, 
        multiplication: mult, 
        maxNumber: max }
}

console.log(obtainStatistics(1, 2))