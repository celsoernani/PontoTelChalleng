import React from 'react';
import {View} from 'react-native';
import {Container, Title, SubTitle, ImageBackgroundHeader} from './styles';

export default function Header({title, subtitle, image}) {
  return (
    <>
      <Container>
        <ImageBackgroundHeader source={image}>
          <Title>{title}</Title>
          <SubTitle>{subtitle} </SubTitle>
        </ImageBackgroundHeader>
      </Container>
    </>
  );
}
