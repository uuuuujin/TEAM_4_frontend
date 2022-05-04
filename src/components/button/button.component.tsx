import React from 'react';

import { BaseButton, InvertedButton } from './button.style';

interface ButtonProp extends React.ComponentPropsWithRef<'button'> {
  children?: JSX.Element | JSX.Element[] | string;
  buttonType?: ButtonTypeClasses;
}

export enum ButtonTypeClasses {
  base = 'base',
  inverted = 'inverted',
}

const getButton = (buttonType: ButtonTypeClasses = ButtonTypeClasses.base) =>
  ({
    [ButtonTypeClasses.base]: BaseButton,
    [ButtonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);

export default function Button({ children, buttonType, ...otherprops }: ButtonProp): JSX.Element {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherprops}>{children}</CustomButton>;
}
