import { Request } from 'express';
import Joi from 'joi';

export const postInputValidation = (data: Request) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        message: Joi.string().min(3).required(),
        creator: Joi.string().min(3).required(),
        tags: Joi.array(),
        selectedFile: Joi.string().required(),
    });

    return schema.validateAsync(data);
};
