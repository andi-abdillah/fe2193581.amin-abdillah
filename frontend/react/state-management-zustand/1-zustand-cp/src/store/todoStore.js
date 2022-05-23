import create from 'zustand';

const useTodoStore =
// TODO: answer here
create((set) => ({
    todos: [],
    addTodo: (todo) => {
        set((state) => ({
            todos: [...state.todos, todo]
        }));
    },
    toggleTodo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    };
                }
                return todo;
            })
        }));
    },
    removeTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }));
    }
}));

export default useTodoStore;