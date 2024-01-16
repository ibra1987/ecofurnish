import { FormFieldErrorType } from "@/types/app";

interface FormFieldErrorArray extends Array<FormFieldErrorType> {}

export function ErrorFormatter(error: unknown) {
  // if errors is instance of built-in Error
  if (error instanceof Error) {
    return {
      error: error.message,
      code: error instanceof Error && "status" in error ? error.status : 500,
    };
  }
  // if error is a string
  if (typeof error === "string") {
    return {
      error,
      code: 500,
    };
  }
  // if error is number
  if (typeof error === "number") {
    return {
      error: "something went wrong",
      code: 500,
    };
  }
  // if error is an array of FormFieldErrorType
  if (Array.isArray(error) && (error as FormFieldErrorArray).every((er) => typeof er.error === "string")) {
    const formattedErrors = (error as FormFieldErrorArray).map((er) => {
      return {
        error: er.error,
        code: 400, 
      };
    });

    // Handle the array of FormFieldErrorType
    return {
      error :formattedErrors,
      code: formattedErrors[0]?.code
    }
  }

  // Handle other cases or return an appropriate default value
  return {
    error: "Unexpected error format",
    code: 500,
  };
}
