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

export enum PomodoroTimerTypes {
  stop = 'stop',
  long_pomo = 'long_pomo',
  short_pomo = 'short_pomo',
  long_break = 'long_break',
  short_break = 'short_break',
}

export enum MultiEvent {}
