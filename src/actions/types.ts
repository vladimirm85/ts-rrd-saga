import {
  RequestApi,
  RequestSuccess,
  RequestFailed,
  ClearError,
  FetchAuthUser,
  FetchUsers,
  AddUser,
  DeleteUser,
  UpdateUser,
  OpenDialog,
  CloseDialog,
} from './actions';

export enum ActionTypes {
  requestApi = 'REQUEST_API',
  requestSuccess = 'REQUEST_SUCCESS',
  requestFailed = 'REQUEST_FAILED',
  clearError = 'CLEAR_ERROR',
  fetchAuthUser = 'FETCH_AUTH_USER',
  signUpAuthUser = 'SIGN_UP_AUTH_USER',
  signInWithEmailAndPassword = 'SIGN_IN_WITH_EMAIL_AND_PASSWORD',
  signInWithPopup = 'SIGN_IN_WITH_POPUP',
  signOutAuthUser = 'SIGN_OUT_AUTH_USER',
  fetchUsers = 'FETCH_USERS',
  handleFetchUsers = 'HANDLE_FETCH_USERS',
  addUser = 'ADD_USER',
  handleAddUser = 'HANDLE_ADD_USER',
  deleteUser = 'DELETE_USER',
  handleDeleteUser = 'HANDLE_DELETE_USER',
  updateUser = 'UPDATE_USER',
  handleUpdateUser = 'HANDLE_UPDATE_USER',
  openDialog = 'OPEN_DIALOG',
  closeDialog = 'CLOSE_DIALOG',
}

export type Action =
  | RequestApi
  | RequestSuccess
  | RequestFailed
  | ClearError
  | FetchAuthUser
  | FetchUsers
  | AddUser
  | DeleteUser
  | UpdateUser
  | OpenDialog
  | CloseDialog;
