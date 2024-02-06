// import { Category } from 'src/types/category.type';
// import { SuccessResponseApi } from 'src/types/util.type.ts';
// import httpRequest from 'src/utils/http';

import { Category } from "../types/category.type.ts";
import { SuccessResponseApi } from "../types/util.type.ts";
import httpRequest from "../utils/http";

interface CategoryData {
            categories: Category[]
}

const URL = '/api/v1/categories';

const categoryService = {
    getCategories: () => {
        return httpRequest.get<SuccessResponseApi<CategoryData>>(URL);
    },
};

export default categoryService;
