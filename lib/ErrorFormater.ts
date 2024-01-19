import { FormFieldErrorType } from "@/types/app";
import { CustomError } from "./CustomError";

interface FormFieldErrorArray extends Array<FormFieldErrorType> {}

export function ErrorFormatter(error: unknown) {
  // if errors is instance of built-in Error

  if(error && typeof error === "object"  && "errors" in error && "success" in error && Array.isArray(error.errors)   ){
    return {
      error:error?.errors.length>0 && error.errors[0] ,
      code:400
    }
  }
  if(error instanceof CustomError){
    return {
      error:[error.message],
      code:error.code
    }
  }
  if (error instanceof Error) {
    return {
      error:[ error.message],
      code: error instanceof Error && "status" in error ? error.status : 500,
    };
  }
  // if error is a string
  if (typeof error === "string") {
    return {
      error:[error],
      code: 500,
    };
  }
  // if error is number
  if (typeof error === "number") {
    return {
      error: ["something went wrong"],
      code: 500,
    };
  }
  // if error is an array of FormFieldErrorType
  if (Array.isArray(error) && (error as FormFieldErrorArray).every((er) => typeof er.error === "string")) {
    const formattedErrors = (error as FormFieldErrorArray).map((er) => {
      return er.error
      
    });

    // Handle the array of FormFieldErrorType
    return {
      error :formattedErrors,
      code: 400
    }
  }

  return {
    error: ["Unexpected error "],
    code: 500,
  };
}
