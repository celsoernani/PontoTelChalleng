import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as LaunchesActions from '../../store/modules/launches/actions';
import LaunchItem from './components/LaunchItem';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import BackgroundImage from '../../assets/images/background.png';

import {Container, LaunchList, Loading, TextEnd} from './styles';

export default function Launches({navigation}) {
  const dispatch = useDispatch();
  const [textSearch, setTextSearch] = useState('');
  const [page, setPage] = useState(0);
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    dispatch(LaunchesActions.getLaunchesRequest(page));
  }, [dispatch, page]);
  const {launches} = useSelector(state => state);

  const loadingMore = () => {
    setPage(page + 16);
    if (page > 112) {
      setEnded(true);
    } else {
      dispatch(LaunchesActions.getLaunchesRequest(page));
    }
  };

  const renderFooter = () => {
    if (textSearch) return null;
    if (ended) return <TextEnd> Fim dos lançamentos. </TextEnd>;
    return <Loading />;
  };

  function renderList() {
    const filterLaunches = launches.filter(({mission_name}) =>
      mission_name.toLowerCase().includes(textSearch.toLowerCase()),
    );
    if (filterLaunches.length === 0) return <Loading />;

    return (
      <LaunchList
        data={filterLaunches}
        keyExtractor={launche => String(launche.flight_number)}
        onEndReached={loadingMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        renderItem={({item: launche}) => (
          <LaunchItem navigation={navigation} launche={launche} />
        )}
      />
    );
  }
  const onChangeTextSearch = text => {
    setTextSearch(text);
  };

  return (
    <Container>
      <Header
        title="Lançamentos 🚀"
        subtitle="Ao infinito e além! 👨🏽‍🚀"
        image={BackgroundImage}
      />
      <SearchBar onChangeTextSearch={onChangeTextSearch} />
      {renderList()}
    </Container>
  );
}
