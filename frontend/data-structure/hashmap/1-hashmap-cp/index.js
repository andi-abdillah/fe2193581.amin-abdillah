function ageDistribution(persons) {
    let result = new Map();
    // TODO: answer here
    let ages = [];
    for(let i=0; i<persons.length; i++){
        ages.push(persons[i].age);
    }
    for(let j=0; j<ages.length; j++){
        let age = ages[j];
        let count = 0;
        for(let k=0; k<ages.length; k++){
            if(age === ages[k]){
                count++;
            }
        }
        result.set(age, count);
    }

    return result
}

function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    let ages = [];
    for(let i=0; i<persons.length; i++){
        ages.push(persons[i].age);
    }
    for(let j=0; j<ages.length; j++){
        let age = ages[j];
        if(result.has(age)){
            let arr = result.get(age);
            arr.push(persons[j]);
            result.set(age, arr);
        } else{
            let arr = [];
            arr.push(persons[j]);
            result.set(age, arr);
        }
    }
    return result
}

let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
]

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
    ageDistribution, groupByAge
}