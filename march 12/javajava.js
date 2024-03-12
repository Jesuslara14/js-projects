function farenheit(celsius){
    return (celsius * 1.8) + 32;
}

function isLeapYear(year){
    return ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0));
}

function factorial(term){
    let result = 1;
    for(let i = 0; i < term; i++){
        result *= term - i;
    }
    return result;
}

function programFour(){
    for (let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
            continue
        } else if (i % 3 == 0) {
            console.log("Fizz")
            continue
        } else if (i % 5 == 0) {
            console.log("Buzz")
            continue
        }
        console.log(i)
    }
}

function getNaturalSum(n){
    let result = 0;
    for(let i = 0; i < n; i++){
        result += n - i;
    }
    return result;
}

function programSevenPointFive(exp){
    exp = exp.toLowerCase();
    switch(exp){
        case 'cookies':
            return 'Cookies cost 100 rupees';
        case 'milk':
            return 'Milk cost 60 rupees';
        case 'fruits':
            return 'Fruits cost 300 rupees';
        case 'corn flakes':
            return 'Corn Flakes cost 150 rupees';
        default:
            return `${exp} is not available right now`;
    }
}