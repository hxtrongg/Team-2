import React, { useEffect } from 'react';
import Navigation from "../../Navigation";
import { useCartStore } from '../../../hooks/useCartStore';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, logout} = useAuth();
  const { items, total, itemCount, removeItem } = useCartStore();
  console.log('Header render');
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


  //classNameNameNameName={`bg-color ${styles.header}`}
  return (
    <header id="page" className="antialiased font-body bg-body text-body w-full">
      <div className="" id="content">

        <section data-section-id="1" data-share="" data-category="navigations-gradient" data-component-id="65614b01_05_awz">
          <div className="relative px-6 lg:px-16 bg-gray-900" data-config-id="toggle-mobile" data-config-target=".navbar-menu" data-config-className="hidden">
            <nav className="relative py-8 bg-gray-900 z-10">
              <div className="flex items-center">
                <a className="inline-block text-lg font-bold" href="#">
                  {/* <img className="h-6" src="vendia-assets/logos/vendia.svg" alt="" width="auto" data-config-id="auto-img-1-5" /> */}
                  <h1 className='text-white'>LOGO</h1>
                </a>
                <div className="lg:hidden ml-auto">
                  <button className="navbar-burger flex items-center p-3 text-white hover:text-yellow-500">
                    <svg className="block h-4 w-4" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-5">
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </button>
                </div>
                <ul className="hidden lg:flex ml-16 lg:w-auto lg:space-x-12">
                  <li className="group">
                    <a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500" href="#">
                      <span className='py-6 px-2' data-config-id="auto-txt-1-5">Home</span>

                    </a>

                    {/* mega menu1 */}
                    <div className="hidden group-hover:block absolute top-0 left-0 right-0 mt-20 pt-10 pb-10 px-6 lg:px-10 bg-gray-900 z-50">
                      <div className="pt-10 border-t border-gray-800">
                        <div className="flex flex-wrap -mx-4 justify-between">
                          <div className="w-2/5 px-4">
                            <div className="flex flex-wrap -mx-4">
                              <div className="w-1/3 px-4">
                                <div>
                                  <span className="block font-medium text-gray-400 mb-8" data-config-id="auto-txt-6-5">New Arrivals</span>
                                  <ul>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-7-5">Limited</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500" href="#" data-config-id="auto-txt-8-5">Sale Cloths</a></li>
                                    <li><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-9-5">Gift Cards</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="w-1/3 px-4">
                                <div>
                                  <span className="block font-medium text-gray-400 mb-8" data-config-id="auto-txt-10-5">Clothing</span>
                                  <ul>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-11-5">Pants</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-12-5">Hoodie</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-13-5">Knitwear &amp; Scarve</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-14-5">Jacket &amp; Hoodie</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-15-5">T-Shirts</a></li>
                                    <li><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-16-5">Outwear &amp; Sweater</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="w-1/3 px-4">
                                <div>
                                  <span className="block font-medium text-gray-400 mb-8" data-config-id="auto-txt-17-5">Accesories</span>
                                  <ul>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-18-5">Bags</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-19-5">Scarves</a></li>
                                    <li><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-20-5">Jewellery</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-3/5 xl:w-auto px-4">
                            <div className="flex flex-wrap -mx-4">
                              <div className="w-1/2 px-4">
                                <div className="block max-w-xs">
                                  <img className="img-fluid block w-full mb-6" src="https://shuffle.dev/vendia-assets/images/navigation/product-sales1.png" alt="" data-config-id="auto-img-2-5" />
                                  <p className="text-gray-400 mb-3" data-config-id="auto-txt-21-5">Lorem ipsum dolor sit amet cectetur adipiscing a consecteur.</p>
                                  <a className="inline-flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500 hover:via-yellow-300" href="#">
                                    <span className="mr-2" data-config-id="auto-txt-22-5">See more</span>
                                    <span className="animate-moveRight text-blue-500">
                                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-5">
                                        <path d="M8.33333 1.33333L13 6M13 6L8.33333 10.6667M13 6L1 5.99999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="w-1/2 px-4">
                                <div className="block max-w-xs">
                                  <img className="img-fluid block w-full mb-6" src="https://shuffle.dev/vendia-assets/images/navigation/product-sales1.png" alt="" data-config-id="auto-img-3-5" />
                                  <p className="text-gray-400 mb-3" data-config-id="auto-txt-23-5">Lorem ipsum dolor sit amet cectetur adipiscing a consecteur.</p>
                                  <a className="inline-flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500 hover:via-yellow-300" href="#">
                                    <span className="mr-2" data-config-id="auto-txt-24-5">See more</span>
                                    <span className="animate-moveRight text-blue-500">
                                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-5">
                                        <path d="M8.33333 1.33333L13 6M13 6L8.33333 10.6667M13 6L1 5.99999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end megamenu 1 */}
                  </li>




                  <li className='group'>
                    <a className="relative group inline-block  text-white hover:text-yellow-500 font-medium" href="#">
                      <span className='py-6 px-2' data-config-id="auto-txt-2-5">Product</span>
                      <div className="hidden group-hover:block absolute bottom-0 left-0 -mb-13 py-px w-full bg-yellow-500"></div>
                    </a>

                    {/* mega menu2 */}
                    <div className="hidden group-hover:block absolute top-0 left-0 right-0 mt-20 pt-10 pb-10 px-6 lg:px-10 bg-gray-900 z-50">
                      <div className="pt-10 border-t border-gray-800">
                        <div className="flex flex-wrap -mx-4 justify-between">
                          <div className="w-2/5 px-4">
                            <div className="flex flex-wrap -mx-4">
                              <div className="w-1/3 px-4">
                                <div>
                                  <span className="block font-medium text-gray-400 mb-8" data-config-id="auto-txt-6-5">New Arrivals</span>
                                  <ul>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-7-5">Limited</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500" href="#" data-config-id="auto-txt-8-5">Sale Cloths</a></li>
                                    <li><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-9-5">Gift Cards</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="w-1/3 px-4">
                                <div>
                                  <span className="block font-medium text-gray-400 mb-8" data-config-id="auto-txt-10-5">Clothing</span>
                                  <ul>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-11-5">Pants</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-12-5">Hoodie</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-13-5">Knitwear &amp; Scarve</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-14-5">Jacket &amp; Hoodie</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-15-5">T-Shirts</a></li>
                                    <li><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-16-5">Outwear &amp; Sweater</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="w-1/3 px-4">
                                <div>
                                  <span className="block font-medium text-gray-400 mb-8" data-config-id="auto-txt-17-5">Accesories</span>
                                  <ul>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-18-5">Bags</a></li>
                                    <li className="mb-4"><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-19-5">Scarves</a></li>
                                    <li><a className="inline-block font-bold text-white hover:text-yellow-500" href="#" data-config-id="auto-txt-20-5">Jewellery</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-3/5 xl:w-auto px-4">
                            <div className="flex flex-wrap -mx-4">
                              <div className="w-1/2 px-4">
                                <div className="block max-w-xs">
                                  <img className="img-fluid block w-full mb-6" src="vendia-assets/images/navigation/product-sales1.png" alt="" data-config-id="auto-img-2-5" />
                                  <p className="text-gray-400 mb-3" data-config-id="auto-txt-21-5">Lorem ipsum dolor sit amet cectetur adipiscing a consecteur.</p>
                                  <a className="inline-flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500 hover:via-yellow-300" href="#">
                                    <span className="mr-2" data-config-id="auto-txt-22-5">See more</span>
                                    <span className="animate-moveRight text-blue-500">
                                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-5">
                                        <path d="M8.33333 1.33333L13 6M13 6L8.33333 10.6667M13 6L1 5.99999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="w-1/2 px-4">
                                <div className="block max-w-xs">
                                  <img className="img-fluid block w-full mb-6" src="vendia-assets/images/navigation/product-sales1.png" alt="" data-config-id="auto-img-3-5" />
                                  <p className="text-gray-400 mb-3" data-config-id="auto-txt-23-5">Lorem ipsum dolor sit amet cectetur adipiscing a consecteur.</p>
                                  <a className="inline-flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500 hover:via-yellow-300" href="#">
                                    <span className="mr-2" data-config-id="auto-txt-24-5">See more</span>
                                    <span className="animate-moveRight text-blue-500">
                                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-5">
                                        <path d="M8.33333 1.33333L13 6M13 6L8.33333 10.6667M13 6L1 5.99999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end megamenu 2 */}

                  </li>
                  <li>
                    <a className="relative  group inline-block text-white hover:text-yellow-500 font-medium" href="#">
                      <span className='py-6 px-2' data-config-id="auto-txt-3-5">Blogs</span>
                      <div className="hidden group-hover:block absolute bottom-0 left-0 -mb-13 py-px w-full bg-yellow-500"></div>
                    </a>
                  </li>
                  <li>
                    <a className="relative group inline-block text-white hover:text-yellow-500 font-medium" href="#">
                      <span className='py-6 px-2' data-config-id="auto-txt-4-5">Stores</span>
                      <div className="hidden group-hover:block absolute bottom-0 left-0 -mb-13 py-px w-full bg-yellow-500"></div>
                    </a>
                  </li>
                </ul>

                <div className="hidden lg:inline-flex items-center ml-auto">

                  {/* search */}
                  <div className="relative flex items-center me-20 w-56 border border-neutral-100 rounded-lg focus-within:border-neutral-600 hover:bg-gray-50">
                    <input className="w-full px-4 pr-12 py-1 text-sm text-neutral-400 placeholder-neutral-400 bg-transparent outline-none" id="horizontalNav4-1" type="text" placeholder="Search..." data-config-id="auto-input-13-4" />
                    <div className="absolute right-4">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-4">
                        <path d="M15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L15.2197 16.2803ZM11.7803 10.7197C11.4874 10.4268 11.0126 10.4268 10.7197 10.7197C10.4268 11.0126 10.4268 11.4874 10.7197 11.7803L11.7803 10.7197ZM12 7.5C12 9.98528 9.98528 12 7.5 12V13.5C10.8137 13.5 13.5 10.8137 13.5 7.5H12ZM7.5 12C5.01472 12 3 9.98528 3 7.5H1.5C1.5 10.8137 4.18629 13.5 7.5 13.5V12ZM3 7.5C3 5.01472 5.01472 3 7.5 3V1.5C4.18629 1.5 1.5 4.18629 1.5 7.5H3ZM7.5 3C9.98528 3 12 5.01472 12 7.5H13.5C13.5 4.18629 10.8137 1.5 7.5 1.5V3ZM16.2803 15.2197L11.7803 10.7197L10.7197 11.7803L15.2197 16.2803L16.2803 15.2197Z" fill="#B8C1CC"></path>
                      </svg>
                    </div>
                  </div>
                  {/* end search */}
                 
                   <div className='relative group'>
                   <Link className="mr-7 inline-flex items-center" to={'/cart'}>
                      <span className="text-white  group-hover:text-yellow-500">
                        <svg  width="20" height="25" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-10-1">
                          <path d="M11.3334 8.16667V4.83333C11.3334 2.99238 9.84099 1.5 8.00004 1.5C6.15909 1.5 4.66671 2.99238 4.66671 4.83333V8.16667M2.16671 6.5H13.8334L14.6667 16.5H1.33337L2.16671 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                      <span className="-ml-2 -mt-4 flex items-center justify-center h-6 w-6 border-2 bg-red-600 rounded-full">
                        <span className="text-xs  font-semibold text-white" data-config-id="auto-txt-14-1">{itemCount}</span>
                      </span>
                    </Link>
                    {/* dropdown */}
                    <div className="hidden group-hover:block absolute mt-5 top-full -right-20 min-w-max p-9 bg-gray-700 z-50">
                    <div className="absolute right-24 inline-block w-9 overflow-hidden -translate-x-1/2 -top-6">
                        <div
                            className="w-6 h-6 origin-bottom-left transform rotate-45 bg-gray-500 drop-shadow">
                        </div>
                    </div>
                      <div className="flex -mx-2 pb-8 border-b border-blueGray-800 items-center">
                        <div className="w-1/4 px-2">
                          <img className="block h-16 w-full" src="vendia-assets/images/cart-popup/image-product-cart1.png" alt="" data-config-id="auto-img-2-2" />
                        </div>
                        <div className="w-3/4 px-2">
                          <div className="pr-14">
                            <h6 className="font-bold text-white mb-1" data-config-id="auto-txt-9-2">Throwback Hip Bag</h6>
                            <span className="text-sm text-gray-400" data-config-id="auto-txt-10-2">1 x $49.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex py-8 border-b border-blueGray-800 items-center">
                        <div className="w-1/4 px-2">
                          <img className="block h-16 w-full" src="vendia-assets/images/cart-popup/image-product-cart3.png" alt="" data-config-id="auto-img-3-2" />
                        </div>
                        <div className="w-3/4 px-2">
                          <div className="pr-14">
                            <h6 className="font-bold text-white mb-1" data-config-id="auto-txt-11-2">Medium Stuff Satchel</h6>
                            <span className="text-sm text-gray-400" data-config-id="auto-txt-12-2">1 x $49.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex pt-8 items-center">
                        <div className="w-1/4 px-2">
                          <img className="block h-16 w-full" src="vendia-assets/images/cart-popup/image-product-cart2.png" alt="" data-config-id="auto-img-4-2" />
                        </div>
                        <div className="w-3/4 px-2">
                          <div className="pr-14">
                            <h6 className="font-bold text-white mb-1" data-config-id="auto-txt-13-2">Zip Tote Basket</h6>
                            <span className="text-sm text-gray-400" data-config-id="auto-txt-14-2">1 x $49.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 text-center">
                        <a className="relative group inline-flex items-center justify-center h-11 w-full mb-5 px-4 py-3 text-center font-bold text-black transition duration-200 overflow-hidden" href="#">
                          <div className="absolute top-0 left-0 w-full h-24 transform -translate-y-8 group-hover:-translate-y-1 transition duration-500 bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500"></div>
                          <span className="relative" data-config-id="auto-txt-15-2">Checkout</span>
                        </a>
                        <a className="inline-block text-sm font-bold text-gray-400 hover:text-gray-200" href="#" data-config-id="auto-txt-16-2">Continue Shopping</a>
                      </div>
                    </div>
                   </div>
                    {/* orderdropdown */}
                  
                
                  <div className="inline-flex items-center font-medium text-white hover:text-yellow-500" >
                    <a className="inline-flex items-center" href="#"><img className="mr-2 h-6 w-6"  src={user?.photo} alt="" data-config-id="auto-img-2-4" /></a>
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
                          <a href="#"
                            className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:hover:border-blue-400 hover:border-blue-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-blue-500">
                            <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-4 h-4 bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                              </svg>
                            </span>Profile</a>
                        </div>
                        <div className="py-1" role="none">
                          <a href="#"
                            className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:hover:border-blue-400 rounded-bl-md hover:border-blue-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-blue-500">
                            <span className="mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="w-4 h-4 hover:text-blue-500 bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path fill-rule="evenodd"
                                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                              </svg>
                            </span>Logout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

          </div>
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
                  <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#" data-config-id="auto-txt-25-5">Why Vendia?</a></li>
                  <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#" data-config-id="auto-txt-26-5">Browse</a></li>
                  <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#" data-config-id="auto-txt-27-5">Resources</a></li>
                  <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#" data-config-id="auto-txt-28-5">Brands</a></li>
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