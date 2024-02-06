import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined';
import { ProductListConfig } from '../types/product.type';
import useQueryParams from './useQueryParams';

// import { useQueryParams } from 'src/hooks';
// import { ProductListConfig } from 'src/types/product.type';

export type QueryConfig = {
    [key in keyof ProductListConfig]: string;
};

function useQueryConfig() {
    const queryParams: QueryConfig = useQueryParams();
    const queryConfig: QueryConfig = omitBy(
        {
            page: queryParams.page || '1',
            limit: queryParams.limit || '20',
            sort_by: queryParams.sort_by,
            order: queryParams.order,
            exclude: queryParams.exclude,
            name: queryParams.name,
            price_max: queryParams.price_max,
            price_min: queryParams.price_min,
            rating_filter: queryParams.rating_filter,
            category: queryParams.category,
        },
        isUndefined,
    );

    return queryConfig;
}

export default useQueryConfig;
