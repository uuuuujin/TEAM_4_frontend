import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { mainAction } from '../../store/modules/main/main.slice';
import { selectIsProfileModalOpen } from '../../store/modules/modal/modal.select';
import {
  selectNickname,
  selectCharacterImgCode,
  selectEmail,
  selectIsLoggedIn,
} from '../../store/modules/main/main.select';

import Modal from '../modal/modal.component';
import {
  ProfileModalContainer,
  ProfileModalBgImg,
  ProfileModalContentContainer,
  ProfileModalNameContainer,
  ProfileModalName,
  ProfileModalLogInMessage,
  ProfileModalCharacterImg,
  ProfileModalNameEdit,
  ProfileModalEmail,
  SocialLoginMenuContainer,
  LogoutButtonContainer,
  LogoutButton,
} from './profile-modal.style';
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';

export default function ProfileModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isProfileModalOpen = useAppSelector(selectIsProfileModalOpen);

  const nickname = useAppSelector(selectNickname);
  const characterImgCode = useAppSelector(selectCharacterImgCode);
  const email = useAppSelector(selectEmail);

  const handleProfileModal = () => {
    dispatch(modalAction.radioProfileModal());
  };

  const handleLogout = () => {
    dispatch(mainAction.logOut());
  };

  return (
    <Modal
      isOpen={isProfileModalOpen}
      onClose={handleProfileModal}
      title="내 뽀모"
      contentWidth={440}
      backgroundColor="#D5D1FF"
      titleColor="#025a00"
      footer={
        isLoggedIn ? (
          <>
            <ProfileModalEmail>{email}</ProfileModalEmail>
            <LogoutButtonContainer>
              <LogoutButton onClick={handleLogout} />
            </LogoutButtonContainer>
          </>
        ) : (
          <SocialLoginMenuContainer>
            <SocialLoginMenu isMyPomo />
          </SocialLoginMenuContainer>
        )
      }
    >
      <ProfileModalContainer>
        <ProfileModalBgImg>
          <ProfileModalCharacterImg
            alt="profile"
            src={`${process.env.REACT_APP_IMG_URL}/character/all/work/0${characterImgCode}_01.png`}
          />
        </ProfileModalBgImg>
        <ProfileModalContentContainer>
          <ProfileModalNameContainer>
            <ProfileModalName>{nickname}</ProfileModalName>
            <ProfileModalNameEdit
              src={
                !isLoggedIn
                  ? `${process.env.REACT_APP_IMG_URL}/modal/edit_disabled_icon.png`
                  : `${process.env.REACT_APP_IMG_URL}/modal/edit_active_icon.png`
              }
              isLoggedIn={isLoggedIn}
            />
          </ProfileModalNameContainer>
          {!isLoggedIn && (
            <ProfileModalLogInMessage>캐릭터 명을 수정하시려면 로그인을 해주세요</ProfileModalLogInMessage>
          )}
        </ProfileModalContentContainer>
      </ProfileModalContainer>
    </Modal>
  );
}
