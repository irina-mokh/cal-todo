import { createSlice } from '@reduxjs/toolkit';
import { ITasksState } from '../types';

// export const INITIAL_TASK = {
//   id: '',
//   title: '',
//   done: false,
// };
const initialState: ITasksState = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      state.push(payload);
    },
    editTask: (state, { payload }) => {},

    deleteTask: (state, { payload }) => {},
  },
});
export const { createTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
