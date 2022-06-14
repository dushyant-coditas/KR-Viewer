import { KRCard } from "./card.model";
import { StateEnum } from "./enums.model";

// -> IKRCard, description, linked KR

export interface KRCardDetail {
    card: KRCard;
    description: string;
    linkedKrCards: linkedCard[]

}

export interface linkedCard {
    cardNumber: string;
    title: string;
    state: StateEnum;
}