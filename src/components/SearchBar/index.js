import React from 'react';
import {SearchBarInput} from './styles';

export default function SearchBar({onChangeTextSearch}) {
  return (
    <>
      <SearchBarInput onChangeText={onChangeTextSearch} />
    </>
  );
}
