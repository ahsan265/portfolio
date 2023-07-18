import { Action } from "@ngrx/store";
import { User } from "src/app/Models/user";
import { USER_LIST_REQUEST } from "../Actions/user-actions";

export interface userReducerState {
    loading: boolean;
    loaded: boolean;
    users: User[]
}

const initialState: userReducerState = {
    loaded: false,
    loading: false,
    users: []
}
export function userReducer(state=initialState,Action:Action):User[]{
switch(Action.type)
{
case USER_LIST_REQUEST:{
    return {...state};
}
}
}