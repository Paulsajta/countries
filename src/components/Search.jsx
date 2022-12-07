import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearch} from "../store/searchReducer";


const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;



export const Search = () => {

  const [word, setWord] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearch(word))

    }, [word])

  return (
          <InputContainer>
              <IoSearch />
              <Input onChange={(e) => setWord(e.target.value)} value={word}/>
          </InputContainer>
  );
};
