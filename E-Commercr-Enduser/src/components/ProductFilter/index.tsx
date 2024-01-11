import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from '../../constants/types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type queryType = {
    page?: number;
    category?: number;
}

type ProductFilterType = {
    queryString: queryType;
    currentCategoryId: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const ProductFilter = ({ queryString, currentCategoryId, currentPage, setCurrentPage }: ProductFilterType) =>{

    const navigate = useNavigate();

    const getCategories = async () => {
        return axios.get(`http://localhost:9494/api/v1/categories`);
    };

    const queryCategory = useQuery({
        queryKey: ['categories'],
        queryFn: ()=> getCategories(),
        onSuccess: (data)=>{
            //Thành công thì trả lại data
            console.log(data?.data.data.categories);
          },
          onError: (error)=>{
            console.log(error);
          },
    })

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 md:gap-8 lg:gap-10 lg:max-w-2xs lg:pt-28  lg:pb-9 px-4">
                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-5" data-config-id="auto-txt-2-2">Price</h6>
                  <input className="w-full bg-blue-500" type="range" data-config-id="auto-input-1-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-3-2">$0</span>
                    <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-4-2">$200</span>
                  </div>
                </div>
                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-8" data-config-id="auto-txt-5-2">Category</h6>
                  <li className='list-none'>
                    <button
                       onClick={() => {
                        setCurrentPage(1);
                        navigate(`/products`);
                      }}
                      className={currentCategoryId === 0 ? `hover:text-indigo-500 font-bold text-indigo-500 btn-empty` : `btn-empty hover:text-indigo-500`}
                    >
                      Tất cả
                    </button>
                    </li>
                      <>
                      {
                    queryCategory.data && queryCategory.data?.data.data.categories ?  queryCategory.data?.data.data.categories.map((item: any) =>{
                      
                      return(
                        <ul className="list-unstyled mb-0">
                          <li key={`queryCategory${item._id}`} className="mb-4"><a  onClick={() => {
                        setCurrentPage(1);
                        navigate(`/products/${item._id}`);
                      }}
                          
                          className={ currentCategoryId === item._id ? `inline-block font-medium text-gray-600` : `hover:text-gray-400`}>{item.name}</a></li>
                        </ul>
                      )
                    }):null
                  }
                      </>
                </div>
                
                
              </div>
    )
}

export default ProductFilter;