export interface IUserCredentials {
  identifier: string;
  password: string;
}
export interface IUserRegister {
  username: string;
  email: string;
  password: string;
}

export interface IError {
  error: {
    details?: {
      errors: {
        message: string;
      }[];
    };
    message?: string;
  };
}
