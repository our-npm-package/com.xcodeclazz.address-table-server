import _ from "lodash";
import { UserAttrs } from "../models/user";
import { UserPlayload } from "../constants/users";

export interface AuthResponse_ShowCurrentUser {
  currentUser: UserPlayload | null;
}
export interface AuthResponse_LogoutUser {}
export interface AuthResponse_MakeUserAdmin {
  message: string;
}
export interface AuthResponse_RemoveUserAdmin {
  message: string;
}
export interface AuthResponse_LoginUser extends UserAttrs {}
export interface AuthResponse_RegisterUser extends UserAttrs {}
