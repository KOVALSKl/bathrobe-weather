import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

export const currentWeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateWeather: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateWeather } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;