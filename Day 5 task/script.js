
// Question : 01

// a:

let odd = [1,2,3,4,5,6,7,8,9,10];
let res = [];
let Odd = function (odd){
    for(let i=0; i<odd.length; i++){
        if(odd[i]%2!==0){
            res.push(odd[i])
        }
    }
    return res;
}
console.log(Odd(odd));

// Output :  [1, 3, 5, 7, 9]

//-------------------------------------------------------//

// b:

let string = ["convert all the strings"];
let cap = string.toString().split(" ");
let convert = function (cap){
    for(let i=0; i<cap.length; i++){
        cap[i] = cap[i].charAt(0).toUpperCase() + cap[i].slice(1);
    }
    return cap.join(" ");
}
console.log(convert(cap));

// Output : Convert All The Strings

//-------------------------------------------------------//

// c:

let number1 = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let Sum = function (number1){
    for(let i=0; i<number1.length; i++){
        sum = sum + number1[i];
    }
    return sum;
}
console.log(Sum(number1));

// Output : 55

//-------------------------------------------------------//

// d:

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let prime = (arr3) => {
let res3 = [];
    for(let v=1; v<arr3.length; v++){
        let num = true;
        for(let i=2; i<=arr3[v]-1; i++){
         if(arr3[v]%i===0){
             num = false;
         }
        }
        if(num===true){
         res3.push(arr3[v]);
        }
    }
    return res3;
}
console.log(prime(arr3));

Output :  [2, 3, 5, 7]

//-------------------------------------------------------//

// e:

let rem1,temp1,result1=0;
number1 = 144441;
temp1 = number1;
let num1 = function(temp1){
    while(number1>0){
        rem1 = number1 % 10;
        number1 = parseInt(number1/10);
        result1 = result1 * 10 + rem1;
    }
    if(result1==temp1){
       return(result1+" is palindrome");
    }
    else{
        return(result1+" is not palindrome");
    }
}
console.log(num1(temp1));

//Output : 144441 is palindrome

//-------------------------------------------------------//

// f:

//-------------------------------------------------------//

// g:

let number2 = [55,77,88,99,44,55,54,32,22,88,44];
let res1 = [];
let duplicat = function(number2){
        for(let i of number2){
            if(res1.indexOf(i)===-1){
                res1.push(i);
            }
        }
        return res1;
}
console.log(duplicat(number2));

// Output : [55, 77, 88, 99, 44, 54, 32, 22]

//-------------------------------------------------------//

// h:

//-------------------------------------------------------//

// Question :03

// a:

let odd1 = (arr)=>{
   let res = [];
   for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        res.push(arr[i]);
    }
   }
   return res;
}
console.log(odd1([1,2,3,4,5,6,7,8,9,10]));

// Output : [1, 3, 5, 7, 9]

//-------------------------------------------------------//

// b:

let caps1 = ["convert all the strings"];
let caps = caps1.toString().split(" ");
let convert1 = (caps) => {
    for(let i=0; i<caps.length; i++){
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
     }
    return caps.join(" ");
}
console.log(convert1(caps));

// Output : Convert All The Strings

//-------------------------------------------------------//

// c:

let number4 = [22,44,55,77,1];
let sum3 = 0;
let array = (number4) => {
   for(let i=0; i<number4.length; i++){
     sum3 = sum3 + number4[i];
    }
    return sum3;
}
console.log(array(number4));

// Output : 199

//-------------------------------------------------------//

// d:

let arr = [1,2,3,4,5,6,7,8,9,10];
let prime1 = (arr) => {
let res2 = [];
    for(let v=1; v<arr.length; v++){
        let num = true;
        for(let i=2; i<=arr[v]-1; i++){
         if(arr[v]%i===0){
             num = false;
         }
        }
        if(num===true){
         res2.push(arr[v]);
        }
    }
    return res2;
}
console.log(prime1(arr));

//Output :  [2, 3, 5, 7]

//-------------------------------------------------------//

// e: 

let rem,temp,result=0,number;
number = 1331;
temp = number;
let num = (temp)=>{
    while(number>0){
        rem = number % 10;
        number = parseInt(number/10);
        result = result * 10 + rem
    }
    if(result==temp){
       return(result+" is palindrome");
    }
    else{
        return(result+" is not palindrome");
    }
}
console.log(num(temp));

//-------------------------------------------------------//

