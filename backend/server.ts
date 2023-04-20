import express, { Express, Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import productsRoute from './routes/products.routes';
import connectDB from './configs/db';
import checkDB from './middlewares/checkDB';
import cors from 'cors';
import dotEnvConfig from './configs/dotenv';

//middlewares
const app: Express = express();
app.use(cors());



//database connection
connectDB().then(() => {
    console.log('Database connection established successfully');
}).catch(err => {
    console.error('Failed to establish database connection', err);
    process.exit(1);
});

// Default route to check is everything okay
app.get("/", async (req, res, next) => {
    res.status(200).send({
        status: 200,
        message: "🎉 Congratulations! Your Server Works Perfectly! 🎉",
    });
});



// Routes
app.use("/api", checkDB, productsRoute);



//Creating error for invalid rotues
app.use(async (req: Request, res: Response, next: NextFunction) => {
    next(createError(404, "The requested resource could not be found."));
});


//sending the created error to frontend
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.send({
        status: err.status,
        message: err.message,
        query: req.query,
        params: req.params,
        endpoint: req.originalUrl
    });
});

//listening to the port and watching on console
app.listen(dotEnvConfig.PORT, () => {
    console.log(`🎉 Server Up & Running... On PORT http://localhost:${dotEnvConfig.PORT} 🎉`);
});