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
  margin-top: -25px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
  width: 340px;
  align-self: center;
  z-index: 500;
`;
