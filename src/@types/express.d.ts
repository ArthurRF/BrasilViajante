declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }

  export interface Response {
    accessToken: string;
    'x-refresh-token': string;
    user: {
      id: string;
    };
  }
}
