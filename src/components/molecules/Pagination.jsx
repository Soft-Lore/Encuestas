import React, { useState, useEffect } from 'react'
import '../css/Pagination.css'

const Pagination = ({ page, totalPages, paginate }) => {
    const [activeNext, setActiveNext] = useState(false);
    const [activePrev, setActivePrev] = useState(false);

    const next = () => {
        paginate(page + 1)
        
    }

    const prev = () => {
        paginate(page - 1)
        
    }

    useEffect(() => {
        if (totalPages === page || page > 1) {
            setActiveNext(true)
            setActivePrev(false)
        } else if (page === 1 || totalPages < page) {
            setActiveNext(false)
            setActivePrev(true)
        } else {
            setActiveNext(false)
            setActivePrev(false)
        }
    }, [next, prev])

    return (
        <div className="btnContent">
            <button className="btnPage" onClick={prev} disabled={activePrev}> &#8592; </button>
            <button className="btnPage" onClick={next} disabled={activeNext}> &#8594; </button>
        </div>
    )
}

export default Pagination
