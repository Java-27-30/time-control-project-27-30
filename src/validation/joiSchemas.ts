import Joi, {string} from 'joi'


export const EmployeeDtoSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    password: Joi.string().alphanum().min(8).required(),
    id: Joi.string().length(9).required(),
});
export const ChangePassDtoSchema = Joi.object({
    id:Joi.string().length(9).required(),
    oldPassword: Joi.string().alphanum().min(8).required(),
    newPassword: Joi.string().alphanum().min(8).required(),
});