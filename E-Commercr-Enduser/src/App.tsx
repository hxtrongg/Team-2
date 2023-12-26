import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Login from './pages/LoginPage';
import DefaultLayout from './components/Layouts/DefaultLayout';
import EmptyLayout from './components/Layouts/EmptyLayout';
import OnlyHeaderLayout from './components/Layouts/OnlyHeaderLayout';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Customers from './pages/Customers';
import CustomerOrders from './pages/Customers/CustomerOrders';
import CustomerProfile from './pages/Customers/CustomerProfile';
import CheckoutDonePage from './pages/CheckoutDonePage';
import SignUpPage from './pages/SignUpPage';
import WishlistPage from './pages/WishlistPage';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
           {/* DefaultLayout */}
          <Route path='/' element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:slug" element={<ProductDetailsPage />} />
              <Route path="productdetail" element={<ProductDetailsPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              
          </Route>
          
          {/* OnlyHeaderLayout */}
          <Route path='/cart' element={<OnlyHeaderLayout />}>
              <Route index element={<CartPage />} />
          </Route>
          <Route path='/checkout' element={<OnlyHeaderLayout />}>
              <Route index element={<CheckoutPage />} />
          </Route>
          <Route path='/checkout-done' element={<OnlyHeaderLayout />}>
              <Route index element={<CheckoutDonePage />} />
          </Route>
          {/* Nested Layout */}
          <Route path='/customers' element={<OnlyHeaderLayout />}>
              <Route path='/customers' element={<Customers />}>
                <Route path='orders' element={<CustomerOrders />} />
                <Route path='profile' element={<CustomerProfile />} />
              </Route>
          </Route>

          {/* EmptyLayout */}
          <Route path='/login' element={<EmptyLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path='/signup' element={<EmptyLayout />}>
            <Route index element={<SignUpPage />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
