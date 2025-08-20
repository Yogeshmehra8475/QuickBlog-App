import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

//Middlewares

app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req, res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        // listen to local development
        if (process.env.NODE_ENV !== 'production') {
            app.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
            })
        }
    } catch (error) {
        console.log("Failed to start Server:" + error.message);
        process.exit(1);
    }
}
startServer();


export default app;
