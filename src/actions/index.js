import axios from 'axios';

export const fetchIngredients = (queryMonth) => {
  console.log('src/actions/index/fetchIngredients');
  const API_URL = `https://supseasonal.herokuapp.com/api/months/${queryMonth}`
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}

export const getIngredients = (queryMonth) => {
  console.log('src/actions/index/getIngredients');
  const data = fetchIngredients(queryMonth);
  console.log('ingredients data', data);
  return {
    type: 'GET_INGREDIENTS',
    payload: data
  }
}

export const fetchRecipes = (queryMonth) => {
  console.log('src/actions/index/fetchRecipes');
  const API_URL = `https://supseasonal.herokuapp.com/api/months/${queryMonth}/recipes`;
  return axios.get(API_URL)
  .then((response) => {
    return response.data;
  });
}

export const getRecipes = (queryMonth) => {
  console.log('src/actions/index/getRecipes');
  const data = fetchRecipes(queryMonth);
  console.log('recipe data', data);
  return {
    type: 'GET_RECIPES',
    payload: data
  }
}


export const setMonth = (queryMonth) => {
  console.log('src/actions/index/setMonth');
  return {
    type: 'SET_MONTH',
    month: queryMonth
  }
}

//Ivonne
//user login and user registration.
 // let user = {email:"", password:""}
// need to dispatch your reducer

export const postLogUser = (value) => {
  const postLogURL = `https://supseasonal.herokuapp.com/api/login`;
  return axios.post(postLogURL, value)
    .then((response) => {
      console.log('user info:', response.data);
      console.log(response)
      return response.data;
  })
}









// findUserAction
export const findUser = (userinfo) => {
  console.log(userFound);
  const userFound = postLogUser(userinfo);
  return {
    type: 'LOGIN',
    payload: userFound
    }
}
//needs more work.
 //registerUser
 export const postToregUser = (props) =>{
   const postLogURL = `http://supseasonal.herokuapp.com/api/register`;
   return axios.post(postLogURL, {props})
     .then((response) => {
       return response.data;
   })
 }

export const regUser = (userinfo) => {
  // const regedUser = regUser(userinfo);
  return {
    type: 'REGISTER_FULFILLED',
    payload: postToregUser(userinfo)
  }
}



// export const setRecipes = () => {
//
// }
// export default { setMonth, getIngredients, getRecipes, fetchIngredients, fetchRecipes }
