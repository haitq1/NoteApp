import * as types from '../constants/Giftcode.const';
export const Add = (code: string) => ({
  type: types.ADD_GIFT,
  code,
});
export const Delete = (id: number) => ({
  type: types.DELETE_GIFT,
  id,
});