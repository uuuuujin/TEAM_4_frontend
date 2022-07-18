import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';

export default function SocialLoginModal(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen) {
    return <div />;
  }
  return (
    <Modal
      onClose={() => {
        setIsOpen(!isOpen);
      }}
      title="로그인"
      contentWidth={380}
    >
      <SocialLoginMenu isMyPomo={false} />
    </Modal>
  );
}
