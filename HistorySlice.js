const { createSlice } = require('@reduxjs/toolkit');
// const { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // history: {}
    history: [],
}

const HistorySlice = createSlice({
    name: 'History',
    initialState,
    reducers: {
        addToHistory: (state, action) => {
            state.history.push(action.payload);
        },
    },
});

export const { addToHistory } = HistorySlice.actions;
export default HistorySlice.reducer;