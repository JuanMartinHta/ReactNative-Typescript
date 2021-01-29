import {
  SAVE_TOKEN, SAVE_ISFIRSTTIME, DELETE_SESSION,
  TokenInterface,
  AppActionTypes
} from '../types';

interface AppState {
  token: TokenInterface,
  isLogged: boolean,
  isFirstTime: boolean
}

const initialState: AppState = {
  token: { access: '', refresh: '' },
  isLogged: false,
  isFirstTime: true
};

export default function appReducer(state: AppState = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.data,
        isLogged: true
      };
    case SAVE_ISFIRSTTIME:
      return {
        ...state,
        isFirstTime: action.data
      };
    case DELETE_SESSION:
      return {
        ...state,
        token: { access: '', refresh: '' },
        isLogged: false,
        isFirstTime: true
      };
    default: return state;
  }
}
