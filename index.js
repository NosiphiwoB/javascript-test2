const getHighestNumber = (array) =>{
return Math.max.apply(Math, array);
}

console.log(getHighestNumber([1, 3 , 10 , 12])) 





const calculateSumOfList = (array) => {
  return array.map(item => item.score).reduce((prev, next) => prev + next);
}

console.log(calculateSumOfList([{score: 1 } ,{score: 2} ,{score: 5} , {score: 6} ,{score: 5}])) 




const removeObjectBasedOnId = (array , id) => {
    const removeObject = array.findIndex((remove) => remove.id === id);
    array.splice(removeObject, 1);
  
    return array;
}

console.log(removeObjectBasedOnId([{id:1 , name:'rocky'} , {id:2 , name:'smith'},{id:3 , name:'thabo'}] , 2)) 




const removeAllStrings = (array) => {
    let newArr = [ ];
    for (let i = 0; i < array.length; i ++) {
        !isNaN(array[i]) ? newArr.push(array[i]) : ''
    }
    return newArr
}


console.log(removeAllStrings(['b' , 11 , 'smith', 2 , 'van' , 88, 22])) 




const getTotalTwins = (array) => {
}
console.log(getTotalTwins([1 , 3 , 'b' , 'b' , 2 , 'w' , 1 , 1])) 
// should return 2



const createArrayBasedOnNumber = (value) => {
let n = 11;
return Array.apply(null, {length: n}).map(Number.call, Number)
}

console.log(createArrayBasedOnNumber(11)) 






const addItemBeginOfList = (array , value) => {
return array=([value, ...array])
}

console.log(addItemBeginOfList([2 , 4 , 6], 5)) 

















