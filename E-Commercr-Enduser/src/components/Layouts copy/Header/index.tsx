import React, { useEffect } from 'react';
import Navigation from "../../Navigation";
import { FaRegTrashAlt, FaAddressCard } from "react-icons/fa";
import { useCartStore } from '../../../hooks/useCartStore';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosClient } from '../../../library/axiosClient';
import config from '../../../constants/config';

interface ProductType {
  name: string;
}
const Header = () => {

  const { user, logout } = useAuth();
  const { items, total, itemCount, removeItem, decreaseQuantity, increaseQuantity } = useCartStore();
  console.log('Header render');
//fetch categories

const queryClient = useQueryClient();
// Sử dụng useQuery để fetch data từ API
const { data, isLoading, isError, error } = useQuery({
  queryKey: ["products"],
  queryFn: async () => {
    return await axiosClient.get(config.urlAPI + `/v1/products` );
  },
});

console.log("categories", data);

// toggleMenu
  useEffect(() => {
    const toggleMenu = () => {
      const menus = document.querySelectorAll('.navbar-menu');
      for (let i = 0; i < menus.length; i++) {
        menus[i].classList.toggle('hidden');
      }
    };

    const handleToggle = () => {
      toggleMenu();
    };

    const handleClose = () => {
      toggleMenu();
    };


    const burger = document.querySelectorAll('.navbar-burger');
    if (burger.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', handleToggle);
      }
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');
    if (close.length || backdrop.length) {
      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].addEventListener('click', handleClose);
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', handleClose);
        }
      }
    }

    return () => {
      if (burger.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].removeEventListener('click', handleToggle);
        }
      }

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].removeEventListener('click', handleClose);
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].removeEventListener('click', handleClose);
        }
      }
    };
  }, []);
  
  return (
    <header id="page" className="antialiased font-body bg-body text-body w-full">
      <div className="" id="content">
        <section data-section-id="1" data-share="" data-category="navigations-gradient" data-component-id="65614b01_05_awz">
          {/* parent */}
          <div className="relative px-6 lg:px-16 bg-gray-900" data-config-id="toggle-mobile" data-config-target=".navbar-menu" data-config-className="hidden">
            <nav className="relative py-8 bg-gray-900 z-10">
              <div className="flex items-center justify-around">
                <a className="inline-block text-lg font-bold mr-3" href="#">
                  {/* <img className="h-6" src="vendia-assets/logos/vendia.svg" alt="" width="auto" data-config-id="auto-img-1-5" /> */}
                  <h1 className='text-white'><Link to={'/'}>LOGO</Link></h1>
                </a>
                <div className="lg:hidden ml-auto">
                  <button className="navbar-burger flex items-center p-3 text-white hover:text-yellow-500">
                    <svg className="block h-4 w-4" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-5">
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </button>
                </div>
                {/* search $ rightsearch */}
                  {/* search */}
                  <div className="relative flex flex-col me-20 w-full h-9">
                  <div className=" border border-neutral-100 rounded-lg focus-within:border-neutral-600 hover:bg-gray-50">
                    <div className='flex items-center'>
                    <input className="w-full px-4 pr-12 py-1 text-sm text-neutral-400 placeholder-neutral-400 bg-transparent outline-none" id="horizontalNav4-1" type="text" placeholder="Search..." data-config-id="auto-input-13-4" />
                    <div className="absolute right-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-4">
                        <path d="M15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L15.2197 16.2803ZM11.7803 10.7197C11.4874 10.4268 11.0126 10.4268 10.7197 10.7197C10.4268 11.0126 10.4268 11.4874 10.7197 11.7803L11.7803 10.7197ZM12 7.5C12 9.98528 9.98528 12 7.5 12V13.5C10.8137 13.5 13.5 10.8137 13.5 7.5H12ZM7.5 12C5.01472 12 3 9.98528 3 7.5H1.5C1.5 10.8137 4.18629 13.5 7.5 13.5V12ZM3 7.5C3 5.01472 5.01472 3 7.5 3V1.5C4.18629 1.5 1.5 4.18629 1.5 7.5H3ZM7.5 3C9.98528 3 12 5.01472 12 7.5H13.5C13.5 4.18629 10.8137 1.5 7.5 1.5V3ZM16.2803 15.2197L11.7803 10.7197L10.7197 11.7803L15.2197 16.2803L16.2803 15.2197Z" fill="#B8C1CC"></path>
                      </svg>
                    </div>
                    </div>     
                  </div>

                    <div className='flex my-2 text-neutral-100 text-center'>
                      {
                        data?.data.data.products.map((item:ProductType)=>(
                          <span className=' w-auto mx-3 border border-neutral-100 rounded-lg p-1'>{item.name}</span>
                        ))
                      }
                    </div>
                  </div>
                  {/* right search */}
                  <div className='flex items-center mr-auto'>
                  <div className='relative group'>
                    <div className='relative group'>
                      <Link className="mr-7 inline-flex items-center" to={'/cart'}>
                        <span className="text-white  group-hover:text-yellow-500">
                          <svg width="20" height="25" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-10-1">
                            <path d="M11.3334 8.16667V4.83333C11.3334 2.99238 9.84099 1.5 8.00004 1.5C6.15909 1.5 4.66671 2.99238 4.66671 4.83333V8.16667M2.16671 6.5H13.8334L14.6667 16.5H1.33337L2.16671 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span className="-ml-2 -mt-4 flex items-center justify-center h-6 w-6 border-2 bg-red-600 rounded-full">
                          <span className="text-xs  font-semibold text-white" data-config-id="auto-txt-14-1">{itemCount}</span>
                        </span>
                      </Link>
                      {/* dropdown */}

                    </div>
                    <div className="hidden group-hover:block absolute top-full -right-36 z-50 bg-black" style={{ width: '512px', marginTop: '25px' }}>
                      <div className="absolute right-40 inline-block w-9 overflow-hidden -translate-x-1/2 -top-6">
                        <div
                          className="w-6 h-6 origin-bottom-left transform rotate-45 bg-gray-500 drop-shadow">
                        </div>
                      </div>
                      <div className="py-7 px-6 h-full bg-gray-900 overflow-auto">
                        <div className="flex flex-col h-full">
                          <div className="flex w-full mb-5 items-center justify-between">
                            <h6
                              className="font-bold text-xl text-white mb-0"
                              data-config-id="auto-txt-1-3"
                            >
                              MY BAG ({itemCount})
                            </h6>

                          </div>
                          <div>
                            {
                              itemCount === 0 ? (
                                <div className='text-center  h-96 mt-5'>
                                  <span><img src="../../../../public/images/empty-cart.png" alt="" /></span>
                                  <span><h3 className='text-xl text-white font-bold'>Chưa có sản phẩm nào trong giỏ hàng</h3></span>
                                  <Link to={'/products'}>
                                    <button className='text-white p-2 rounded-md mt-4 bg-red-600 font-semibold hover:bg-red-400' type='button'>VIEW PRODUCTS</button>
                                  </Link>
                                </div>
                              ) : (
                                <>
                                  {
                                    items.map((item) => {
                                      return (
                                        <>
                                          <div className="mb-auto pb-10">

                                            <div className="flex -mx-2 pt-4 pb-5 border-t border-gray-800">
                                              <div className="w-1/5 px-2">
                                                <img
                                                  className="block h-16 w-full"
                                                  src={`../../../../public/images/${item.thumb}`}
                                                  alt={item.name}
                                                  data-config-id="auto-img-1-3"
                                                />
                                              </div>
                                              <div className="w-4/5 px-2">
                                                <div className="flex mb-2 items-center justify-between">
                                                  <h6
                                                    className="font-bold text-sm text-white overflow-hidden whitespace-nowrap overflow-ellipsis w-64"
                                                    data-config-id="auto-txt-2-3"
                                                  >
                                                    {item.name}
                                                  </h6>
                                                  <span
                                                    className="block text-sm font-bold text-white"
                                                    data-config-id="auto-txt-3-3"
                                                  >
                                                    {item.price}
                                                  </span>
                                                </div>
                                                <div className="flex items-end justify-between">
                                                  <div className="inline-flex mt-4 px-2 font-bold text-gray-400 border border-blueGray-800">
                                                    <button onClick={() => {
                                                      decreaseQuantity(item.id);
                                                    }} className="inline-block p-1">
                                                      <svg
                                                        width={8}
                                                        height={2}
                                                        viewBox="0 0 8 2"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        data-config-id="auto-svg-2-3"
                                                      >
                                                        <path
                                                          d="M7 1H1"
                                                          stroke="white"
                                                          strokeWidth="0.8"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                      </svg>
                                                    </button>
                                                    <input
                                                      className="w-12 text-sm font-bold text-center bg-transparent outline-none"
                                                      value={item.quantity}

                                                      data-config-id="auto-input-5-3"
                                                    />
                                                    <button onClick={() => {
                                                      increaseQuantity(item.id);
                                                    }} className="inline-block p-1">
                                                      <svg
                                                        width={8}
                                                        height={8}
                                                        viewBox="0 0 8 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        data-config-id="auto-svg-3-3"
                                                      >
                                                        <path
                                                          d="M4 1V4M4 4V7M4 4H7M4 4L1 4"
                                                          stroke="white"
                                                          strokeWidth="0.8"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                        />
                                                      </svg>
                                                    </button>
                                                  </div>
                                                  <a onClick={() => {
                                                    removeItem(item.id);
                                                  }}
                                                    className="inline-block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 hover:from-yellow-300 hover:via-green-300 hover:to-blue-500"
                                                    href="#"
                                                    data-config-id="auto-txt-4-3"
                                                  >
                                                    Remove
                                                  </a>
                                                </div>
                                              </div>
                                            </div>


                                          </div>

                                        </>
                                      )
                                    })
                                  }
                                </>
                              )
                            }
                            <div className="pt-4 border-t border-blueGray-800">
                              <div className="flex mb-5 content-center justify-between">
                                <span
                                  className="text-sm font-medium text-gray-400"
                                  data-config-id="auto-txt-14-3"
                                >
                                  Subtotal
                                </span>
                                <span
                                  className="text-sm font-medium text-white"
                                  data-config-id="auto-txt-15-3"
                                >
                                  ${total}
                                </span>
                              </div>
                              <div className="sm:flex items-center">
                                <Link to={'/cart'}
                                  className="inline-block w-full mb-3 sm:mb-0 sm:mr-4 px-6 py-3 text-xs text-center font-bold text-white border border-gray-800 hover:bg-gray-800 transition duration-200"
                                  
                                  data-config-id="auto-txt-16-3"
                                >
                                  VIEW CART
                                </Link>
                                <Link to={'/checkout'}
                                  className="relative group inline-flex items-center justify-center h-10 w-full px-4 py-3 text-xs text-center font-bold text-white bg-red-600 hover:bg-red-400 transition duration-200 overflow-hidden"
                                  
                                >

                                  <span className="relative" data-config-id="auto-txt-17-3">
                                    CHECKOUT
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* orderdropdown */}
                  <div className="inline-flex items-center font-medium text-white hover:text-yellow-500" >

                    <a className="inline-flex items-center" href="#"><img className="mr-2 h-6 w-6" src={`../../../../public/images/${user?.photo}`} alt="" data-config-id="auto-img-2-4" /></a>
                    <div className='cursor-pointer relative group'>
                      <span className="mx-3 py-3.5" data-config-id="auto-txt-15-1">Hi {user?.firstName}</span>
                      <svg className='inline-block' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-12-1">
                        <path d="M10.6667 1L6.00004 5.66667L1.33337 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <div
                        className="hidden group-hover:block absolute w-56 mt-3 pt-4 px-2 z-50 min-w-max -right-9  bg-white shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 border-b border-gray-200 dark:border-gray-600" role="none">
                          <p className="px-4 pt-2 mb-1 font-normal text-gray-500 dark:text-gray-500">Signed in as:</p>
                          <div
                            className="flex px-4 py-2 text-sm font-semibold text-gray-700 border-l-2 border-transparent">
                            {user?.email}</div>
                        </div>
                        <div className="py-1" role="none">
                          <Link to={'/login'}
                            className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:hover:border-blue-400 hover:border-blue-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-blue-500">
                            <span className="mr-5 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-4 h-4 bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                              </svg>
                            </span>Đăng nhập</Link>
                        </div>
                        <div className="py-1" role="none">
                          <Link to={'/customers'}
                            className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:hover:border-blue-400 hover:border-blue-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-blue-500">
                            <span className="mr-5 mt-1">
                              <FaAddressCard />
                            </span>Khách hàng</Link>
                        </div>
                        <div className="py-1" role="none">
                          <a onClick={logout}
                            className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:hover:border-blue-400 rounded-bl-md hover:border-blue-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-blue-500">
                            <span className="mr-5 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-4 h-4 hover:text-blue-500 bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path fill-rule="evenodd"
                                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                              </svg>
                            </span>Đăng xuất</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </nav>

          </div>
          {/* mobile menu */}
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50" data-config-id="toggle-mobile-2" data-config-target=".navbar-menu" data-config-className="hidden">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-2xl font-medium leading-none" href="#">
                  <img className="h-6" src="vendia-assets/logos/vendia-dark.svg" alt="" width="auto" data-config-id="auto-img-4-5" />
                </a>
                <button className="navbar-close">
                  <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-config-id="auto-svg-5-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#" data-config-id="auto-txt-25-5">Products</a></li>
                  <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#" data-config-id="auto-txt-26-5">Cart</a></li>
                  
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6"><a className="block mb-2 py-3 text-sm text-center border border-gray-200 hover:border-gray-400 font-bold" href="#" data-config-id="auto-txt-29-5">Login</a><a className="block py-3 text-sm text-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold transition duration-200" href="#" data-config-id="auto-txt-30-5">Sign In</a></div>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;