// import React, { Component } from 'react';
import axios from 'axios';
// import { fetchRecipes } from '../API_Docs/Recipes';

const fetchIngredients = (queryMonth) => {
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}`
  return axios.get(API_URL)
    .then(response => response.data)
    // });
}

const fetchRecipes = (queryMonth) => {
  const API_URL = `http://supseasonal.herokuapp.com/api/months/${queryMonth}/recipes`;
  return axios.get(API_URL)
    .then((response) => {
      return response.data;
    });
}
//action for month selection.
const setMonth = (queryMonth) => {
  console.log('i am clicked');
  return {
    type: 'SET_MONTH',
    payload: queryMonth
  }
}

const getIngredients = (queryMonth) => {
  const data = fetchIngredients(queryMonth);
  return {
    type: 'GET_INGREDIENTS',
    payload: data
  }
}

const getRecipes = (queryMonth) => {
  const data = fetchRecipes(queryMonth);
  return {
    type: 'GET_RECIPES',
    payload: data
  }
}

export default { setMonth, getIngredients, getRecipes, fetchIngredients, fetchRecipes }
