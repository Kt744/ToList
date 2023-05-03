import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  tasks:[],
};

let todolistSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = todolistSlice.actions;
export default todolistSlice.reducer;
