import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { mainAction } from '../../store/modules/main/main.slice';

export default function Kakao(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URL(document.URL).searchParams;
    const data = {
      accessToken: params.get('accessToken') || '',
      email: params.get('email') || '',
    };
    dispatch(mainAction.logIn(data));
    navigate('/');
  }, [navigate, dispatch, location]);

  return <div />;
}
