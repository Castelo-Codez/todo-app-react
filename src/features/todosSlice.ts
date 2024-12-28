import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";
import {RootState} from "../store/store";

type idNumber = string | string;

interface Todo {
    title: string;
    isCompleted: boolean;
    id: idNumber;
}

interface initialSt {
    array: Todo[];
    filter: string;
}

const initialState: initialSt = {
    array: window.localStorage.getItem("todos")
        ? JSON.parse(window.localStorage.getItem("todos") as string)
        : [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.array.push({
                title: action.payload,
                id: nanoid(),
                isCompleted: false,
            });
            window.localStorage.setItem("todos", JSON.stringify(state.array));
        },
        toggleTodo: (state, action: PayloadAction<idNumber>) => {
            state.array = state.array.map((todo: Todo) => {
                if (todo.id === action.payload) {
                    return {...todo, isCompleted: !todo.isCompleted};
                } else {
                    return todo;
                }
            });
            window.localStorage.setItem("todos", JSON.stringify(state.array));
        },
        removeTodo: (state, action: PayloadAction<idNumber>) => {
            state.array = state.array.filter(
                (todo: Todo) => todo.id !== action.payload
            );
            window.localStorage.setItem("todos", JSON.stringify(state.array));
        },
        clearCompleted: (state) => {
            state.array = state.array.filter((todo: Todo) => !todo.isCompleted);
            window.localStorage.setItem("todos", JSON.stringify(state.array));
        },
        updateFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
});

export const filterTodos = (state: RootState) => {
    const {filter, array} = state.todos;
    switch (filter) {
        case "all": {
            return array;
        }
        case "completed": {
            return array.filter((todo: Todo) => todo.isCompleted);
        }
        case "active": {
            return array.filter((todo: Todo) => !todo.isCompleted);
        }
    }
};

export type TodoType = Todo;
export type idNumberType = idNumber;

export const {addTodo, removeTodo, toggleTodo, clearCompleted, updateFilter} =
    todoSlice.actions;

export default todoSlice.reducer;
