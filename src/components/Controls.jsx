import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import {useDispatch, useSelector} from "react-redux";
import {searchSelector, setFilter} from "../store/searchReducer";

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'Americas': { value: 'Americas', label: 'Americas' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
    const {filter} = useSelector(searchSelector)
    const dispatch = useDispatch()

    const selectChange = (reg) => {
        dispatch(setFilter(reg?.value || ''))
    }

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[filter]}
        onChange={selectChange}
      />
    </Wrapper>
  );
};
