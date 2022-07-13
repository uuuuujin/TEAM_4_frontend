import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { userAction } from '../../store/modules/user/user.slice';
import { mainAction } from '../../store/modules/main/main.slice';

export default function Google(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlHash = new URL(document.URL).hash;

    const accessToken = urlHash.split('=')[1].split('&')[0];

    const sendAccessToken = async (token: string) => {
      const params = { code: token };
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/oauth/google/callback`, { params });
      localStorage.setItem('@token', response.data.accessToken);
      dispatch(mainAction.setEmail(response.data.email));
      dispatch(userAction.login());
      console.log(response.data);
    };

    sendAccessToken(accessToken);
    navigate('/');
  }, [dispatch, navigate]);

  return <div />;
}
