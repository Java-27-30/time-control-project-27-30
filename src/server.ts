import express from 'express';
import {configuration} from "./config/timeControlConfig.js";
import {errorHandler} from "./errorHandler/errorHandler.js";
import * as fs from "node:fs";
import morgan from "morgan";
import {accountRouter} from "./routes/accountRouter.js";
import {timeControlRouter} from "./routes/timeControlRouter.js";


export const launchServer = () => {


    const app = express();
    app.listen(configuration.port, () => {
        console.log(`Server runs at http://localhost:${configuration.port}`)
        const logStream = fs.createWriteStream('access.log', {flags:'a'});
        const errorStream = fs.createWriteStream('error.log', {flags: 'a'});
       //==============SecurityMiddleware==========

        //=============Middlewares================
        app.use(express.json());
        app.use(morgan('dev'));
        app.use(morgan('combined', {stream:logStream}))

        //==============Routers===================
        app.use('/accounts', accountRouter);
        app.use('/shifts', timeControlRouter);


        //===============ErrorHandler==============
        app.use(errorHandler(errorStream))
    })
}