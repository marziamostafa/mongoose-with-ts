
import mongoose from 'mongoose';
import app from './app'

const port = 5000





// database connection

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Dtabase connection successful")

        // app will be listened after the database connection. so it will remain here
        app.listen(port, () => {
            console.log(`Server is listening listening on port ${port}`)
        }) 
        
    }
    catch (err) {
        console.log("failed to connect database : ", err)
    }

}

main() // call the main function to run it



