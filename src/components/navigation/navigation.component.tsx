import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavigationContainer,
  LogoContainer,
  NavBoxContainer,
  NavBox,
  LogoImg,
  NavImg,
  GuideScreenContainer,
  GuideScreen,
} from './navigation.style';
import MypageDropdown from '../mypage-dropdown/mypage-dropdown.component';

import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsGuideModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isMypageOpen, setIsMypageOpen] = useState(false);

  const isGuideModalOpen = useAppSelector(selectIsGuideModalOpen);

  const toggleIsMypageOpen = () => {
    setIsMypageOpen(!isMypageOpen);
  };

  const handleGuideModalClick = () => {
    dispatch(modalAction.radioGuideModal());
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoImg src={`${process.env.REACT_APP_IMG_URL}/logo.png`} alt="로고이미지" />
        </LogoContainer>
        <NavBoxContainer>
          <NavBox>
            <NavImg content="mypage" onClick={toggleIsMypageOpen} />
          </NavBox>
          <NavBox>
            <NavImg content="info" onClick={handleGuideModalClick} />
          </NavBox>
        </NavBoxContainer>

        {isMypageOpen && <MypageDropdown />}
        {isGuideModalOpen && (
          <GuideScreenContainer>
            <GuideScreen onClick={handleGuideModalClick} />
          </GuideScreenContainer>
        )}
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
}
