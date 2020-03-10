import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e2e6e9;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#fece2e',
})`
  align-self: center;
`;
export const LaunchList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 5px;
  padding: 0 20px;
`;

export const TextEnd = styled.Text`
  align-self: center;
  font-size: 20px;
  color: #111921;
  font-family: 'Roboto-Medium';
`;
