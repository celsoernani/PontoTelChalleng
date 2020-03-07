import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e2e6e9;
`;

export const ButtonOption = styled(RectButton)`
  background: transparent;
  padding: 10px 15px;
  align-items: flex-start;
  border-radius: 5px;
  margin: 10px 20px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`;

export const Line = styled.View`
  height: 1px;
  width: 90%;
  align-self: center;
  border-radius: 1px;
  background: #fece2e;
`;

export const HeaderMission = styled.View`
  background: #fece2e;
  align-items: center;
  height: 200px;
`;
export const ImageMission = styled.Image`
  align-self: center;
  margin-top: 10px;
  width: 150px;
  height: 150px;
`;

export const CardDetailsLaunche = styled.View`
  justify-content: center;
  height: 150px;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
  margin-top: -25px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
  width: 320px;
  align-items: center;
  align-self: center;
  z-index: 500;
`;

export const CardTitle = styled.Text`
  font-size: 28px;
  width: 220px;
  color: #111921;
  font-family: 'BalooTamma-Regular';
`;

export const OptionsView = styled.View`
  flex: 1;
  padding: 30px;
`;

export const OptionsTitle = styled.Text`
  font-size: 15px;
  color: #111921;
  font-family: 'BalooTamma-Regular';
`;

export const CardSubTitle = styled.Text`
  font-size: 15px;
  color: #111921;
  opacity: 0.8;
  font-family: 'Roboto-Light';
`;

export const CardDesc = styled.Text`
  font-size: 13px;
  color: #111921;
  opacity: 0.5;
  font-family: 'Roboto-Italic';
`;

export const RocketImage = styled.Image`
  width: 80px;
  height: 100px;
  align-self: center;
`;
