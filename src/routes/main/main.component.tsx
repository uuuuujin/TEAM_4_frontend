import React, { useEffect, useState } from 'react';
import Counter from '../../components/counter/counter.component';
import Chat from '../../components/chat/chat.component';
import MultiLink from '../../components/multi-link/multi-link.component';
import CopyMsg from '../../components/copy-message/copy-message.component';
import Character from '../../components/character/character.component';
import ToastHook from '../../hooks/toast.hook';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { getRandomAsync } from '../../store/modules/main/main.slice';
import { selectGetRandomChracter } from '../../store/modules/main/main.select';

export default function Main(): JSX.Element {
  const [toastState, setToastState] = useState<boolean>(false);
  ToastHook(toastState, setToastState);

  const dispatch = useAppDispatch();

  const getRandomCompleted = useAppSelector(selectGetRandomChracter);

  const [nickname, setNickname] = useState('');
  const [imgCode, setImgCode] = useState('');

  useEffect(() => {
    async function fetchCharacter() {
      await dispatch(getRandomAsync());
      setNickname(window.localStorage.getItem(`${process.env.REACT_APP_NICKNAME_KEY}`) || '');
      setImgCode(window.localStorage.getItem(`${process.env.REACT_APP_IMGCODE_KEY}`) || '');
    }
    fetchCharacter();
  }, [dispatch, getRandomCompleted]);

  return (
    <div className="App">
      <Counter />
      <Chat />
      <MultiLink setToastState={setToastState}>http://podongpodong.com/psa-hjjr-mwk</MultiLink>
      {toastState && <CopyMsg />}
      {getRandomCompleted && (
        <Character nickname={nickname} characterImgSrc={`${process.env.REACT_APP_IMG_URL}/all/${imgCode}.png`} />
      )}
    </div>
  );
}
