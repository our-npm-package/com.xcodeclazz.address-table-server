import { RenderAttrs } from "../models/render";

export interface RenderResponse_PingRenders { ack: string; }
export interface RenderResponse_DeleteRender { url: string; }
export interface RenderResponse_RedeployRenders { message: string; }
export interface RenderResponse_ShowRenders { renders: RenderAttrs[]; }
export interface RenderResponse_ShowDeadRenders { renders: RenderAttrs[]; }
export interface RenderResponse_ShowCountRenders {
  state: {
    id: string;
    count: number;
  }[];
}
export interface RenderResponse_CreateRender {
  id?: string;
  url: string;
  email: string;
  tags: string[];
  capacity: number;
  serviceId: string;
  authToken: string;
  imageName: string;
  isActive: boolean;
  isLocked: boolean;
}
