import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import sidebar, { sidebarState } from '@Store/slices/sidebar';
import common, { CommonState } from '../slices/common';
import loader, { LoaderState } from '../slices/loader';

export interface IRootReducer {
  common: CommonState;
  loader: LoaderState;
  sidebar: sidebarState;
}

const rootReducer: Reducer<
  CombinedState<IRootReducer>,
  AnyAction
> = combineReducers({
  common,
  loader,
  sidebar,
});

export default rootReducer;
