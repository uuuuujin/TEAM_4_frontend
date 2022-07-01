import React, { useState, useEffect, useMemo } from 'react';
import { Container } from './kakaoLogin.style';

export default function KakaoLogin(): JSX.Element {
  const params = new URL(document.URL).searchParams;
  const accessToken = params.get('accessToken');

  // useEffect(() => {
  //   localStorage.setItem('@token', accessToken)
  // }, [])

  return (
    <Container>
      <div>accessToken: {accessToken}</div>
    </Container>
  );
}
