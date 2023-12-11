import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Category from '../pages/Category';
import Customers from '../pages/Customers';
import Login from '../pages/Login';
import EmptyLayout from '../components/Layouts/EmptyLayout';
import Employees from '../pages/Employees';

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
    {id: 3, path: '/suppliers', element: Category},
    {id: 4, path: '/categories', element: Category},
    {id: 5, path: '/orders', element: Category},
    {id: 6, path: '/customers', element: Customers},
    {id: 7, path: '/employees', element: Employees},
];

export {
    publicRoutes,
    privateRoutes
}