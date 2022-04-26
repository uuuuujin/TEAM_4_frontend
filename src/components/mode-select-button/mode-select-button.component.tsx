import React from 'react';

import {
  ModeSelectButtonContainer,
  ModeSelectButtonHeader,
  ModeSelectButtonContent,
  ModeSelectButtonFooter,
} from './mode-select-button.style';

interface ButtonProp extends React.ComponentPropsWithRef<'button'> {
  imgUrl?: string;
  text: string;
  subText: string;
}

export default function ModeSelectButton({ imgUrl, text, subText, ...otherprops }: ButtonProp): JSX.Element {
  return (
    <ModeSelectButtonContainer {...otherprops}>
      <ModeSelectButtonHeader>{text}</ModeSelectButtonHeader>
      <ModeSelectButtonContent src={imgUrl} />
      <ModeSelectButtonFooter>{subText}</ModeSelectButtonFooter>
    </ModeSelectButtonContainer>
  );
}
