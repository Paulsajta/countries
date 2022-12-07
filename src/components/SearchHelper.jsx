import React from 'react';
import styled from  "styled-components"

const ContainerHelper = styled.div`
    cursor: pointer;
    position: relative;
    color: var(--colors-text);
  
    & > span {
      font-size: var(--fs-sm);
      border-radius: var(--radii);
      padding: 0.17rem;
      border: 0.5px solid;
      border-color: var(--colors-text);
    }
`

const TextWrap = styled.span`
  position: absolute;
  top: -3.2rem;
  left: -10rem;
`


function SearchHelper({children}) {
    return (
        <ContainerHelper>
            <TextWrap>
            {children}
            </TextWrap>
        </ContainerHelper>
    );
}

export default SearchHelper;