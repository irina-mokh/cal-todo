import { createSlice } from '@reduxjs/toolkit';
import { TasksState } from '../types';

// export const INITIAL_TASK = {
//   id: '',
//   title: '',
//   done: false,
// };
const initialState: TasksState = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      // const store = getStore(state);
      // return store;
    },
    editTask: (state, { payload }) => {

    },

    deleteTask: (state, { payload }) => {
      
    },
  },
});
export const {
  createTask,
  editTask,
  deleteTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
