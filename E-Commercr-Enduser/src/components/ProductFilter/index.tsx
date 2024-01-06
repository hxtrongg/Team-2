import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from '../../constants/types';
import config from '../../constants/config';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



interface queryType {
  page?: number;
  category?: string;

}

interface ProductFilterType  {
  queryString: queryType;
  currentCategoryId: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

function encodeQueryData(data: Record<string, any>) {
  const ret = [];
  for (const d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}


const ProductFilter = ({ queryString, currentCategoryId, currentPage, setCurrentPage }: ProductFilterType) => {
  
    const navigate = useNavigate();
    let params = useParams();
    console.log(params);
    const slug = params.slug;
    //=================== Fetch Categories ============ //
    const fetchCategories = async () => {
      return axios.get(config.urlAPI+'/v1/categories')
    };
    // Sử dụng useQuery để fetch data từ API
    const queryCategories = useQuery({
      queryKey: ['categories'],
      queryFn: fetchCategories,
      onSuccess: (data) => {
        //Thành công thì trả lại data
        console.log(data?.data.data.categories);
      },
      onError: (error) => {
        console.log(error);
      },
  
    })



    const fetchSupplier = async () => {
      return axios.get(config.urlAPI+'/v1/suppliers')
    };
    // Sử dụng useQuery để fetch data từ API
    const querySuppliers = useQuery({
      queryKey: ['supplier'],
      queryFn: fetchSupplier,
      onSuccess: (data) => {
        //Thành công thì trả lại data
        console.log(data?.data.data.supplier);
      },
      onError: (error) => {
        console.log(error);
      },
  
    })
  


    return (
    <>
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
                      className={currentCategoryId === '' ? `hover:text-indigo-500 font-bold text-indigo-500 btn-empty` : `btn-empty hover:text-indigo-500`}
                    >
                      Tất cả
                    </button>
                    </li>
                      <>
                      {
                    queryCategories.data && queryCategories.data.data.data.categories ?  queryCategories.data.data.data.categories.map((item: ICategory) =>{
                      
                      return(
                        <ul className="list-unstyled mb-0">
                          <li key={`queryCategories${item._id}`} className="mb-4"><a  onClick={() => {
                        setCurrentPage(1);
                        navigate(`/products?category=${item._id}`);
                      }}
                          
                          className={ currentCategoryId === item._id.toString() ? `inline-block font-medium text-gray-600` : `hover:text-gray-400`}>{item.name}</a></li>
                        </ul>
                      )
                    }):null
                  }
                      </>
                </div>
                
                
              </div>
    </>
  )
}

export default ProductFilter



