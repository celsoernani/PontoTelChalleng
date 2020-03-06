export function getLaunchesRequest() {
  return {
    type: '@launches/GET_REQUEST',
  };
}

export function getLaunchesSuccess(allLaunches) {
  return {
    type: '@launches/GET_SUCCESS',
    allLaunches,
  };
}
