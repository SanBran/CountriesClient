import React from "react";
import styles from "./Pagination.module.css"

const Pagination = ({countriesPerPage, paginationSize, allCountries, currentPage, setCurrentPage, active, setActive}) => {

    let nums = 0
  const pageNumbers = []
    nums = Math.ceil(allCountries/9) 


    for (let i = 1; i <= allCountries/countriesPerPage; i++) {
        pageNumbers.push(i)
        
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        setActive(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        setActive(currentPage - 1)
    }

    const specificPage = (n) => {
        setCurrentPage(n)
        setActive(n)
    }
    

    const renderPageNumbers = () => {

      const maxVisiblePageNumbers = 5;
      const startIndex = Math.max(currentPage - Math.floor(maxVisiblePageNumbers), 0);
      const endIndex = Math.min(startIndex + maxVisiblePageNumbers, nums);
    
      const visiblePageNumbers = pageNumbers.slice(startIndex, endIndex);
    
    
        return visiblePageNumbers.map((page, index) => (
          <div
            value={page}
            className={active === page ? styles.active : styles.page}
            key={index}
            onClick={() => specificPage(page)}
          >
            {page}
          </div>
        ));
      };

      const toEnd = () => {
        setCurrentPage(pageNumbers.length)
          setActive(pageNumbers.length)
      }
      const toStart = () => {
        setCurrentPage(1)
          setActive(1)
      }

      return (
        <div className={styles.container}>
          {currentPage > 1 ? (
            <div>
              <button className={styles.Previous} onClick={toStart}>
              《
            </button>
            <button className={styles.Previous} onClick={prevPage}>
              〈
            </button>
            </div>
          ) : (
            <div>
            <button className={styles.disPrevious}>《</button>
            <button className={styles.disPrevious}>〈</button>
            </div>
          )}
          {renderPageNumbers()}
          {currentPage < pageNumbers.length ? (
            <div>
            <button className={styles.Next} onClick={nextPage}>
              〉
            </button>
            <button className={styles.Next} onClick={toEnd}>
             》
            </button>
            </div>
          ) : (
            <div>
            <button className={styles.disNext}>〉</button>
            <button className={styles.disNext}>》</button>
            </div>
          )}
        </div>
      );
    };
    

export default Pagination