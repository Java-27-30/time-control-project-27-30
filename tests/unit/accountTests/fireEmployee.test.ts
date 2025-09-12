

import {accountServiceMongo} from "../../../src/services/accountingService/AccountServiceMongoImpl.ts";


describe("AccountServiceMongoImpl.fireEmployee", () => {
    const service = accountServiceMongo;

    const mockEmployee = {
        _id: "123",
        firstName: "MockEmp",
        hash: "23498",
        lastName: "MOCK",
        roles: 'crew',
        table_num: "tab_num"
    };

    const mockFiredEmployee = {
        firstName: "MockEmp",
        lastName: "MOCK",
        _id: "123",
        table_num:"tab_num",
        fireDate :"now",
    }
})