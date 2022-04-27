const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    let stack = new Stack()
    let map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    if(s.length === 0){
        return false;
    }
    if(s.length % 2 !== 0){
        return false;
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] in map) {
            stack.push(s[i])
            for(let j = i+1; j < s.length; j++){
                if(s[j] === map[stack.peek()]){
                    stack.pop();
                    break;
                }
            }
        }
    }
    console.log(stack.data)
    if(stack.data.length === 0){
        return true;
    } else{
        return false;
    }
}

let got = IsValidParentheses("{[()]}")
console.log(got)
module.exports = {
    IsValidParentheses
}