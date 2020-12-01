import * as types from "../constants/Home.const";
import { LOGIN_SUCCESSED } from "../constants/Login.const";
import produce from "immer";
import { AsyncStorage } from "react-native";

interface Props {
  isAuthenticated: boolean;
  toDoList: Array<{ id: number; status: string }>;
  language: string;
  complete: number;
  uncomplete: number;
  total: number;
}

const initialState: Props = {
  isAuthenticated: false,
  toDoList: [
    { id: 0, status: "New York" },
    { id: 1, status: "Alaska" },
  ],
  language: "vi",
  complete: 0,
  uncomplete: 2,
  total: 2 ,
};
export const homeReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGOUT:
        AsyncStorage.removeItem("token");
        draft.isAuthenticated = false;
        break;
      case LOGIN_SUCCESSED:
        draft.isAuthenticated = true;
        break;
      case types.ADD_TODO:
        if (state.toDoList.length === 0) {
          draft.toDoList = [
            {
              id: 0,
              status: action.status,
            },
          ];
          draft.total = 1;
          draft.uncomplete = 1;
        } else {
          const lastId = state.toDoList[state.toDoList.length - 1].id;
          let list = [{ id: lastId + 1, status: action.status }];
          draft.toDoList = state.toDoList.concat(list);
          draft.total = state.total + 1;
          draft.uncomplete = state.uncomplete + 1;
        }
        break;
      case types.DELETE_TODO:
        if (state.toDoList.length === 0) {
          draft.toDoList = [];
          draft.total = 0;
          draft.uncomplete = 0;
        } else {
          draft.toDoList = state.toDoList.filter((id) => id.id != action.id);
          draft.total = state.total - 1;
          if (draft.uncomplete > 0) {
            draft.uncomplete = state.uncomplete - 1;
          } else {
            draft.uncomplete = 0;
          }
        }
        break;
      case types.EDIT_TODO:
        if (state.toDoList.length === 0) {
          draft.toDoList = [];
        } else {
          let list5 = state.toDoList.filter((id) => id.id != action.id);
          let list4 = [{ id: action.id, status: action.status2 }];
          draft.toDoList = list5.concat(list4);
        }
        break;
      case types.COMPLETE_TODO:
        if (state.toDoList.length === 0) {
          draft.complete = 0;
          draft.uncomplete = 0;
        } else {
          draft.complete = state.complete + 1;
          draft.uncomplete = state.uncomplete - 1;
        }
        break;
      case types.UNCOMPLETE_TODO:
        if (state.toDoList.length === 0) {
          draft.complete = 0;
          draft.uncomplete = 0;
        } else {
          draft.complete = state.complete - 1;
          draft.uncomplete = state.uncomplete + 1;
        }
        break;
      case types.LANGUAGE:
        draft.language = action.language;
        break;
      default:
        return state;
    }
  });
