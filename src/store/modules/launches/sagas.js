import {call, select, put, all, takeLatest} from 'redux-saga/effects'; // importando funções do saga para chamadas da api e actions do redux.
import api from '../../../services/api'; // importando api
import {getLaunchesSuccess} from './actions'; // importando as actions necessárias.

function* getLaunches() {
  // função assíncrona
  const allLaunches = yield call(api.get, `/launches`); // chamando a api para carregar os lançamentos.
  yield put(getLaunchesSuccess(allLaunches)); // chamando a action de sucesso do reducer para setar estado da aplicação.
}

export default all([takeLatest('@cart/ADD_REQUEST', getLaunches)]); // adcionando listeners para aplicação chamar o saga
