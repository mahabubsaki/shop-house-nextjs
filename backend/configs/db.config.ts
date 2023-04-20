import mongoose from 'mongoose';
import dotEnvConfig from './dotenv.config.';

const connectDB = async () => {
    try {
        const mongooseDB_URI = dotEnvConfig.MONGODB_URI;

        await mongoose.connect(mongooseDB_URI, {
            keepAlive: true,
            keepAliveInitialDelay: 300000,
            serverSelectionTimeoutMS: 5000,
        });

    } catch (error) {
        console.error('Mongoose connection error:', error.message);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from database');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

export default connectDB;