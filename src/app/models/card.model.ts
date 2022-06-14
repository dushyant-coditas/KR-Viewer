import { IComment } from "./comment.model";
import { StateEnum } from "./enums.model";

export interface KRCard {
    //  id, KRNumber, title, state, comments
    id: number;
    krCardNumber: string;
    title: string;
    state: StateEnum;
    comments: IComment[];
    date: string;
    status?: boolean | undefined;
}