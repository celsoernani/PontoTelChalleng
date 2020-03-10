import React from 'react';
import HomeBack from '../../assets/images/homeback.png';
import Background from '../../components/Background';
import {Title, SubTitle, Container, ButtonRocket} from './styles';

export default function Home({navigation}) {
  return (
    <Background image={HomeBack}>
      <Container>
        <Title>Bem vindo PontoTel !</Title>
        <SubTitle>Aperte no foguete {'\n'}embarque nesse lançamento</SubTitle>
      </Container>
      <ButtonRocket onPress={() => navigation.navigate('Launches')} />
    </Background>
  );
}
