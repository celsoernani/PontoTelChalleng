import React, {useEffect, useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as LaunchesActions from '../../store/modules/launches/actions';
import LaunchItem from './components/LaunchItem';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import BackgroundImage from '../../assets/images/background.png';

import {Container, LaunchList} from './styles';

export default function Launches({navigation}) {
  const dispatch = useDispatch();
  const [textSearch, setTextSearch] = useState('');
  useEffect(() => {
    dispatch(LaunchesActions.getLaunchesRequest());
  }, [dispatch]);
  const {launches} = useSelector(state => state);
  function renderList() {
    // Essa função decide qual componente sera carregado dependendo da resposta da consulta.
    const filterLaunches = launches.filter(({mission_name}) =>
      mission_name.toLowerCase().includes(textSearch.toLowerCase()),
    );
    if (filterLaunches.length === 0) return <Text> SEM RESULTADOS</Text>;

    return (
      <LaunchList
        data={filterLaunches}
        keyExtractor={launche => String(launche.flight_number)}
        renderItem={({item: launche}) => <LaunchItem launche={launche} />}
      />
    );
  }
  const onChangeTextSearch = text => {
    setTextSearch(text);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#fece2e" />
      <Header
        title="Lançamentos 🚀"
        subtitle="Ao infinito e além! 👨🏽‍🚀"
        image={BackgroundImage}
      />
      <SearchBar onChangeTextSearch={onChangeTextSearch} />
      {renderList()}
      {/* <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      /> */}
    </Container>
  );
}
