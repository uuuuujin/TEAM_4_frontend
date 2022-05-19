export interface Member {
  email: string;
  nickname: string;
  img: string;
}

export interface ChatMessage {
  nickName: string;
  content: string;
  date: string;
}

export enum MultiEvent {}
