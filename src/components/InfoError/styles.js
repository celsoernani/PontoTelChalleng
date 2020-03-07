import styled from 'styled-components/native';

export const SearchBarInput = styled.TextInput.attrs({
  placeholder: 'Procure lançamentos',
  elevation: 3,
  inlineImageLeft: 'search_icon',
})`
  padding: 0 20px;
  height: 45px;
  background-color: white;
  border-radius: 15px;
  margin-top: -28px;
  width: 340px;
  align-self: center;
  z-index: 500;
`;
