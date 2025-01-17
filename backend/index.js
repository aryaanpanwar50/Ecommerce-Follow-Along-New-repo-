import express from 'express';


const app = express()

app.get('/',(req,res)=>{
    res.send('Server is ready ');
});


const PORT  = process.env.PORT || 3000

app.listen(PORT, async () => {
    try {
        // Attempt to connect to the database before starting the server
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to start the server:", error.message);
    }
});