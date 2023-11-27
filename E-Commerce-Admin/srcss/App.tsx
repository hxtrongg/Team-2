import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import Category from './pages/Category';
import Products from './pages/Products';
import Employees from './pages/Employees';
import Suppliers from './pages/Suppliers';
import Customers from './pages/Customers'
import Orders from './pages/Orders';
import Login from './pages/Login';
import DefaultLayout from './components/Layouts/DefaultLayout';
import EmptyLayout from './components/Layouts/DefaultLayout';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* dashboard */}
        <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Categories" element={<Category />} />
            <Route path="Suppliers" element={<Suppliers />} />
            <Route path="Products" element={<Products />} />
            <Route path="employees" element={<Employees />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
        </Route>
        {/* Login page */}
        <Route path='/login' element={<EmptyLayout />}>
          <Route index element={<Login />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App