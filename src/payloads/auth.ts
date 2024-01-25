import _ from "lodash";
import Joi from "joi";
import { Genders } from "../constants/users";

export interface AuthPayload_ShowCurrentUser {}
export const AuthPayloadJoi_ShowCurrentUser = {};

export interface AuthPayload_LogoutUser {}
export const AuthPayloadJoi_LogoutUser = {};

export interface AuthPayload_MakeUserAdmin {
  email: string;
  code: string;
}

export const AuthPayloadJoi_MakeUserAdmin = {
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  code: Joi.string().trim().not().empty().required(),
};

export interface AuthPayload_RemoveUserAdmin {
  email: string;
  code: string;
}

export const AuthPayloadJoi_RemoveUserAdmin = {
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  code: Joi.string().trim().not().empty().required(),
};

export interface AuthPayload_LoginUser {
  email: string;
  password: string;
}

export const AuthPayloadJoi_LoginUser = {
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(5).required(),
};

export interface AuthPayload_RegisterUser {
  password: string;
  address: string;
  country: string;
  gender: Genders;
  avatar: string;
  state: string;
  phone: string;
  email: string;
  name: string;
  city: string;
  dob: string;
}

export const AuthPayloadJoi_RegisterUser = {
  name: Joi.string().trim().not().empty().required(),
  address: Joi.string().trim().not().empty().required(),
  city: Joi.string().trim().not().empty().required(),
  state: Joi.string().trim().not().empty().required(),
  country: Joi.string().trim().not().empty().required(),
  dob: Joi.string().trim().not().empty().required(),
  gender: Joi.string().valid(..._.values(Genders)).required(),
  avatar: Joi.string().trim().not().empty().required(),
  phone: Joi.string().trim().not().empty().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(4).required(),
};
