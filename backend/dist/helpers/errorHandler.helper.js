"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
function default_1(err, req, res, next) {
    var error = (0, http_errors_1.default)(err);
    res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || 'Unknown Error occured',
        query: req.query,
        params: req.params,
        endpoint: req.originalUrl
    });
}
exports.default = default_1;
;
//# sourceMappingURL=errorHandler.helper.js.map