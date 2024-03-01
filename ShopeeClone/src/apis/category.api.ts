import http from 'src/utils/http'
import { Category } from 'src/types/category.type'
import { SuccessResponse } from 'src/types/utils.type'

const URL = 'api/v1/categories/'

interface CategoryData {
  categories: Category[]
}

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<CategoryData>>(URL)
  }
}

export default categoryApi
