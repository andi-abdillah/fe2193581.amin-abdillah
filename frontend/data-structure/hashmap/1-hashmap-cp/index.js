function ageDistribution(persons) {
    let result = new Map();
    // TODO: answer here
    for(let person of persons){
        if(result.has(person.age)){
           result.set(person.age, result.get(person.age)+1);
        } else{
            result.set(person.age, 1);
        }
    }
    return result
}

function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    for(let person of persons){
        if(result.has(person.age)){
              result.get(person.age).push(person);
        } else{
            result.set(person.age, [person]);
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