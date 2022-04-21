class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name;
        this.correct = correct;
        this.wrong = wrong;
        this.empty = empty;
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores;
    }

    topStudents() {
        // TODO: answer here
        let result = new Map();
        let data = [];
        let temp = [];
        for(let i=0; i<this.scores.length; i++){
            data.push(this.scores[i].correct*4-this.scores[i].wrong);
        }
        console.log(data);
        for(let j=0; j<data.length; j++){
            let correct = data[j];
            if(result.has(correct)){
                let arr = result.get(correct);
                arr.push(this.scores[j]);
                result.set(correct, arr);
            } else{
                let arr = [];
                arr.push(this.scores[j]);
                result.set(correct, arr);
                temp.push(correct);
            }
        }
        for(let i=0; i<result.size; i++){
            result.get(temp[i]).sort((a, b) => {
                return b.correct - a.correct;
            });
        }
        temp.sort((a,b)=>b-a);
        let output = [];
        for(let j=0; j<temp.length; j++){
            for(let k=0; k<result.get(temp[j]).length; k++){
                output.push(result.get(temp[j])[k].name);
            }
        }
        console.log(result);
        return output;
    }
}


let data = []
let total = 20

for (let i = 0; i <= total; i++) {
    for (let j = 0; j <= total - i; j++) {
        let correct = i
        let wrong = j
        let empty = total - correct - wrong

        data.push(new Score(correct+"-"+wrong+"-"+empty, correct, wrong, empty))
    }
}
let scores = new Scores(data)
console.log(scores.topStudents());

module.exports = {
    Score,
    Scores
}
