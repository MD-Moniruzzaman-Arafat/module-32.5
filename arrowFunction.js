// 1 parameter
// const divition = n => n / 5;
// console.log(divition(10));

// 2 parameter 
/* const multiPly = (n1, n2) => {
    const add = n1 + n2;
    const mul = add * 2;
    return mul;
}
const result = multiPly(5, 5);
console.log(result); */

// 3 parameter with default parameter
const multi = (n1, n2, n3 = 4) => n1 * n2 * n3;
console.log(multi(2, 2, 2));
