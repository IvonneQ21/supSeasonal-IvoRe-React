import initialState from './initialState';

const currentSelectedMonth = (state = initialState.currentSelectedMonth, action) => {
  switch(action.type) {
    case 'SET_MONTH':
      return action.month;
    default:
      return state
  }
}

export default currentSelectedMonth;
