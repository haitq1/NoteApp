import * as types from '../constants/Home.const';
export const logout = () => ({
  type: types.LOGOUT,
});
export const Add = (status: string) => ({
  type: types.ADD_TODO,
  status,
});
export const Delete = (id: number) => ({
  type: types.DELETE_TODO,
  id,
});
export const Complete = () => ({
  type: types.COMPLETE_TODO,
});
export const Uncomplete = () => ({
  type: types.UNCOMPLETE_TODO,
});
export const Edit = (id: number, status2: string) => ({
  type: types.EDIT_TODO,
  id,
  status2,
});
export const Language = (language: string) => ({
  type: types.LANGUAGE,
  language,
});
