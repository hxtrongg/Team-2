import { useNavigate } from "react-router-dom";

type TPagination = {
   totalPages: number,
   currentPage: number,
   setCurrentPage: (page: number) => void
}

const Pagination = ({ totalPages, currentPage, setCurrentPage }: TPagination) => {
    const navigate = useNavigate();
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)

    console.log(pageNumbers);

    // const goToNextPage = () => {
    //         if(currentPage !== totalPages) setCurrentPage(currentPage + 1)
    // }
    // const goToPrevPage = () => {
    //     if(currentPage !== 1) setCurrentPage(currentPage - 1)
    // }
    return (
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            

                {pageNumbers.map(pgNumber => (
                 
                <button 
                key={pgNumber} 
                className={pgNumber === currentPage ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-none": "rounded-none relative z-10 inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"}
                onClick={()=>{
                    setCurrentPage(pgNumber);
                    navigate(`/products?page=${pgNumber}`);
                }}
                
                >
                    {pgNumber}
                </button>
                   
                ))}
               
        </nav>
    )
}

export default Pagination