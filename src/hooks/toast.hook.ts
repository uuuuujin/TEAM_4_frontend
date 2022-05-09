import React, { useEffect, Dispatch, SetStateAction } from 'react';

const ToastHook = (toastState: boolean, setToastState: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    if (toastState) {
      setTimeout(() => setToastState(false), 3000);
    }
  }, [setToastState, toastState]);
};

export default ToastHook;
