import * as types from "../constants/Giftcode.const";
import produce from "immer";

interface Props {
  giftlist: Array<{ id: number; code: string }>;
}

const initialState: Props = {
  giftlist: [],
};
export const giftReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_GIFT:
        if (state.giftlist.length === 0) {
          draft.giftlist = [
            {
              id: 0,
              code: action.code,
            },
          ];
        } else {
          const lastId = state.giftlist[state.giftlist.length - 1].id;
          let list = [{ id: lastId + 1, code: action.code }];
          draft.giftlist = state.giftlist.concat(list);
        }
        break;
      case types.DELETE_GIFT:
        if (state.giftlist.length === 0) {
          draft.giftlist = [];
        } else {
          draft.giftlist = state.giftlist.filter((id) => id.id != action.id)
        }
        break;
      default:
        return state;
    }
  });
