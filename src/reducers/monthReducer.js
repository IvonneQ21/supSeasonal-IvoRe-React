import initialState from './initialState';

const currentSelectedMonth = (state ='', action) => {
  // console.log('src/reducers/monthReducer/const_currentSelectedMonth()');
  switch(action.type) {
    case 'SET_MONTH':
      // console.log('src/reducers/monthReducer/const_currentSelectedMonth()/SET_MONTH');
      return action.month;
    default:
      // console.log('src/reducers/monthReducer/const_currentSelectedMonth()/default');
      return state
  }
}

export default currentSelectedMonth;

// on here, you are missing a call to the api, when you set month, you should have a
// ingrideients payload for the selected / set month.
// this call either has to bring in ingridients, or you need to define it elsewhere.
// currently, no definition by month
