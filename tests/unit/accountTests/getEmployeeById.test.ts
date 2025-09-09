
import {accountServiceMongo} from "../../../src/services/accountingService/AccountServiceMongoImpl.ts";
import {EmployeeModel} from "../../../src/model/EmployeeMongoModels.ts";
jest.mock("../../../src/model/EmployeeMongoModels.ts");

describe('AccountServiceMongoImpl.getEmployeeById', () => {
    test('Failed test: employee not found', async () => {

        const service = accountServiceMongo;
        (EmployeeModel.findById as jest.Mock).mockResolvedValue(null)
        await expect(service.getEmployeeById("UNKNOWN")).rejects.toThrow(`Employee with id UNKNOWN not found`)

    })
})