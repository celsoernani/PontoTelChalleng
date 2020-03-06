import produce from 'immer';

const INITIAL_STATE = [];

export default function launches(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@launches/GET_SUCCESS':
      return produce(state, draft => {
        const {allLaunches} = action;
        allLaunches.forEach(launche => {
          draft.push(launche);
        });
      });
    default:
      return state;
  }
}
