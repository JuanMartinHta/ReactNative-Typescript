export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_ISFIRSTTIME = 'SAVE_ISFIRSTTIME';
export const DELETE_SESSION = 'DELETE_SESSION';

export interface TokenInterface {
    access: string,
    refresh: string
}

interface SaveTokensAction {
    type: typeof SAVE_TOKEN,
    data: TokenInterface

}

interface SaveIsFirstTimeAction {
    type: typeof SAVE_ISFIRSTTIME,
    data: boolean

}

interface DeleteSessionInterface {
    type: typeof DELETE_SESSION
}

export type AppActionTypes = SaveTokensAction | SaveIsFirstTimeAction | DeleteSessionInterface
