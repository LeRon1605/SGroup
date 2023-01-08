const repeatingLetter = (str) => {
    let result = "";
    for (let i = 0;i < str.length;i++) {
        result += str[i] + str[i];
    }
    return result;
};

const onlineShopping = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum > 50;
};  

console.log(repeatingLetter("Hehe"));
console.log(onlineShopping({a: 3, b: 57}));
console.log("Hehe".split('').map(element => element.repeat(2)).join(''));
console.log(Object.values({ a: 3, b: 57}).reduce((res, current) => res + current) > 50); 