import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import createError, { HttpError } from 'http-errors';
import productsRoute from './routes/products.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6969;

// Routes
app.get("/", async (req, res, next) => {
    res.status(200).send({
        status: 200,
        message: "🎉 Congratulations! Your Server Works Perfectly! 🎉",
    });
});

// Routes
app.use("/api", productsRoute);


app.use(async (req: Request, res: Response, next: NextFunction) => {
    next(createError(404, "The requested resource could not be found."));
});


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


app.listen(port, () => {
    console.log(`🎉 Server Up & Running... On PORT http://localhost:${port} 🎉`);
});