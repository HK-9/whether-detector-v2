"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("./utils/logger"));
const cors_1 = __importDefault(require("cors"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const whetherRoute_1 = __importDefault(require("./routes/whetherRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
require("./db");
const port = process.env.PORT || 500;
const mongoUrl = process.env.DB_CONNECTION_STRING;
//initail setup
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
app.use(body_parser_1.default.json());
app.use('/api/v1/auth', authRoute_1.default);
app.use('/api/v1/whether', whetherRoute_1.default);
app.use('/', (req, res) => res.send('server is Online.. provide valid endpoint'));
//routes
// app.use('/api/v1/users');
// app.use('/api/v1/users');
// app.use('/api/v1/products');
app.listen(port, () => logger_1.default.info(`server running on port ${port} waiting to connect with database..`));
