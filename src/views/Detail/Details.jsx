import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from '../../redux/actions';
import styles from "./Detail.module.css";

export default function Detail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
       
        dispatch(getDetail(id))
        .catch(err => err);

        return () => dispatch(cleanDetail())
    }, [dispatch, id]);
    
    const detail = useSelector(state => state.countryDetail);
    
        
    return (
      
        <div className={styles.bigContainer}>
        <div className={styles.container}> 
                <div className={styles.image}>
                <img className={styles.flag} src={detail.flag} alt={detail.name}/>
                </div>
            <div className={styles.texts}>
                    
                <h1 className={styles.title}>{detail.name}</h1>
                <h4 className={styles.id}>({detail.id})</h4>  
                <div className={styles.continent}>             
                <h3>Continent: </h3>
                <span>{detail.continent}</span>
                </div>  
                <div className={styles.capital}>             
                <h3>Capital: </h3>
                <span>{detail.capital}</span>
                </div>  
                <div className={styles.subregion}>             
                <h3>Subregion: </h3>
                <span>{detail.subregion}</span>
                </div>  
                <div className={styles.area}>             
                <h3>Area: </h3>
                <span>{detail.area}</span>
                </div>  
                <div className={styles.population}>             
                <h3>Population: </h3>
                <span>{detail.population}</span>
                </div>  
                    
            </div>
        </div>
        </div>
    )
}