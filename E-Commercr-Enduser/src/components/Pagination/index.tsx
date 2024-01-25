import { useNavigate } from "react-router-dom";

type queryType = {
    page?: number;
    category?: string
}

type TPagination = {
    queryString: queryType,
    totalPages: number,
    currentPage: number,
    setCurrentPage: (page: number) => void
}

function encodeQueryData(data: Record<string, any>) {
    const ret = [];
    for (const d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}



const Pagination = ({ queryString, totalPages, currentPage, setCurrentPage }: TPagination) => {
    const navigate = useNavigate();

    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)



    const goToNextPage = () => {
        if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        // <div className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">


        //         {pageNumbers.map(pgNumber => (

        //         <button type="button" 
        //         key={pgNumber} 
        //         className={pgNumber === currentPage ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-none": "rounded-none relative z-10 inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"}
        //         onClick={()=>{
        //             setCurrentPage(pgNumber);
        //             //Thêm page vào uRL hiện tại
        //             queryString = {...queryString,page: pgNumber};
        //             const pageUrl = `/products?`+encodeQueryData(queryString);
        //             navigate(pageUrl);
        //         }}

        //         >
        //             {pgNumber}
        //         </button>

        //         ))}

        // </div>
        <>
            <ul className="flex items-center justify-center">
                {
                    pageNumbers.map(pgNumber => (
                        <li className="mr-5"><a key={pgNumber} className={pgNumber === currentPage ?'inline-flex items-center h-6 px-2 text-sm text-black font-bold' : 'hover:bg-gray-900'}  onClick={()=>{
                                        setCurrentPage(pgNumber);
                                        //Thêm page vào uRL hiện tại
                                        queryString = {...queryString,page: pgNumber};
                                        const pageUrl = `/products?`+encodeQueryData(queryString);
                                        navigate(pageUrl);
                                    }}>{pgNumber}</a></li>
                    ))
                }
            </ul>
        </>
    )
}

export default Pagination