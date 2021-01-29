import { ActionCreator } from 'redux';
import {
  SAVE_TOKEN, SAVE_ISFIRSTTIME,
  TokenInterface,
  AppActionTypes
} from '../types';
import { request, failure } from './common.actions';
import { sessionServices } from '../../services';

const saveToken: ActionCreator<AppActionTypes> = (data: TokenInterface) => ({
  type: SAVE_TOKEN,
  data
});

const saveIsFirstTime: ActionCreator<AppActionTypes> = (data: boolean) => ({
  type: SAVE_ISFIRSTTIME,
  data
});

export default function login(email: string, password: string) {
  return async (dispatch: any) => {
    dispatch(request());
    try {
      const response = await sessionServices.login({ email, password });
      dispatch(saveToken(response));
    } catch (error) {
      dispatch(failure('Error login'));
    }
  };
}
