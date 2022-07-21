import { StateBarContainer } from './state-bar.style';

export interface StateBarProp {
  children: string;
}

export default function StateBar({ children }: StateBarProp): JSX.Element {
  return <StateBarContainer>{children}</StateBarContainer>;
}
