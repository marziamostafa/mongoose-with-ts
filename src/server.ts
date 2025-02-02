
import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 5000

// database connection

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Dtabase connection successful")
    }
    catch (err) {
        console.log("failed to connect database : ", err)
    }

}

main() // call the main function to run it

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is listening listening on port ${port}`)
})