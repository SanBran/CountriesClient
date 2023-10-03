import axios from '../utils/axios'

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ORDER_NAME = " ORDER_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getCountries = () => {
  return async (dispatch) => {
    const response = await axios.get("/countries");
    const data = response.data;
    return dispatch({
      type: GET_COUNTRIES,
      payload: data,
    });
  };
};

export const getCountryByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/countries?name=${name}`
      );
      const data = response.data;
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: error.response.data,
      });
    }
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `/countries/${id}`
    );
    const data = response.data;
    return dispatch({
      type: GET_DETAIL,
      payload: data,
    });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "/activities"
    );
    const data = response.data;
    return dispatch({
      type: GET_ACTIVITIES,
      payload: data,
    });
  };
};

export const postActivity = (activity) => {
  return async (dispatch) => {
    const response = await axios.post(
      "/activities",
      activity
    );
    const data = response.data;
    return dispatch({
      type: POST_ACTIVITY,
      payload: data,
    });
  };
};

export const orderByName = (value) => {
  return {
    type: ORDER_NAME,
    payload: value,
  };
};

export const orderPopulation = (value) => {
  return {
    type: ORDER_POPULATION,
    payload: value,
  };
};

export const filterByContinent = (value) => {
  return {
    type: FILTER_CONTINENT,
    payload: value,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};
