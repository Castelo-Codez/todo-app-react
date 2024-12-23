import {createSlice} from "@reduxjs/toolkit";

export interface themeState {
    isDark: boolean;
}

const initialState: themeState = {
    isDark: window.localStorage.getItem("theme") ? true : false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        $changeTheme: (state: themeState) => {
            if (!state.isDark) {
                state.isDark = true;
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            } else {
                state.isDark = false;
                window.localStorage.removeItem("theme");
                document.documentElement.classList.remove("dark");
            }
        },
    },
});

export const {$changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
