import { NextFunction, Request, Response } from "express";

// ApplicationError class for throw custom error.
export default class ApplicationError extends Error {
    code:number;
    msg:string;
  constructor(msg:string, code:number) {
    super(msg);
    this.msg = msg;
    this.code = code;
  }
}

// Error handler to handle error.
export const ErrorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
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