import { combineReducers } from 'redux';
import SessionReducer from './session.reducer';

export const rootReducer = combineReducers({
  session: SessionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
