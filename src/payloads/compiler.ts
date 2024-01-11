import { ILanguage } from "@com.xcodeclazz/monolithic-common";
import { Joi } from "@com.xcodeclazz/celebrate";
import _ from "lodash";

export interface CompilerPayload_Compiler {
  lang: ILanguage;
  payload: {
    sources: { name: string; content: string; main: boolean; }[];
    input?: string;
  };
}

export const CompilerPayloadJoi_Compiler = {
  lang: Joi.string().valid(..._.values(ILanguage)).required(),
  payload: Joi.object({
    input: Joi.string().allow("").optional(),
    sources: Joi.array().items(Joi.object({
          name: Joi.string().required(),
          content: Joi.string().required(),
          main: Joi.boolean().required().default(false),
        })).min(1).required(),
  }).required(),
};
