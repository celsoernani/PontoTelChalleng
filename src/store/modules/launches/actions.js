export function getLaunchesRequest(page) {
  return {
    type: '@launches/GET_REQUEST',
    page,
  };
}

export function getLaunchesSuccess(allLaunche) {
  return {
    type: '@launches/GET_SUCCESS',
    allLaunche,
  };
}
