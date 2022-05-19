import React, { useState } from 'react';
import Counter from '../../components/counter/counter.component';
import Chat from '../../components/chat/chat.component';
import MultiLink from '../../components/multi-link/multi-link.component';
import CopyMsg from '../../components/copy-message/copy-message.component';
import Character from '../../components/character/character.component';
import CatImg from '../../assets/images/cat.png';
import ToastHook from '../../hooks/toast.hook';

export default function Main(): JSX.Element {
  const [toastState, setToastState] = useState<boolean>(false);
  ToastHook(toastState, setToastState);

  return (
    <div className="App">
      <Counter />
      <Chat />
      <MultiLink setToastState={setToastState}>http://podongpodong.com/psa-hjjr-mwk</MultiLink>
      {toastState && <CopyMsg />}
      <Character nickname="용감한푸른도마뱀" characterImgSrc={CatImg} />
    </div>
  );
}
