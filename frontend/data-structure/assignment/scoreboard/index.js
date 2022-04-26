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
        let output = [];
        // TODO: answer here
        for(let i=0; i<this.scores.length; i++){
            let total = this.scores[i].correct*4 - this.scores[i].wrong;
            if(result.has(total)){
                result.get(total).push(this.scores[i]);
            } else{
                result.set(total, [this.scores[i]]);
                data.push(total);
            }
        }
        data = [...new Set(data)];
        data.sort((a,b)=>b-a);
        console.log(data);
        for(let i=0; i<result.size; i++){
            result.get(data[i]).sort((a, b) => {
                return b.correct - a.correct;
            });
        }
        for(let j=0; j<data.length; j++){
            for(let k=0; k<result.get(data[j]).length; k++){
                output.push(result.get(data[j])[k].name);
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
console.log(scores);
console.log(scores.topStudents());

module.exports = {
    Score,
    Scores
}
