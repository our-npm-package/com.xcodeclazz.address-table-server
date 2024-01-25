import mongoose from "mongoose";

export enum Genders {
  Male = "male",
  Other = "other",
  Female = "female",
}

export enum Roles {
  NORMAL = 0,
  ADMIN = 69,
}

export interface UserPlayload {
  id: mongoose.Types.ObjectId;
  email: string;
  roles: Roles[];
}