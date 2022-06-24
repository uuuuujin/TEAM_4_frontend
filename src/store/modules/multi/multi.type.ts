export interface Member {
  id: number;
  Nick: string;
  all: number;
  logined: boolean;
}

export interface ChatMessage {
  id: number;
  nickName: string;
  content: string;
  date: string;
}

export enum MultiEvent {}
