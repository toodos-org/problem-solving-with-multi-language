// find second largest all same strings in an array;
const names = ['Rahima', 'Faruki', 'Karim Ullah', 'Karim', 'Fahim', 'Kariam'];


let secLongName = '';
let longName = '';

let secondNamesArr = [];

for (let i = 0; i < names.length; i++) {

    if (names[i].length > longName.length) {
        secLongName = longName;
        longName = names[i];
        secondNamesArr.push(secLongName); // push secLongName;
    }
    if ((names[i].length >= secLongName.length) && (names[i].length < longName.length)) {
        secLongName = names[i];
        secondNamesArr.push(secLongName); // push secLongName; 
    }

}


// 1st System: Use for loop. And store all secondLargest same string. In an secondLargestNames array;
const secondLargestNames = [];

for (let i = 0; i < secondNamesArr.length; i++) {
    if (secondNamesArr[i].length >= secLongName.length) {
        secondLargestNames.push(secondNamesArr[i]);
    }
}

console.log(secondLargestNames);  // output: ['Rahima', 'Karima']


// 2nd system: Use filter. And store all secondLargest same string. In an secondLargestNames array;
const secondLargestNamesTow = secondNamesArr.filter((word) => word.length >= secLongName.length);

console.log(secondLargestNamesTow);  // output: ['Rahima', 'Karima']