import React from 'react';
import { ImgContainer, CharacterComponent } from './character-combine.style';
import bodyImg from '../../assets/images/cat_body.png';

import { ResultModalProp } from '../result-modal/result.component';

export default function CombinedCharacter(componentsArr: ResultModalProp['componentsArr']): JSX.Element {
  const distructuringArr = [...componentsArr];
  return (
    <ImgContainer>
      <img src={bodyImg} alt="캐릭터 몸통" />
      {distructuringArr.map((comp) => {
        return (
          <CharacterComponent>
            <img src={comp} alt="캐릭터 컴포넌트" />
          </CharacterComponent>
        );
      })}
    </ImgContainer>
  );
}
