import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import sidebar, { sidebarState } from '@Store/slices/sidebarSlice';
import common, { CommonState } from '../slices/common';
import loader, { LoaderState } from '../slices/loader';
import auth, { authState } from '../slices/authslice';

export interface IRootReducer {
  common: CommonState;
  loader: LoaderState;
  sidebar: sidebarState;
  auth: authState;
}

const rootReducer: Reducer<
  CombinedState<IRootReducer>,
  AnyAction
> = combineReducers({
  auth,
  common,
  loader,
  sidebar,
});

export default rootReducer;
