"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
// ApplicationError class for throw custom error.
class ApplicationError extends Error {
    constructor(msg, code) {
        super(msg);
        this.msg = msg;
        this.code = code;
    }
}
exports.default = ApplicationError;
// Error handler to handle error.
const ErrorHandler = (err, req, res, next) => {
    console.log(err);
    // Check if the error is of type ApplicationError, then send msg acoordingly.
    if (err instanceof ApplicationError) {
        return res.status(err.code).json({ success: false, message: err.msg });
    }
    // For all other error send oops msg
    res
        .status(500)
        .json({ success: false, message: "Oops, Something Went wrong" });
};
exports.ErrorHandler = ErrorHandler;
