import React, { useState, useEffect } from 'react'
import '../css/Pagination.css'

const Pagination = ({ page, totalPages, paginate }) => {
    const [activeNext, setActiveNext] = useState(true);
    const [activePrev, setActivePrev] = useState(true);

    const next = () => {
        paginate(page + 1)
        
    }

    const prev = () => {
        paginate(page - 1)
        
    }

    useEffect(() => {
        if (totalPages === page) {
            setActiveNext(true)
        } else if (totalPages === 0) {
            setActiveNext(true)
        } else {
            setActiveNext(false)
        }
    }, [totalPages, page])

    useEffect(() => {
        if (page === 1) {
            setActivePrev(true)
        } else {
            setActivePrev(false)
        }
    }, [totalPages, page])

    console.log(totalPages);

    return (
        (
            totalPages < 2 ? null : (
                <div className="btnContent">
                    <button className="btnPage" onClick={prev} disabled={activePrev}> &#8592; </button>
                    <button className="btnPage" onClick={next} disabled={activeNext}> &#8594; </button>
                </div>
            )
        )
    )
}

export default Pagination
