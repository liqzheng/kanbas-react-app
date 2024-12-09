import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = db.assignments;

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment(state, action) {
      state.push(action.payload);
    },
    deleteAssignment(state, action) {
      return state.filter(assignment => assignment._id !== action.payload);
    },
    updateAssignment(state, action) {
      const index = state.findIndex(assignment => assignment._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;