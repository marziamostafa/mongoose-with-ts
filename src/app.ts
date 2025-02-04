import express from 'express';
import cors from 'cors';


 
const app = express();

// middleware
app.use(cors())


app.get('/', (req, res) => {
    res.send('Database is runniing')
})

export default app;