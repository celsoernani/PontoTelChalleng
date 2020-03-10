import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const TitleError = styled.Text`
  color: #111921;
  font-size: 20px;
  font-family: 'BalooTamma-Regular';
`;

export const DescError = styled.Text`
  font-size: 15px;
  color: #111921;
  opacity: 0.5;
  font-family: 'Roboto-Light';
`;

export const ButtonError = styled(RectButton)`
  background: #fff;
  color: #111921;
  padding: 10px 15px;
  align-items: flex-start;
  border-radius: 5px;
  margin: 10px 20px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`;
