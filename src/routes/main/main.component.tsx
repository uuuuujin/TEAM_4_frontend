import React, { useState, useEffect } from 'react';
import Counter from '../../components/counter/counter.component';
import Chat from '../../components/chat/chat.component';
import MultiLink from '../../components/multi-link/multi-link.component';
import CopyMsg from '../../components/copy-message/copy-message.component';
import Character from '../../components/character/character.component';
import CatImg from '../../assets/images/cat.png';

export default function Main(): JSX.Element {
  const [toastState, setToastState] = useState<boolean>(false);

  useEffect(() => {
    if (toastState) {
      setTimeout(() => setToastState(false), 3000);
    }
  }, [toastState]);

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
