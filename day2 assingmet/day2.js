let name = "sugesh";
console.log(name)

// method of string and array

let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");
console.log(str)
console.log(pos)


let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop())

fruits.unshift("pineapple");
console.log(fruits);



function greetPerson(drink){
    if (drink == 21){
        var greet = "can drink";
    }else{
        var greet ="cannot drink";
    }console.log(greet);
   
}
greetPerson(22);