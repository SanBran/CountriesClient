import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../redux/actions";

import validate from "./validation";
import Select from "react-select"



import styles from "./Form.module.css";

export default function Form () {
   const dispatch = useDispatch()
   const countries = useSelector((state) => state.countries)

const selectCountries = []
const selectSeasons = [
    {label:"spring", value: "spring"},
    {label:"summer", value: "summer"},
    {label:"autumn", value: "autumn"},
    {label:"winter", value: "winter"}
     ]

countries.map(e => selectCountries.push({label:e.name, value: e.name}))
   

   const [input, setInput] =useState({
        name:"",
        difficulty:"",
        duration:"",
        season: [],
        countries: []
   })

   const [errors, setErrors] =useState({
        name:"",
        difficulty:"",
        duration:"",
        season: [],
        countries: []
})

   const handleChange = (e)=>{
    setInput({
        ...input,
        [e.target.name] : e.target.value
    });

    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value
        })
    )
   }

   const handleSelectC = (e) => {
    if (input.countries.includes(e.value))
        {
        
        } else {
    setInput({
        ...input,
        countries: [...input.countries, e.value]
    })

    setErrors(
        validate({
            ...input,
            countries: [...input.countries, e.value]
        })
    )
    console.log(input.countries)
    }}

    const handleSelectS = (e) => {
        if (input.season.includes(e.value))
        {
        
        } else {
            setInput({
                ...input,
                season: [...input.season, e.value]
            })
            setErrors(
                validate({
                    ...input,
                    season: [...input.season, e.value]
                })
            )
            console.log(input.season)
        }
    }

   

   const handleSubmit = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    if(!errors.name || !errors.difficulty || !errors.duration || !errors.season || !errors.countries){
        dispatch(postActivity(input))
        alert("Activity created")
        setInput({
            name:"",
            difficulty:"",
            duration:"",
            season: [],
            countries: []
        })
    }
    
   }

   const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setInput({...input, countries: input.countries.filter((c) => c !== e.target.value)})
    
   }
  

   useEffect(() => {
    dispatch(getCountries())
    .catch(err=>err)
   }, [])

   

   return (
    <div className={styles.bigContainer}>
     <div className={styles.container}>
        <h1 className={styles.title}>Create your activity</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.name}>
                <label >Name </label>
                <input type="text"  value={input.name} name="name" onChange={handleChange}/>
                <span className={styles.errors}>{errors.name && <p>{errors.name}</p>}</span>
            </div>
            <div className={styles.difficulty}>
                <label>Difficulty </label>
                <input type="number" min="1" max="5" value={input.difficulty} name="difficulty" onChange={handleChange}/>
                <span className={styles.errors}>{errors.difficulty && <p>{errors.difficulty}</p>}</span>
            </div>
            <div className={styles.duration}>
                <label className={styles.duration}>Duration </label>
                <input type="text" value={input.duration} name="duration" onChange={handleChange}/>
                <span className={styles.errors}>{errors.duration && <p>{errors.duration}</p>}</span>
            </div>
            <div className={styles.inputBox}>
            <label className={styles.season}>Seasons </label>
            <Select className={styles.select}
                options={selectSeasons}    
                onChange={handleSelectS}  
                    />
                    <span className={styles.errors}>{errors.season && <p>{errors.season}</p>}</span>
            </div>
            <div className={styles.inputBox}>
            <label className={styles.countries}>Countries </label>
            <Select className={styles.select}
                options={selectCountries}    
                onChange={handleSelectC}
                    />
                    <span className={styles.errors}>{errors.countries && <p>{errors.countries}</p>}</span>
                    {input.countries.length?<div className={styles.countriesSelected}>
                    {input.countries.map(c => (<span className={styles.countselect}>{c}<button type="close" className={styles.x} onClick={handleDelete} value={c}>x</button></span>))}
                    </div>: <></>}
                    
                    
            </div>           
            {(errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) 
                    ?  <button type="submit" className={styles.btnCreateDisabled} disabled>Create Activity</button>
                    :  <button className={styles.btn}>Create Activity</button>
                    }
        </form>
        
     </div>
     </div>
   )
};
