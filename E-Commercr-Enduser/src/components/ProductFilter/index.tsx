import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@tanstack/react-query';
// import { ICategory } from '../../constants/types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type queryType = {
    page?: number;
    category?: number;
}

type ProductFilterType = {
    queryString: queryType;
    currentCategoryId: number;
    currentSuppliersId: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const ProductFilter = ({ queryString, currentSuppliersId ,currentCategoryId, currentPage, setCurrentPage }: ProductFilterType) =>{

    const navigate = useNavigate();
    // State để lưu trữ giá trị của thanh trượt giá
    const [priceRange, setPriceRange] = useState([0, 200]); 
    // State để lưu trữ danh sách sản phẩm đã lọc
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]); 


    // hàm lấy category
    const getCategories = async () => {
        return axios.get(`http://localhost:8080/api/v1/categories`);
    };

    // hàm lấy suppliers.
    const getSuppliers = async () => {
      return axios.get(`http://localhost:8080/api/v1/suppliers`);
    };
    

    const queryCategory = useQuery({
        queryKey: ['categories'],
        queryFn: ()=> getCategories(),
        onSuccess: (data)=>{
            //Thành công thì trả lại data
            console.log('<<=== 🚀 Category ===>>',data?.data.data.categories);
          },
          onError: (error)=>{
            console.log(error);
          },
    });

    const querySuppliers = useQuery({
      queryKey: ['suppliers'],
      queryFn: getSuppliers,
      onSuccess: (data) => {
         // Log dữ liệu nhà cung cấp khi thành công
        console.log('<<=== 🚀 Suppliers ===>>', data?.data.data.supplier); 
      },
      onError: (error) => {
        console.log(error); // Log lỗi nếu có
      },
    });

     // Hàm lọc giá tiền sản phẩm theo số
     const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPrice = parseInt(event.target.value);
      const updatedPriceRange = [...priceRange]; // Tạo một bản sao của mảng priceRange
      updatedPriceRange[1] = newPrice; // Cập nhật giá trị max của khoảng giá mới
      if (updatedPriceRange[1] > 200) {
        updatedPriceRange[1] = 200; // Đảm bảo giá trị max không vượt quá 200
    }
      setPriceRange(updatedPriceRange); // Cập nhật biến state priceRange
      // Lọc sản phẩm dựa trên khoảng giá mới
       navigate(`/products?minPrice=${updatedPriceRange[0]}&maxPrice=${updatedPriceRange[1]}`);
  };

  useEffect(() => {
    // Thực hiện lọc sản phẩm dựa trên giá đã lọc
    //fetchProductsFilteredByPrice(priceRange[0], priceRange[1])
    // Sau đó cập nhật danh sách sản phẩm đã lọc vào state filteredProducts
}, [priceRange]);
    

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 md:gap-8 lg:gap-10 lg:max-w-2xs lg:pt-28  lg:pb-9 px-4">
                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-5" data-config-id="auto-txt-2-2">Giá</h6>
                  <input
                    className="w-full bg-blue-500"
                    type="range"
                    min="0"
                    max="200"
                    step="1"
                    value={priceRange[1]} // Sử dụng giá trị max của khoảng giá để hiển thị trên thanh trượt
                    onChange={handlePriceChange}
                    data-config-id="auto-input-1-2"
                />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-3-2">$0</span>
                    <span className="text-sm font-medium text-gray-600" data-config-id="auto-txt-4-2">$200</span>
                  </div>
                </div>
                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-8" data-config-id="auto-txt-5-2">Category</h6>
                  <li className='list-none'>
                   
                    </li>
                      <>
                      {
                    queryCategory.data && queryCategory.data?.data.data.categories ?  queryCategory.data?.data.data.categories.map((item: any) =>{
                      
                      return(
                        <ul className="list-unstyled mb-0">
                          <li key={`queryCategory${item._id}`} className="mb-4"><a  onClick={() => {
                        setCurrentPage(1);
                        navigate(`/products/category/${item._id}`);
                      }}
                          
                          className={ currentCategoryId === item._id ? `inline-block font-medium text-gray-600` : `hover:text-gray-400`}>{item.name}</a></li>
                        </ul>
                      )
                    }):null
                  }
                      </>
                </div>

                <div className="hidden lg:block pb-10 lg:border-b border-gray-600">
                  <h6 className="font-bold text-black mb-8" data-config-id="auto-txt-5-2">Thương hiệu</h6>
                  <li className='list-none'>
                    </li>
                      <>
                      {
                    querySuppliers.data && querySuppliers.data?.data.data.supplier ?  querySuppliers.data?.data.data.supplier.map((item: any) =>{
                      
                      return(
                        <ul className="list-unstyled mb-0">
                          <li key={`querySupplier${item._id}`} className="mb-4"><a  onClick={() => {
                        setCurrentPage(1);
                        navigate(`/products/supplier/${item._id}`);
                      }}
                          
                          className={ currentSuppliersId === item._id ? `inline-block font-medium text-gray-600` : `hover:text-gray-400`}>{item.name}</a></li>
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