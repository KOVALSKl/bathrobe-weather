import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 'Bebra'
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;