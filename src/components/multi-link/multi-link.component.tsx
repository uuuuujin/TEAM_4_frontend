import React from 'react';

import { LinkContainer, CopyBtn, LinkAddressContainer, LinkAddress } from './multi-link.style';

interface LinkType {
  children: string;
  setToastState: (value: boolean) => void;
}

export default function MultiLink({ children, setToastState }: LinkType): JSX.Element {
  const doCopy = (url: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.position = 'fixed';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const handlerCopy = (url: string) => {
    setToastState(true);
    doCopy(url);
  };

  return (
    <LinkContainer>
      <LinkAddressContainer>
        <LinkAddress>{children}</LinkAddress>
      </LinkAddressContainer>
      <CopyBtn onClick={() => handlerCopy(children)}>복사</CopyBtn>
    </LinkContainer>
  );
}
