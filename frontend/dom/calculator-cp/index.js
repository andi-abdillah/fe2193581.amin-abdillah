//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    document.getElementById('input').value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    if (operator == 'Del') {
        // TODO: answer here
        var del = document.getElementById('input').value.slice(0, -1);
        document.getElementById('input').value = del;
    } else if (operator == "AC") {
        // TODO: answer here
        document.getElementById('input').value = "";
    } else{
        // TODO: answer here
        document.getElementById('input').value += operator;
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    document.getElementById('input').value = eval(document.getElementById('input').value);
}