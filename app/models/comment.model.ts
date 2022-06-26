import { IUser } from './user.model';

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUser;
}

export interface IComment {
  id: number;
  content: string;
  replies: IReply[];
}
