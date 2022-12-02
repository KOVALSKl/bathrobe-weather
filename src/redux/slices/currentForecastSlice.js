import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

export const currentForecastSlice = createSlice({
    name: 'currentforecast',
    initialState,
    reducers: {
        updateForecast: (state, action) => {
            state.value = JSON.parse(action.payload);
        }
    }
})

export const { updateForecast } = currentForecastSlice.actions;
export default currentForecastSlice.reducer;