import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';


 
const app: Application = express();

// middleware
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('Database is runniing')
    next(); // passing control to the next middleware
})

export default app;