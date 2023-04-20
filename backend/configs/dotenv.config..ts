import dotenv from 'dotenv';
dotenv.config();

const dotEnvConfig = {
    PORT: process.env.PORT || 6969,
    MONGODB_URI: process.env.MONGODB_URI || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
    SESSION_SECRET: process.env.SESSION_SECRET || ''
};
export default dotEnvConfig;