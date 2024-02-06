// import {
//     Product,
//     ProductList,
//     ProductListConfig,
// } from 'src/types/product.type';
// import { SuccessResponseApi } from 'src/types/util.type.ts';
// import httpRequest from 'src/utils/http';

import { Product, ProductList, ProductListConfig } from "../types/product.type";
import { SuccessResponseApi } from "../types/util.type.ts";
import httpRequest from "../utils/http";

const URL = 'http://localhost:3000/api/v1/products';

const productService = {
    getProducts: (params: ProductListConfig) => {
        return httpRequest.get<SuccessResponseApi<ProductList>>(URL, {
            params,
        });
    },
    getProductDetail: (id: string) => {
        return httpRequest.get<SuccessResponseApi<Product>>(`${URL}/${id}`);
    },
};

export default productService;
