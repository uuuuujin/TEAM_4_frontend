import React from 'react';

import { BaseButton, InvertedButton } from './button.style';

interface ButtonProp {
  children?: JSX.Element | JSX.Element[] | string;
  buttonType?: string;
}

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export default function Button({ children, buttonType }: ButtonProp): JSX.Element {
  const CustomButton = getButton(buttonType);
  return <CustomButton>{children}</CustomButton>;
}
