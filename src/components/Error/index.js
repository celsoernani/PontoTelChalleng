import React from 'react';
import {Text} from 'react-native';
import {Container, DescError, TitleError, ButtonError} from './styles';

export default function Error({navigation, title, desc}) {
  return (
    <Container>
      <TitleError> {title}</TitleError>
      <DescError>{desc}</DescError>
      <ButtonError onPress={() => navigation.goBack()}>
        <Text> VOLTAR</Text>
      </ButtonError>
    </Container>
  );
}
