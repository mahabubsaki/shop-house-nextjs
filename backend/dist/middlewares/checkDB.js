"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//a middleware to check if the db connnected or not
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = (function (req, res, next) {
    if (mongoose_1.default.connection.readyState !== 1) {
        return res.status(503).json({
            message: 'Service Unavailable - Database is not connected',
        });
    }
    next();
});
//# sourceMappingURL=checkDB.js.map