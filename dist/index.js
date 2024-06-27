"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectToDb_1 = __importDefault(require("./config/connectToDb"));
const movies_routes_1 = __importDefault(
  require("./features/movies/movies.routes")
);
const errorHandler_1 = require("./middlewares/errorHandler");
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json());
server.use((0, cors_1.default)());
const router = express_1.default.Router();
router.use("/movies", movies_routes_1.default);
router.use((req, res, next) => {
  res.status(400).send("Page not Found");
});
// Error Handling
router.use(errorHandler_1.ErrorHandler);
server.use("/.netlify/functions/api", router);
const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log("Server Listening at " + port);
  (0, connectToDb_1.default)();
});
