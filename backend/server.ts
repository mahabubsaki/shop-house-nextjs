//package import
import express, { Express, Request, Response, NextFunction } from 'express';
import session, { Session } from 'express-session';
import bodyParser from "body-parser";
import cors from 'cors';
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from 'cookie-parser';

//internel import
import productsRoute from './routes/products.route';
import connectDB from './configs/db.config';
import checkDB from './middlewares/checkDB.middleware';
import dotEnvConfig from './configs/dotenv.config.';
import errorHanlder from './helpers/errorHandler.helper';
import errorCreater from './helpers/errorCreater.helper';
import otherRoute from './routes/other.route';


//middlewares
const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
declare module 'express' {
    interface Request {
        session: Session;
    }
}
app.use(session({ secret: dotEnvConfig.SESSION_SECRET, resave: false, saveUninitialized: true }));





//database connection
connectDB().then(() => {
    console.log('Database connection established successfully');
}).catch(err => {
    console.error('Failed to establish database connection', err);
    process.exit(1);
});

// Default route to check is everything okay
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
    req.session.views = (req.session.views || 0) + 1;
    console.log(req.session.views);
    res.status(200).send({
        status: 200,
        message: "🎉 Congratulations! Your Server Works Perfectly! 🎉",
    });
});



// Routes
app.use("/api", checkDB, productsRoute);
app.use("/api", checkDB, otherRoute);



//Error handling
app.use(errorCreater);
app.use(errorHanlder);


//listening to the port and watching on console
app.listen(dotEnvConfig.PORT, () => {
    console.log(`🎉 Server Up & Running... On PORT http://localhost:${dotEnvConfig.PORT} 🎉`);
});