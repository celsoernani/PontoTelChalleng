import {call, put, all, takeLatest} from 'redux-saga/effects'; // importando funções do saga para chamadas da api e actions do redux.
import api from '../../../services/api'; // importando api
import {getLaunchesSuccess} from './actions'; // importando as actions necessárias.

function* getLaunches() {
  // função assíncrona
  const {data} = yield call(api.get, `/launches?limit=15`); // chamando a api para carregar os lançamentos.
  // yield data.map(allLaunche => {
  //   return put(getLaunchesSuccess(allLaunche));
  // });

  yield all(data.map(allLaunche => put(getLaunchesSuccess(allLaunche))));
}

export default all([takeLatest('@launches/GET_REQUEST', getLaunches)]); // adcionando listeners para aplicação chamar o saga
