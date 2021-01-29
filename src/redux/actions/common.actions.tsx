import { ActionCreator } from 'redux';
import { FETCH_REQUEST, FETCH_FAILURE, FetchActionTypes } from '../types';

export const request: ActionCreator<FetchActionTypes> = () => ({ type: FETCH_REQUEST });
export const failure: ActionCreator<FetchActionTypes> = (error: any) => ({ type: FETCH_FAILURE, payload: error });
