import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authTypes {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        email: string;
        token: string;
    } | null;
}
const initialState: authTypes = {
    isAuthenticated: false,
    user: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<authTypes | any>) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
