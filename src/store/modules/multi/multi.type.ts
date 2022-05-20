export interface Member {
  email: string;
  nickname: string;
  all: number;
}

export interface ChatMessage {
  nickName: string;
  content: string;
  date: string;
}

export enum PomodoroTimerTypes {
  stop = 'stop',
  long_pomo = 'long_pomo',
  short_pomo = 'short_pomo',
  long_break = 'long_break',
  short_break = 'short_break',
}

export enum MultiEvent {}
