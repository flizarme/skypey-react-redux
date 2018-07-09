export const SET_ACTIVE_USER_ID = 'activeUserId/SET_ACTIVE_USER_ID'

export const setActiveUserId = id => {
  return dispatch =>
    dispatch({
      type: SET_ACTIVE_USER_ID,
      payload: id
    })
};
