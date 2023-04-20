"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    console.log("".concat(req.method, " ").concat(req.url, " - ").concat(new Date().toISOString()));
    next();
}
exports.default = logger;
//# sourceMappingURL=logger.helper.js.map