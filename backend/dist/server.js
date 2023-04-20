"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var products_routes_1 = __importDefault(require("./routes/products.routes"));
var db_1 = __importDefault(require("./configs/db"));
var checkDB_1 = __importDefault(require("./middlewares/checkDB"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("./configs/dotenv"));
//middlewares
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
//database connection
(0, db_1.default)().then(function () {
    console.log('Database connection established successfully');
}).catch(function (err) {
    console.error('Failed to establish database connection', err);
    process.exit(1);
});
// Default route to check is everything okay
app.get("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).send({
            status: 200,
            message: "🎉 Congratulations! Your Server Works Perfectly! 🎉",
        });
        return [2 /*return*/];
    });
}); });
// Routes
app.use("/api", checkDB_1.default, products_routes_1.default);
//Creating error for invalid rotues
app.use(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        next((0, http_errors_1.default)(404, "The requested resource could not be found."));
        return [2 /*return*/];
    });
}); });
//sending the created error to frontend
app.use(function (err, req, res, next) {
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
app.listen(dotenv_1.default.PORT, function () {
    console.log("\uD83C\uDF89 Server Up & Running... On PORT http://localhost:".concat(dotenv_1.default.PORT, " \uD83C\uDF89"));
});
//# sourceMappingURL=server.js.map