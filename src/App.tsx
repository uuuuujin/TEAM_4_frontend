import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import Main from './routes/main/main.component';
import SingleMode from './routes/single-mode/single-mode.component';
import MultiMode from './routes/multi-mode/multi-mode.component';
import Navigation from './components/navigation/navigation.component';
import LoadingScreen from './components/loading-screen/loading-screen.component';
import Kakao from './routes/login/kakao.component';
import Google from './routes/login/google.component';
import './App.css';

declare global {
  interface Window {
    Kakao?: any;
  }
}
export default function App(): JSX.Element {
  const initializeKakao = useCallback(() => {
    const init = setInterval(() => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('3356053e012f17635791f718e71b9038');
        clearInterval(init);
      }
    }, 100);
  }, []);
  useEffect(() => {
    initializeKakao();
  }, [initializeKakao]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Main />} />
        <Route path="/single" element={<SingleMode />} />
        <Route path="/multi" element={<MultiMode />}>
          <Route path=":roomIdParam" element={<LoadingScreen />} />
        </Route>
        <Route path="/oauth" element={<Kakao />} />
        <Route path="/oauth/google/*" element={<Google />} />
      </Route>
    </Routes>
  );
}
