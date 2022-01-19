export type Options = {
  method: string;
  headers: {
    "content-Type": string;
  };
  body: string;
}

export type LoginForm = {
  email: string;
  password: string;
}

export type LoginResponse = {
  status: string;
  id?: string;
}