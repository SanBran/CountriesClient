import { Link, useLocation, useNavigate} from "react-router-dom"

import styles from "./NavBar.module.css"

import SearchBar from "./SearchBar/SearchBar"

import logo from "../../sources/logo.png"


const NavBar = ({setCurrentPage, setLoading, setActive}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const refreshPage = () => {
        if(location.pathname !== '/home') {
            navigate('/home');
        } else {
            navigate(0);
        }
    }
       
    return (
        <nav className={styles.nav}>
            <a onClick={refreshPage} >
            <img className={styles.logo} src={logo} alt="Logo"/>
            </a>
            <SearchBar setCurrentPage={setCurrentPage} setLoading={setLoading} setIsActive={setActive}/>
            <Link to='/form' className={styles.create}>
            <h1>Create your Activity</h1>
            </Link>
        </nav>
    )
}

export default NavBar