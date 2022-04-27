module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.data = [];
        this.undoStack = [];
        this.redoStack = [];
    }

    write(c) {
        // TODO: answer here
        this.data.push(c);
        this.undoStack.push(c);
    }

    read() {
        // TODO: answer here
        return this.data.join('');
    }

    undo() {
        // TODO: answer here
        if(this.data.length > 0){
            this.undoStack.pop();
            this.redoStack.push(this.data.pop());
        }
    }
    
    redo() {
        // TODO: answer here
        if(this.redoStack.length > 0){
            this.undoStack.push(this.redoStack[-1]);
            this.data.push(this.redoStack.pop());
        }
    }
}

// let te = new TextEditor()
// te.write("a")
// console.log(te.undoStack)
// te.undo()
// console.log(te.redoStack)
// te.redo()
// console.log(te.data)
// let output = te.read()
// console.log(output)
// console.log(te.undoStack.length)
// console.log(te.redoStack.length)