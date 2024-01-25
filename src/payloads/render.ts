import { Joi } from "@com.xcodeclazz/celebrate";

export interface RenderPayload_PingRenders {}
export const RenderPayloadJoi_PingRenders = {};

export interface RenderPayload_RefreshRenders {}
export const RenderPayloadJoi_RefreshRenders = {};

export interface RenderPayload_ShowRenders {}
export const RenderPayloadJoi_ShowRenders = {};

export interface RenderPayload_DeleteRender { url: string; }
export const RenderPayloadJoi_DeleteRender = {
  url: Joi.string().required(),
};

export interface RenderPayload_CreateRender {
  url: string;
  email: string;
  capacity: number;
  serviceId: string;
  authToken: string;
  imageName: string;
  isActive: boolean;
  isLocked: boolean;
}

export const RenderPayloadJoi_CreateRender = {
  url: Joi.string().required(),
  serviceId: Joi.string().required(),
  authToken: Joi.string().required(),
  imageName: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  capacity: Joi.number().min(0).required(),
  isActive: Joi.boolean().required(),
  isLocked: Joi.boolean().required(),
};
