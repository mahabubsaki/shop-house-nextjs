"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jwtSign_controller_1 = __importDefault(require("../controllers/jwtSign.controller"));
var router = express_1.default.Router();
router.get('/token-issue', jwtSign_controller_1.default);
exports.default = router;
//# sourceMappingURL=other.route.js.map