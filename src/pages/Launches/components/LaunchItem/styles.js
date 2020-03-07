import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Launche = styled(RectButton)`
  background: #fff;
  border-radius: 15px;
  padding: 10px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`;

export const MissionPath = styled.Image`
  width: 50px;
  height: 50px;
`;

export const MissionName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #111921;
  text-align: center;
`;
export const RocketName = styled.Text`
  font-size: 12px;
  color: #111921;
  opacity: 0.3;
  text-align: center;
`;
