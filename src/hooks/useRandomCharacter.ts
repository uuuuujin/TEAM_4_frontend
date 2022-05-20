import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './index.hook';
import { selectGetRandomChracter } from '../store/modules/main/main.select';
import { getRandomAsync } from '../store/modules/main/main.slice';

export default function useRandomCharacter() {
  const dispatch = useAppDispatch();

  const getRandomCompleted = useAppSelector(selectGetRandomChracter);

  useEffect(() => {
    async function fetchCharacter() {
      await dispatch(getRandomAsync());
    }
    fetchCharacter();
  }, [dispatch, getRandomCompleted]);
}
