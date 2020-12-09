//1. Print odd numbers in an array using anonymous function 

let arr = [1,2,3,4,5,6,7];

let getPrintOddNumbers = function (arr){
    arr.forEach((ele)=>{
        if(ele % 2 !== 0){
            console.log(ele);
        }
    })
}

getPrintOddNumbers(arr);

//1. Print odd numbers in an array using IIFE

(function(arr){
    arr.forEach((ele)=>{
        if(ele % 2 !== 0){
            console.log(ele);
        }
    })
})(arr);

// Convert all the strings to title caps in a string array using anonymous function 


let arr1 = ["aventador", "laferrari", "hypersport"];

let getCaptilized = function (arr){
    arr.forEach( (ele, index) => {
        let firstLetter = ele.charAt(0).toUpperCase();
       let str =  ele.replace(ele.charAt(0), firstLetter);
        arr[index] = str;
        
    });
};
getCaptilized(arr1);
console.log(arr1);

// Convert all the strings to title caps in a string array using IIFE
let arr2 = ["thunderbird", "hornet", "meteor"];
(function(arr){ 
    arr.forEach( (ele, index) => {
        let firstLetter = ele.charAt(0).toUpperCase();
       let str =  ele.replace(ele.charAt(0), firstLetter);
        arr[index] = str;
        
    });
})(arr2);

console.log(arr2);

//Sum of all numbers in an array using anonymous function

let arr3 = [10, 20, 30, 40];

let sum = function(arr){
  let s =  arr.reduce((a,b)=>{
        return a+b;
    },0);
 return s;
}
console.log(sum(arr3));

//Sum of all numbers in an array using IIFE

(function(arr){
    let s =  arr.reduce((a,b)=>{
        return a+b;
    },0);
 console.log(s);
})(arr3);

//Return all the prime numbers in an array using anonymous function

let arr4 = [1, 2, 3, 4, 5, 6, 7, 11, 16, 20, 23];

let printPrimes = function(arr){
    
    let a = arr.filter( ele=>{
        if(ele !== 1 && ele !== 2){
            let count = 0;
            for(let i=1; i<=ele; i++){
                if(ele % i === 0){
                    count++;
                }
            }
            if(count <= 2){
                return true;
            }
        }
    })
    console.log(a);
}
printPrimes(arr4);

//Return all the prime numbers in an array using IIFE

(function(arr){
    
    let a = arr.filter( ele=>{
        if(ele !== 1 && ele !== 2){
            let count = 0;
            for(let i=1; i<=ele; i++){
                if(ele % i === 0){
                    count++;
                }
            }
            if(count <= 2){
                return true;
            }
        }
    })
    console.log(a);
})(arr4);

// Return all the palindromes in an array using anonymous function

let arr5 = ["nitin", "anil", "tenet", "kartik", "nolan"]; 

let printPalinDromes = function(arr){
    let a = arr.filter(ele=>{
        let rev = ele.split("").reverse().join("");
        if(ele===rev){
            return true;
        }
    })
    console.log(a);
}

printPalinDromes(arr5);

// Return all the palindromes in an array using IIFE

(function(arr){
    let a = arr.filter(ele=>{
        let rev = ele.split("").reverse().join("");
        if(ele===rev){
            return true;
        }
    })
    console.log(a);
})(arr5);

// Return median of two sorted arrays of same size using anonymous function

let arr6 = [10, 74, 51, 14];
let arr7 = [14, 12, 7, 8];

let getMedianOfTwoArrays = function (ar,ar1){
    let arr = ar.concat(ar1);
    arr.sort((a,b)=>{return a-b});
    if(arr.length%2 === 0){
        let index = (arr.length)/2;
        let m = (arr[index]+arr[index-1])/2;
        return m;
    } else {
    let index = (arr.length-1)/2;
        return arr[index];
    }
}
console.log(getMedianOfTwoArrays(arr6,arr7));

(function (ar,ar1){
    let arr = ar.concat(ar1);
    arr.sort((a,b)=>{return a-b});
    if(arr.length%2 === 0){
        let index = (arr.length)/2;
        let m = (arr[index]+arr[index-1])/2;
        console.log(m);
    } else {
    let index = (arr.length-1)/2;
        console.log(arr[index]);
    }
})(arr6, arr7);

// Remove duplicates from an array using anonymous function

let arr8 = [1,1,3,4,6,7,8,8,9,4,5]

let removeDups = function(arr){
    let dup = [...new Set(arr)];
    return dup;
}
console.log(removeDups(arr8));


// Remove duplicates from an array using IIFE

(function(arr){
    let dup = [...new Set(arr)];
    console.log(dup);
})(arr8)

//Rotate an array by k times and return the rotated array using anonymous function

let arr9 = [1,2,3,4,5];
let rotationCount = 2;

let rotatedArray = function(arr, k){
    for(let i=1; i<=k; i++){
        rotateArray(arr);
    }
    function rotateArray(arr1){
        let last = arr[arr.length-1];
        arr.pop();
        arr.unshift(last)
    }
    console.log(arr);
}

rotatedArray(arr9, rotationCount);

//Rotate an array by k times and return the rotated array using IIFE


let arr10 = [1,2,3,4,5,6];
(function(arr, k){
    for(let i=1; i<=k; i++){
        rotateArray(arr);
    }
    function rotateArray(arr1){
        let last = arr[arr.length-1];
        arr.pop();
        arr.unshift(last)
    }
    console.log(arr);
})(arr10, rotationCount)




