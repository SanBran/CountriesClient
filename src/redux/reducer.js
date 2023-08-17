import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_DETAIL,
  GET_ACTIVITIES,
  ORDER_NAME,
  POST_ACTIVITY,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  CLEAN_DETAIL,
} from "./actions";

let initialState = {
  countries: [],
  countriesCopy: [],
  countryDetail: {},
  activities: [],
  filteredCountries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesCopy: action.payload,
        filteredCountries: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return { ...state, countries: action.payload };

    case GET_DETAIL:
      return { ...state, countryDetail: action.payload };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case POST_ACTIVITY:
      return { ...state };

    case ORDER_NAME:
      switch (action.payload) {
        case "Sort by Name":
          return {
            ...state,
            countries: state.countriesCopy,
          };
        case "A-Z":
          return {
            ...state,
            countries: state.countries.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
            }),
          };
        case "Z-A":
          return {
            ...state,
            countries: state.countries.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
            }),
          };
        default:
          break;
      }
    case ORDER_POPULATION:
      switch (action.payload) {
        case "Sort by Population":
          return {
            ...state,
            countries: state.countriesCopy,
          };
        case "Ascending":
          return {
            ...state,
            countries: state.countries.sort(
              (a, b) => a.population - b.population
            ),
          };
        case "Descending":
          return {
            ...state,
            countries: state.countries.sort(
              (a, b) => b.population - a.population
            ),
          };
        default:
          break;
      }

    case FILTER_CONTINENT:
      const filteredCountriesByContinent = state.countriesCopy.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        countries:
          action.payload === "Filter by Continent"
            ? state.countriesCopy
            : filteredCountriesByContinent,
      };

    case FILTER_ACTIVITY:
      const filteredCountriesByActivity = state.countries.filter((country) =>
        country.activities.some((activity) => activity.name === action.payload)
      );
      return {
        ...state,
        countries:
          action.payload === "Filter by Activity"
            ? state.countriesCopy
            : filteredCountriesByActivity,
      };

    default:
      return { ...state };
  }
};

export default reducer;
