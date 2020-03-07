import produce from 'immer';

const INITIAL_STATE = [];

export default function launches(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@launches/GET_SUCCESS':
      return produce(state, draft => {
        const {allLaunche} = action;
        if (!draft.find(l => l.flight_number === allLaunche.flight_number)) {
          draft.push(allLaunche);
        }
      });
    default:
      return state;
  }
}
