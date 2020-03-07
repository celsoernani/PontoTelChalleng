import styled from 'styled-components';

export const Container = styled.View`
  background: #fece2e;
  align-items: center;
  flex-direction: row;
  height: 150px;
`;
export const Title = styled.Text`
  font-size: 25px;
  color: #111921;
  margin-left: 30px;
  margin-top: 30px;
  font-family: 'BalooTamma-Regular';
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  color: #111921;
  opacity: 0.5;
  font-family: 'Roboto-Light';
  margin-left: 30px;
`;

export const ImageBackgroundHeader = styled.ImageBackground.attrs({
  imageStyle: {opacity: 0.3, tintColor: '#000', marginLeft: '70%'},
})`
  width: 100%;
  height: 100%;
`;
