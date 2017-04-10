import initialState from './initialState';

//
// export default function(){
//   return
//
// }

const currentSelectedMonth = (state = null, action) => {
  switch(action.type) {
    case 'SET_MONTH':
      return action.payload;
    }
    // default:
      return state;
  }
// }

export default currentSelectedMonth;
