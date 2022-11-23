let arr1 = [1, 2, 3]
let arr2 = [5, 6 ,7]

console.log(arr1.toString());
console.log(arr1.join(" - "));
let arr3 = arr1.concat(arr2, 4, 89, 9, 10, ["ola", "mundo"])

console.log(arr1)
console.log(arr2)
console.log(arr3)

let arrX = ["a", "b", "c"]
let arrY = [].concat(arrX)//Criando um clone da array anterior

arrY[arrY.length] = "novo valor"

console.log(arrX)
console.log(arrY)
