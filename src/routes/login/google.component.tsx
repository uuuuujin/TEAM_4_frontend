import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { userAction } from '../../store/modules/user/user.slice';

export default function Google(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sendAccessToken = async (accessToken: string) => {
    const params = { code: accessToken };
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/oauth/google/callback`, { params });
  };

  useEffect(() => {
    const urlHash = new URL(document.URL).hash;

    const accessToken = urlHash.split('=')[1].split('&')[0];

    sendAccessToken(accessToken);
  }, [dispatch]);

  return <div />;
}
