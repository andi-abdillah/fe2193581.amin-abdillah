// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

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
}
