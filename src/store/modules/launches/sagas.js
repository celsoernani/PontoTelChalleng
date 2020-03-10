import {call, put, all, takeLatest} from 'redux-saga/effects'; // importando funções do saga para chamadas da api e actions do redux.
import api from '../../../services/api'; // importando api
import {getLaunchesSuccess} from './actions'; // importando as actions necessárias.

function* getLaunches({page}) {
  // função assíncrona
  const {data} = yield call(api.get, `/launches?limit=16&offset=${page}`); // chamando a api para carregar os lançamentos.
  yield all(data.map(allLaunche => put(getLaunchesSuccess(allLaunche))));
}

export default all([takeLatest('@launches/GET_REQUEST', getLaunches)]); // adcionando listeners para aplicação chamar o saga
