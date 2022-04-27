import React from 'react';
import Counter from '../../components/counter/counter.component';
import Chat from '../../components/chat/chat.component';

export default function Main(): JSX.Element {
  return (
    <div className="App">
      <Counter />
      <Chat />
    </div>
  );
}
