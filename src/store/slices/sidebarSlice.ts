/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type sidebarTypeObj = {
  id: number;
  name: string;
  path: string;
  iconName: string;
};

export interface sidebarState {
  sidebarList: sidebarTypeObj[];
  activeState: number;
}

const initialState: sidebarState = {
  sidebarList: [
    {
      id: 1,
      name: 'Dashboard',
      path: '/',
      iconName: 'dashboard',
    },
    {
      id: 2,
      name: 'Task Board',
      path: '/task-board',
      iconName: 'task',
    },
    {
      id: 3,
      name: 'Completed',
      path: '/',
      iconName: 'check_circle',
    },
    {
      id: 4,
      name: 'In Progress',
      path: '/',
      iconName: 'timer',
    },
    {
      id: 5,
      name: 'Todo',
      path: '/',
      iconName: 'assignment',
    },
  ],
  activeState: 1,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActiveState(state, action) {
      state.activeState = action.payload;
    },
    deleteId() {},
  },
});

export { sidebarSlice };
export default sidebarSlice.reducer;
