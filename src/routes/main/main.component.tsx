import React, { useState, useEffect } from 'react';
import Counter from '../../components/counter/counter.component';
import Chat from '../../components/chat/chat.component';
import MultiLink from '../../components/multi-link/multi-link.component';
import CopyMsg from '../../components/copy-message/copy-message.component';

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
    </div>
  );
}
