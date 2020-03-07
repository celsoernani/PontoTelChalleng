export function getLaunchesRequest() {
  return {
    type: '@launches/GET_REQUEST',
  };
}

export function getLaunchesSuccess(allLaunche) {
  return {
    type: '@launches/GET_SUCCESS',
    allLaunche,
  };
}
