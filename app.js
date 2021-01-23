function newName(name){
    return {
        name: name
    };
}

const filipe = newName("Filipe");

console.log(filipe);

//use const until you can't - then it becomes let

//looping over arrays:
//for loops (let i=0; etc...)
//for of loop (let something of etc...)
//for each.... - do not return!

const array = ["Tom", "Tom2", "Tom3", "Shut up asshole", "Ass", "Butt", "Cock", "Zebra"];

array.forEach(function(element, index, array) {
    console.log("Element", element);
    console.log("Index", index);
    console.log("Array", array)
});

const newArr = [-3, -2, -1, 0,1,2,3]

//array method - map
//map is very similar to forEach
//differences are that forEach does not return, map always returns an array of the same size

console.log(newArr.map(function(){
        return false;
    })
);

//array method - filter - filters values
//loops over whole array
//returns elements that match the conditions you put in

const filteredArr = newArr.filter(function (element){
    return element > 0
});

console.log(filteredArr);

//array method - sort (alphabetical)
//sort actively changes array and returns nothing
//good to create a copy and to change that instead

array.sort(function(value1, value2){
    console.log(value1, value2)
    if(value1 < value2){
        return -1
    } else if (value2 < value1){
        return 1
    } else {
        return 0
    }
})

console.log(array);

//array method - reduce - takes array and returns 1 value
//can use to do whatever you want, basically

const shoppingCart = [
    {name:"t-shirt", price: 9.99}, 
    {name:"cheese", price: 2},
    {name:"cocaine", price: 150}
];

const totalPrice = shoppingCart.reduce(function (accumulator, currentValue){
    return accumulator + currentValue.price;
}, -150);

console.log(totalPrice)