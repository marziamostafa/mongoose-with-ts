import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';


 
const app: Application = express();

// middleware
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({extended: true})) //parses the URL-encoded or json data into a JavaScript object.



app.get('/', (req:Request, res:Response, next:NextFunction) => {

    // insetring  a test data into mongodb


    

    res.send('Database is runniing')
    next(); // passing control to the next middleware
})

export default app;