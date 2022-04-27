// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
    constructor() {
        // TODO: answer here
        this.size = 10;
        this.data = [];
        this.top = -1;
    }

    push(elemen) {
        // TODO: answer here
        if(this.data.length < this.size){
            this.top++;
            return this.data.push(elemen);
        }
        throw 'stack overflow';
    }

    pop() {
        // TODO: answer here
        if (this.top > -1) {
            this.top -= 1;
            return this.data.pop();
        }
        throw 'stack underflow';
    }

    peek() {
        // TODO: answer here
        if (this.top > -1) {
            return this.data[this.top];
        }
        throw 'stack is empty';
    }
}
