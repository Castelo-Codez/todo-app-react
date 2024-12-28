import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
import todoSlice from "../features/todosSlice";
export const store = configureStore({
    reducer: {
        theme: themeSlice,
        todos: todoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
