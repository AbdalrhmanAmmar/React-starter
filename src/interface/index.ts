export  interface IFormSignup{
    email: string,
    username: string,
    password:string
    ,
}




export  interface IFormLogin{
   identifier: string;
    password: string;
}

export interface IError{
  error: {
    details?: {
      errors: {
        message: string
      }[];
    }
    message?: string;
  }
}