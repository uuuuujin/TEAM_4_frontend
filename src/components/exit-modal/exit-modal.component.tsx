import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsExitModalOpen } from '../../store/modules/modal/modal.select';
import { timerAction } from '../../store/modules/timer/timer.slice';

import { ExitModalContainer, MainTitle, SubTitle, ButtonContainer, Button } from './exit-modal.style';

export default function ExitModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isExitModalOpen = useAppSelector(selectIsExitModalOpen);
  const clickYesButton = () => {
    dispatch(modalAction.radioExitModal());
    dispatch(timerAction.resetTimer());
  };

  const clickNoButton = () => {
    dispatch(modalAction.radioExitModal());
  };

  return (
    <ExitModalContainer className={isExitModalOpen ? 'show' : ''}>
      <MainTitle>정말로 나가시겠습니까?</MainTitle>
      <SubTitle>*나가면 현재 뽀모 기록은 없어집니다.</SubTitle>
      <ButtonContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            normalImg="/images/exit_yes_button.png"
            activeImg="/images/exit_yes_button_active.png"
            onClick={clickYesButton}
          >
            예
          </Button>
        </Link>
        <Button
          normalImg="/images/exit_no_button.png"
          activeImg="/images/exit_no_button_active.png"
          buttonType="no"
          onClick={clickNoButton}
        >
          아니오
        </Button>
      </ButtonContainer>
    </ExitModalContainer>
  );
}
