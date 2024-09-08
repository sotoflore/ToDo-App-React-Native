import React, { createContext, useState, ReactNode } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value= {{ todos, addTodo, toggleTodo, deleteTodo }}>
            { children }
        </TodoContext.Provider>
  );
};
