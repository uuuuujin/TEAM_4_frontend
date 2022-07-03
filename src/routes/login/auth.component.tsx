import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { userAction } from '../../store/modules/user/user.slice';

export default function Auth(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URL(document.URL).searchParams;
    const accessToken = params.get('accessToken');

    if (accessToken) {
      localStorage.setItem('@token', accessToken);
      dispatch(userAction.login());
      navigate('/');
    }
  }, [navigate, dispatch]);

  return <div />;
}
