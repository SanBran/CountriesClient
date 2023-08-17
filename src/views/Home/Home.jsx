import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, getCountries, orderByName,orderPopulation,filterByActivity, getActivities } from "../../redux/actions";
import Select from "react-select";

import styles from "./Home.module.css";

import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination.jsx";


export default function Home ({currentPage, setCurrentPage, active, setActive }) {

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries)
    const activities = useSelector(state => state.activities)    
    const [order, setOrder] = useState('');

    const countriesPerPage =  9; // Cards por página
    const paginationSize = 7; // paginas visibles en paginación
    const lastCountryIndex = currentPage * countriesPerPage; 
    const firstCountryIndex = lastCountryIndex - countriesPerPage; 
    const currentCountry = (!allCountries.error) && allCountries.slice(firstCountryIndex, lastCountryIndex);

    
    useEffect(() => {           
            dispatch(getCountries())
            .catch(err=>err)
            
        
    }, [])

    useEffect(() => {
        dispatch(getActivities())
        .catch(err=>err)
       }, [])

    const optionsSortByName = [
        {label: "Sort by Name", value: "Sort by Name"},
        {label: "A-Z", value: "A-Z"},
        {label: "Z-A", value: "Z-A"}
    ]
    const optionsSortByPopulation = [
        {label: "Sort by Population", value: "Sort by Population"},
        {label: "Ascending", value: "Ascending"},
        {label: "Descending", value: "Descending"}
    ]
    const filterContinent = [{label: "Filter by Continent", value: "Filter by Continent"},
    {label: "Africa", value: "Africa"},
    {label: "Antarctica", value: "Antarctica"},
    {label: "Asia", value: "Asia"},
    {label: "Europe", value: "Europe"},
    {label: "North America", value: "North America"}, 
    {label: "Oceania", value: "Oceania"},
    {label: "South America", value: "South America"},
]
    

    const filterActivity = [{label: "Filter by Activity", value: "Filter by Activity"}]
    activities.map(e => filterActivity.push({label:e.name, value: e.name}))

    const handlerOrderByName = (event) => {
        dispatch(orderByName(event.value));
        setCurrentPage(1);
        setOrder(`Order: ${event.value}`);
    }

    const handlerOrderByPopulation = (event) => {
        dispatch(orderPopulation(event.value))
        setCurrentPage(1);
        setOrder(`Order: ${event.value}`);
    }
  
    const handlerFilterContinent = (event) => {
        dispatch(filterByContinent(event.value));
        setCurrentPage(1);
    }
  
    const handlerFilterActivties = (event) => {
        dispatch(filterByActivity(event.value));
        setCurrentPage(1);
    }

    return (
        <div className={styles.Container}>
          <div className={styles.filterContainer} >
            <Select 
                options={optionsSortByName}    
                placeholder="Sort by Name" 
                onChange={handlerOrderByName}
                    />
            <Select 
                options={optionsSortByPopulation}    
                placeholder="Sort by Population"
                onChange={handlerOrderByPopulation}   
                    />
            <Select 
                options={filterContinent}    
                placeholder="Filter by Continent"
                onChange={handlerFilterContinent}  
                    />
            <Select 
                options={filterActivity}    
                placeholder="Filter by Activity"
                onChange={handlerFilterActivties}   
                    />
          </div>
            <div className={styles.cards}>
            <Cards currentCountry={currentCountry}/>
            </div>
            <div className={styles.paginationContainer}>
            <Pagination 
                        allCountries={allCountries.length} 
                        countriesPerPage={countriesPerPage}
                        paginationSize={paginationSize}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        active={active}
                        setActive={setActive}
                        />
            </div>
        </div>
    )
}