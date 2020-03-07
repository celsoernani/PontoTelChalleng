import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import RocketImagePng from '../../assets/images/rocket.png';
import {
  Container,
  HeaderMission,
  ImageMission,
  CardDetailsLaunche,
  CardTitle,
  CardDesc,
  CardSubTitle,
  RocketImage,
  OptionsView,
  OptionsTitle,
  ButtonOption,
  Line,
} from './styles';

export default function LauncheDetails({route, navigation}) {
  const {launche} = route.params;
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#fece2e" />
      <HeaderMission>
        <ImageMission source={{uri: launche.links.mission_patch_small}} />
      </HeaderMission>
      <CardDetailsLaunche elevation={3}>
        <View>
          <CardTitle numberOfLines={2}>{launche.mission_name} </CardTitle>
          <CardSubTitle>{launche.rocket.rocket_name} </CardSubTitle>
          <CardDesc>Primeiro lançamento em {launche.launch_year}</CardDesc>
        </View>
        <RocketImage tintColor="#fece2e" source={RocketImagePng} />
      </CardDetailsLaunche>

      <OptionsView>
        <OptionsTitle>Opções </OptionsTitle>
        <ButtonOption
          onPress={() =>
            navigation.navigate('ArticleWebView', {
              link: launche.links.article_link,
            })
          }>
          <OptionsTitle>Artigo</OptionsTitle>
          <CardDesc>Vizualize um artigo sobre esse lançamento</CardDesc>
        </ButtonOption>
        <Line />

        <ButtonOption>
          <OptionsTitle>Video</OptionsTitle>
          <CardDesc>Vizualize um vídeo sobre esse lançamento</CardDesc>
        </ButtonOption>
      </OptionsView>

      <ButtonOption
        onPress={() => navigation.goBack()}
        style={{
          alignSelf: 'center',
          backgroundColor: '#FFF',
        }}>
        <OptionsTitle>Voltar</OptionsTitle>
      </ButtonOption>
    </Container>
  );
}
