import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import {
  ProfileModalContainer,
  ProfileModalImageContainer,
  ProfileModalContentContainer,
  ProfileModalNameContainer,
  ProfileModalName,
  ProfileModalEmail,
} from './profile-modal.style';
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';

interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  nickname: string;
  characterImgSrc: string;
}

export default function ProfileModal({ isOpen, onClose, nickname, characterImgSrc }: ModalProp): JSX.Element {
  // const [isOpen, setIsOpen] = useState(true);
  const [user] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="프로필 정보"
      contentWidth={450}
      footer={!user ? <SocialLoginMenu /> : '로그아웃 버튼'}
    >
      <ProfileModalContainer>
        <ProfileModalImageContainer>
          <img alt="profile" src={characterImgSrc} />
        </ProfileModalImageContainer>
        <ProfileModalContentContainer>
          <ProfileModalNameContainer>
            <ProfileModalName>{nickname}</ProfileModalName>
            <button disabled={!user}>수정</button>
          </ProfileModalNameContainer>
          <ProfileModalEmail>캐릭터 명을 수정하시려면 로그인을 해주세요</ProfileModalEmail>
        </ProfileModalContentContainer>
      </ProfileModalContainer>
    </Modal>
  );
}
