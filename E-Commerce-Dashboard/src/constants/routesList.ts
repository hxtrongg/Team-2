import Dashboard from '../pages/Dashboard';
import Products from '../pages/Product';
import Category from '../pages/Category';
import Customers from '../pages/Customers';
import Login from '../pages/Login';
import EmptyLayout from '../components/Layouts/DefaultLayout';
import Employees from '../pages/Employees';
import Suppliers from '../pages/Supplier';
import Order from '../pages/Order';
import CategoryAdd from '../pages/Category/CategoryAdd';
import CategoryEdit from '../pages/Category/CategoryEdit';

interface BaseProps {
    id: number;
    path: string;
    element: () => JSX.Element;
}
interface Routes extends  BaseProps {
    layout?: () => JSX.Element;
    nested?: BaseProps[]
}

//Public routes

const publicRoutes: Routes[] = [
    {id: 5, path: '/login', element: Login, layout: EmptyLayout},
]

//Private routes
const privateRoutes: Routes[] = [
    {id: 1, path: '/', element: Dashboard},
    {id: 2, path: '/products', element: Products},
    {id: 3, path: '/suppliers', element: Suppliers},
    {id: 4, path: '/categories', element: Category},
    {id: 5, path: '/categories/add', element: CategoryAdd},
    {id: 6, path: '/categories/edit', element: CategoryEdit},
    {id: 7, path: '/orders', element: Order},
    {id: 8, path: '/customers', element: Customers},
    {id: 9, path: '/employees', element: Employees},

];

export {
    publicRoutes,
    privateRoutes
}