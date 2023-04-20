"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var dotEnvConfig = {
    PORT: process.env.PORT || 6969,
    MONGODB_URI: process.env.MONGODB_URI || '',
};
exports.default = dotEnvConfig;
//# sourceMappingURL=dotenv.js.map