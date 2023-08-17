import { Link } from "react-router-dom"
import styles from "./Card.module.css"

function Card({country}) {

const {name, flag, continent, id} = country

    return (
        <div className={styles.container}>
        <Link className={styles.link} to={`/detail/${id}`}>
            <img className={styles.image} src= {flag} alt="Card"/>
            <h2 className={styles.hs}>{continent}</h2>
            <h2 className={styles.name}>{name}</h2>
        </Link>
        </div>
    )
}

export default Card