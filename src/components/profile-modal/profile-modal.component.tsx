import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import {
  ProfileModalContainer,
  ProfileModalBgImg,
  ProfileModalContentContainer,
  ProfileModalNameContainer,
  ProfileModalName,
  ProfileModalEmail,
  ProfileModalTitle,
  ProfileModalCharacterImg,
  ProfileModalNameEdit,
} from './profile-modal.style';
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';
import EditActiveIcon from '../../assets/images/edit_active_icon.png';
import EditDisabledIcon from '../../assets/images/edit_disabled_icon.png';

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
      title="내 뽀모"
      contentWidth={440}
      backgroundColor="#D5D1FF"
      titleColor="#025a00"
      footer={!user ? <SocialLoginMenu isMyPomo /> : '로그아웃 버튼'}
    >
      <ProfileModalContainer>
        <ProfileModalBgImg>
          <ProfileModalCharacterImg alt="profile" src={characterImgSrc} />
        </ProfileModalBgImg>
        <ProfileModalContentContainer>
          <ProfileModalNameContainer>
            <ProfileModalName>{nickname}</ProfileModalName>
            <ProfileModalNameEdit src={!user ? EditDisabledIcon : EditActiveIcon} />
          </ProfileModalNameContainer>
          <ProfileModalEmail>캐릭터 명을 수정하시려면 로그인을 해주세요</ProfileModalEmail>
        </ProfileModalContentContainer>
      </ProfileModalContainer>
    </Modal>
  );
}
