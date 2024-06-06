import { createSlice } from '@reduxjs/toolkit';
import { ITasksState } from '../types';

const initialState: ITasksState = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      state.push(payload);
    },
    editTask: (state, { payload }) => {
      const index = state.findIndex((task) => task.id == payload.id);
      state[index] = payload;
    },

    deleteTask: (state, { payload }) => {
      return state.filter((task) => task.id !== payload);
    },
  },
});
export const { createTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
