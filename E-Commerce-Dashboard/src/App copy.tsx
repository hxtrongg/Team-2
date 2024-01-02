import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import Category from './pages/Category';
import Login from './pages/Login';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Customer from './pages/Customers';
import Supplier from './pages/Supplier';
import Product from './pages/Product';
import Employee from './pages/Employees';
import Order from './pages/Order'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="categories" element={<Category />} />
            <Route path="customers" element={<Customer />} />
            <Route path="suppliers" element={<Supplier />} />
            <Route path="products" element={<Product/>} />
            <Route path="employees" element={<Employee />} />
            <Route path="orders" element={<Order />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App