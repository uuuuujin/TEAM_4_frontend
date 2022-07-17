import React, { useState, useRef, useEffect } from 'react';
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
import SocialLoginMenu from '../social-login-menu/social-login-menu.component';
import {
  ProfileModalContainer,
  ProfileModalBgImg,
  ProfileModalContentContainer,
  ProfileModalNameContainer,
  ProfileModalName,
  ProfileModalNameInput,
  ProfileModalLogInMessage,
  ProfileModalCharacterImg,
  ProfileModalNameEdit,
  ProfileModalEmail,
  LogoutButtonContainer,
  LogoutButton,
  FooterContainer,
} from './profile-modal.style';

export default function ProfileModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isProfileModalOpen = useAppSelector(selectIsProfileModalOpen);

  const nickname = useAppSelector(selectNickname);
  const characterImgCode = useAppSelector(selectCharacterImgCode);
  const email = useAppSelector(selectEmail);

  const [isNicknameEditing, setIsNicknameEditing] = useState(false);
  const [newNickname, setNewNickname] = useState(nickname);

  const inputRef = useRef<HTMLInputElement>(null);

  const cancelNicknameChange = () => {
    if (isNicknameEditing) {
      setIsNicknameEditing(false);
      setNewNickname(nickname);
    }
  };
  const handleProfileModal = () => {
    dispatch(modalAction.radioProfileModal());
    cancelNicknameChange();
  };

  const handleLogout = () => {
    dispatch(mainAction.logOut());
  };

  const handleNicknameChange = (nick: string) => {
    if (isLoggedIn) {
      setIsNicknameEditing((v) => !v);
    }
    if (isNicknameEditing) {
      dispatch(mainAction.updateNickname(nick));
    }
  };

  useEffect(() => {
    if (isNicknameEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNicknameEditing]);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
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
          <FooterContainer onClick={cancelNicknameChange}>
            <ProfileModalEmail>{email}</ProfileModalEmail>
            <LogoutButtonContainer>
              <LogoutButton onClick={handleLogout} />
            </LogoutButtonContainer>
          </FooterContainer>
        ) : (
          <FooterContainer>
            <SocialLoginMenu isMyPomo />
          </FooterContainer>
        )
      }
    >
      <ProfileModalContainer>
        <ProfileModalBgImg onClick={cancelNicknameChange}>
          <ProfileModalCharacterImg
            alt="profile"
            src={`${process.env.REACT_APP_IMG_URL}/character/all/work/0${characterImgCode}_01.png`}
          />
        </ProfileModalBgImg>
        <ProfileModalContentContainer>
          <ProfileModalNameContainer>
            {isNicknameEditing ? (
              <ProfileModalNameInput
                type="text"
                value={newNickname}
                onChange={onChangeNickname}
                maxLength={10}
                ref={inputRef}
              />
            ) : (
              <ProfileModalName>{nickname}</ProfileModalName>
            )}

            <ProfileModalNameEdit
              src={
                !isLoggedIn
                  ? `${process.env.REACT_APP_IMG_URL}/modal/edit_disabled_icon.png`
                  : `${process.env.REACT_APP_IMG_URL}/modal/edit_active_icon.png`
              }
              isLoggedIn={isLoggedIn}
              onClick={() => handleNicknameChange(newNickname)}
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
