import styles from "./Cards.module.css";

import Card from "../Card/Card"

const Cards = ({currentCountry}) => {

    

    return (
        <div className={styles.container}>
           {currentCountry && currentCountry?.map((country, index) => {
            return (
                <Card country={country} key={index}/>)
           }) }

        </div>
    )
}

export default  Cards