import React from 'react';
import {useDispatch} from 'react-redux';
import {SearchBarInput} from './styles';

export default function SearchBar({onChangeTextSearch}) {
  return (
    <>
      <SearchBarInput onChangeText={onChangeTextSearch} />
    </>
  );
}
