import express from "express";
import {bodyValidation} from "../validation/bodyValidation.js";
import {ChangePassDtoSchema, EmployeeDtoSchema} from "../validation/joiSchemas.js";
import * as controller from '../controllers/accountController.js';
export const accountRouter = express.Router();

accountRouter.post('/', bodyValidation(EmployeeDtoSchema), controller.hireEmployee);
accountRouter.delete('/', controller.fireEmployee);
accountRouter.patch('/', bodyValidation(EmployeeDtoSchema), controller.updateEmployee);
accountRouter.patch('/password', bodyValidation(ChangePassDtoSchema),controller.updatePassword);
accountRouter.get('/', controller.getAllEmployees);
accountRouter.get('/employee', controller.getEmployeeById);
accountRouter.patch('/set_role', controller.setRole);