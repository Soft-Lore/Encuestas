import { useState } from 'react'

const usePaginate = (surveysCard) => {
    const [page, setPage] = useState(1);
    const surveysPerPage = 8;
    const lastIndex = page * surveysPerPage;
    const firstIndex = lastIndex - surveysPerPage;

    const currentSurveys = surveysCard && (surveysCard.slice(firstIndex, lastIndex))

    const paginate = numPage => setPage(numPage)

    return {page, surveysPerPage, paginate, currentSurveys}
}

export default usePaginate
