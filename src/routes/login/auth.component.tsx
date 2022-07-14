import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { mainAction } from '../../store/modules/main/main.slice';

export default function Auth(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URL(document.URL).searchParams;
    const accessToken = params.get('accessToken');

    dispatch(mainAction.logIn(accessToken));
    navigate('/');
  }, [navigate, dispatch]);

  return <div />;
}
