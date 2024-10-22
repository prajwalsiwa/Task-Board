import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import common, { CommonState } from '../slices/common';
import loader, { LoaderState } from '../slices/loader';

export interface IRootReducer {
  common: CommonState;
  loader: LoaderState;
}

const rootReducer: Reducer<
  CombinedState<IRootReducer>,
  AnyAction
> = combineReducers({
  common,
  loader,
});

export default rootReducer;
