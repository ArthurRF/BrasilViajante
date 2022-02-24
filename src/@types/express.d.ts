declare namespace Express {
  export interface Request {
    session: {
      userId: string;
    }

    user: {
      id: string;
    };
  }

  export interface Response {
    accessToken: string;
    'x-refresh-token': string;
    user: {
      id: string;
      emails: string[];
    };
  }
}
