import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #111921;
  margin-top: 30px;
  font-family: 'BalooTamma-Regular';
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #111921;
  opacity: 0.5;
  font-family: 'Roboto-Light';
`;

export const ButtonRocket = styled(RectButton)`
  flex: 1;
  color: transparent;
`;
