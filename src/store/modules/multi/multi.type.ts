export interface Member {
  email: string;
  nickname: string;
  img: string;
}

export interface ChatMessage {
  email: string;
  content: string;
  date: Date;
}

export enum MultiEvent {}
