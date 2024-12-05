import { Request } from 'express';

export interface GraphQLContext {
  req: Request;
  user: JwtPayload | null;
}

export interface JwtPayload {
  id: string;
  email: string;
  username: string;
}