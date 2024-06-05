import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../types';

export const INITIAL_TASK = {
  id: '',
  title: '',
  done: false,
};
const initialState: Array<ITask> = [];

export const mainSlice = createSlice({
  name: 'main',
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
} = mainSlice.actions;

export default mainSlice.reducer;
