import dotenv from 'dotenv';
dotenv.config();

const dotEnvConfig = {
    PORT: process.env.PORT || 6969,
    MONGODB_URI: process.env.MONGODB_URI || '',
};
export default dotEnvConfig;