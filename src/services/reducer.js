function reducer(state, { type, payload }) {
  switch (type) {
    case 'good':
    case 'neutral':
    case 'bad':
      return {
        ...state,
        [type]: state[type] + payload,
      };
    default:
      return state;
  }
}
export default reducer;
