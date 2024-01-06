import { Genders, Roles } from "@com.xcodeclazz/monolithic-common";

export interface UserAttrs {
  address: string;
  country: string;
  gender: Genders;
  avatar: string;
  phone: string;
  state: string;
  email: string;
  name: string;
  city: string;
  dob: string;
  roles?: Roles[];
  password?: string;
  is_banned?: boolean;
}
