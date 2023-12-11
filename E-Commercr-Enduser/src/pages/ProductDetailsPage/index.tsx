import React from 'react';

const ProductDetailsPage = () =>{
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return(
      <>
   <section data-section-id="1" data-share="" data-category="product-info" data-component-id="b9652106_01_awz" className="py-5 border-b-2  bg-gray-100" >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="relative mb-10" style={{height: '564px'}}>
              <a className="absolute top-1/2 left-0 ml-8 transform translate-1/2" href="#">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-1">
                  <path d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z" fill="#1F40FF"></path>
                </svg>
              </a>
              <img className="object-cover w-full h-full" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="auto-img-1"/>
              <a className="absolute top-1/2 right-0 mr-8 transform translate-1/2" href="#">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-1">
                  <path d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z" fill="#1F40FF"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 sm:w-1/4 p-2">
                <a className="block border border-blue-300" href="#">
                  <img className="w-full h-32 object-cover" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image1"/>
                </a>
              </div>
              <div className="w-1/2 sm:w-1/4 p-2">
                <a className="block border border-transparent hover:border-gray-400" href="#">
                  <img className="w-full h-32 object-cover" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image2"/>
                </a>
              </div>
              <div className="w-1/2 sm:w-1/4 p-2">
                <a className="block border border-transparent hover:border-gray-400" href="#">
                  <img className="w-full h-32 object-cover" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image3"/>
                </a>
              </div>
              <div className="w-1/2 sm:w-1/4 p-2">
                <a className="block border border-transparent hover:border-gray-400" href="#">
                  <img className="w-full h-32 object-cover" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image4"/>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">New
                    Arrival</span>
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                            </path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <a className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="#">
                      View the acer store
                    </a>
                  </div>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>Rs.7,000.00</span>
                    <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">Rs.10,000.00</span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">System Specs :</h2>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div className="p-3 lg:p-5 mb-6">
                      <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3 w-7 h-7" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  No. of cores
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  12 Cores
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gpu-card w-7 h-7" viewBox="0 0 16 16">
                                  <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                                  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Graphic
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  Intel UHD
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-7 h-7 bi bi-cpu" viewBox="0 0 16 16">
                                  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Processor
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  INTEL 80486
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history w-7 h-7" viewBox="0 0 16 16">
                                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Frequency
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  3.5 GHz
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div>
                    <button onClick={toggleModal} data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="w-full  text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Xem thêm cấu hình chi tiết</button>

                    {
                      isModalOpen && (
                        <>
                        <div id="crud-modal" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 inset-0 z-50 outline-none focus:outline-none justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={(event) => {
                          if (event.target === event.currentTarget) {
                            setIsModalOpen(false);
                          }
                        }}>
                          <div className="relative top-20 left-1/3 p-4 w-full max-w-md max-h-full ">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                  Thông số kỹ thuật
                                </h3>
                                <button onClick={() =>{
                    setIsModalOpen(false)
                  }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                  </svg>
                                  <span className="sr-only">Close modal</span>
                                </button>
                              </div>

                              <ul className="px-4">
                                    <li className="flex justify-between py-5">
                                      <span className="block w-40 text-gray-600 text-sm">Hệ điều hành:</span>
                                      <span className="block text-gray-700">Android 11</span>
                                    </li>
                                    <li className="flex justify-between border-t border-gray-300 py-5">
                                      <span className="block w-40 text-gray-600 text-sm">Camera sau:</span>
                                      <span className="block text-gray-700">Chính 12 MP & Phụ 64 MP, 12 MP</span>
                                    </li>
                                    <li className="flex justify-between border-t border-gray-300 py-5">
                                      <span className="block w-40 text-gray-600 text-sm">Camera trước:</span>
                                      <span className="block text-gray-700">10 MP</span>
                                    </li>
                                    <li className="flex justify-between border-t border-gray-300 py-5">
                                      <span className="block w-40 text-gray-600 text-sm">CPU:</span>
                                      <span className="block text-gray-700">Exynos 2100 8 nhân</span>
                                    </li>
                                    <li className="flex justify-between border-t border-gray-300 py-5">
                                      <span className="block w-40 text-gray-600 text-sm">RAM:</span>
                                      <span className="block text-gray-700">8 GB</span>
                                    </li>
                                    <li className="flex justify-between border-t border-gray-300 py-5">
                                      <span className="block w-40 text-gray-600 text-sm">Bộ nhớ trong:</span>
                                      <span className="block text-gray-700">128 GB</span>
                                    </li>
                                  </ul>
                            </div>
                          </div>
                         
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      )
                    }

                  </div>
                </div>

                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span className="text-base text-gray-600 dark:text-gray-400">In Stock</span>
                  <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">Ships from china.
                    <span className="text-gray-600 dark:text-gray-400">
                      Most customers receive within 3-31 days.
                    </span>
                  </p>
                </div>
                <div className="mb-6 "></div>
                <div className="flex flex-wrap items-center mb-6">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                        </path>
                      </svg>
                    </button>
                  </div>
                  <a href="#" className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                    Add to cart
                  </a>
                </div>
                <div className="flex gap-4 mb-6">
                  <a href="#" className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl">
                    Buy now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <div className="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
            <div>
              <div className="p-6 mb-6 bg-gray-100 rounded-md lg:p-6 dark:bg-gray-900">
                <div className="items-center justify-between block mb-4 lg:flex">
                  <div className="flex flex-wrap items-center mb-4 lg:mb-0">
                    <img className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
                      src="https://i.postimg.cc/ZYLBy1kr/Cheerful-cute-girl-greeting-with-namaste-cartoon-art-illustration.jpg " />
                    <div>
                      <h2 className="mr-2 text-lg font-medium text-gray-700 dark:text-gray-400">
                        Isha Singh</h2>
                      <p className="text-sm font-medium text-gray-400 dark:text-gray-400"> 12, SEP 2022 </p>
                    </div>
                  </div>
                  <div>
                    <ul className="flex mb-1">
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                            viewBox="0 0 16 16">
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                            viewBox="0 0 16 16">
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                            viewBox="0 0 16 16">
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                            </path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs font-thin text-gray-400 dark:text-gray-400"> 2h ago </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when an
                  unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex items-center">
                  <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-hand-thumbs-up-fill"
                        viewBox="0 0 16 16">
                        <path
                          d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z">
                        </path>
                      </svg>
                    </a>
                    <span>Like</span>
                  </div>
                  <div className="flex text-sm text-gray-700 dark:text-gray-400">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-chat"
                        viewBox="0 0 16 16">
                        <path
                          d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                        </path>
                      </svg>
                    </a>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
              <div className="p-6 mb-6 bg-gray-100 rounded-md lg:p-6 dark:bg-gray-900">
                <div className="items-center justify-between block mb-4 lg:flex">
                  <div className="flex flex-wrap items-center mb-4 lg:mb-0">
                    <img className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
                      src="https://i.postimg.cc/Qt3CFq04/7294794.jpg " />
                    <div>
                      <h2 className="mr-2 text-lg font-medium text-gray-700 dark:text-gray-400">
                        Siya Smith</h2>
                      <p className="text-sm font-medium text-gray-400 dark:text-gray-400"> 12, SEP 2022 </p>
                    </div>
                  </div>
                  <div>
                    <ul className="flex mb-1">
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                            viewBox="0 0 16 16">
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                            viewBox="0 0 16 16">
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-fill"
                            viewBox="0 0 16 16">
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                            </path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-star-half"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                            </path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs font-thin text-gray-400 dark:text-gray-400"> 3m ago </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when an
                  unknown
                  printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex items-center">
                  <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-hand-thumbs-up-fill"
                        viewBox="0 0 16 16">
                        <path
                          d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z">
                        </path>
                      </svg>
                    </a>
                    <span>Like</span>
                  </div>
                  <div className="flex text-sm text-gray-700 dark:text-gray-400">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-chat"
                        viewBox="0 0 16 16">
                        <path
                          d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                        </path>
                      </svg>
                    </a>
                    <span>Reply</span>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className="p-6 bg-gray-100 rounded-md dark:bg-gray-900">
                <h2 className="px-2 mb-6 text-2xl font-semibold text-left text-gray-600 dark:text-gray-400">
                  Leave a comment</h2>
                <form className="">
                  <div className="px-2 mb-6">
                    <label htmlFor="review" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                      Your review *
                    </label>
                    <textarea
                      id="review"
                      placeholder="Write a review"
                      required

                      className="block w-full px-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                    ></textarea>
                  </div>
                  <div className="px-2 mb-6">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required

                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 lg:mb-0 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                    />
                  </div>
                  <div className="px-2 mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-400">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="abc@gmail.com"
                      required
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                    />
                  </div>
                  <div className="px-2">
                    <button
                      type="submit"

                      className="px-4 py-2 font-medium text-gray-100 bg-blue-800 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700"
                    >
                      Submit Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-section-id="1" data-share="" data-category="products" data-component-id="65d98101_01_awz" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className=" md:mb-10 text-4xl md:text-3xl font-bold font-heading" data-config-id="header">Similar items:</h2>
          <div className="flex flex-wrap -mx-3 mb-24">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div className="p-6 bg-gray-50">
                <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white" data-config-id="badge1">-15%</span>
                <a className="block px-6 mt-6 mb-2" href="#">
                  <img className="mb-5 mx-auto h-40 w-full object-contain" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image1" />
                  <h3 className="mb-2 text-xl font-bold font-heading" data-config-id="title1">BRILE water filter</h3>
                  <p className="text-lg font-bold font-heading text-blue-500">
                    <span data-config-id="price1">$29.89</span>
                    <span className="text-xs text-gray-500 font-semibold font-heading line-through" data-config-id="price1-old">$33.69</span>
                  </p>
                </a>
                <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-1"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div className="p-6 bg-gray-50">
                <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white" data-config-id="badge2">-15%</span>
                <a className="block px-6 mt-6 mb-2" href="#">
                  <img className="mb-5 mx-auto h-40 w-full object-contain" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image2" />
                  <h3 className="mb-2 text-xl font-bold font-heading" data-config-id="title2">Bicycle S20</h3>
                  <p className="text-lg font-bold font-heading text-blue-500">
                    <span data-config-id="price2">$14.30</span>
                    <span className="text-xs text-gray-500 font-semibold font-heading line-through" data-config-id="price2-old">$15.90</span>
                  </p>
                </a>
                <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-1"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="p-6 bg-gray-50">
                <span className="px-2 py-1"></span>
                <a className="block px-6 mt-6 mb-2" href="#">
                  <img className="mb-5 mx-auto h-40 w-full object-contain" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image3" />
                  <h3 className="mb-2 text-xl font-bold font-heading" data-config-id="title3">Nike basketball ball</h3>
                  <p className="text-lg font-bold font-heading text-blue-500">
                    <span data-config-id="price3">$34.89</span>
                    <span className="text-xs text-gray-500 font-semibold font-heading line-through" data-config-id="price3-old">$33.69</span>
                  </p>
                </a>
                <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-1"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3">
              <div className="p-6 bg-gray-50">
                <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white" data-config-id="badge4">NEW</span>
                <a className="block px-6 mt-6 mb-2" href="#">
                  <img className="mb-5 mx-auto h-40 w-full object-contain" src="https://shuffle.dev/yofte-assets/images/skateboard.png" alt="" data-config-id="image4" />
                  <h3 className="mb-2 text-xl font-bold font-heading" data-config-id="title4">Kiteboard WH-004</h3>
                  <p className="text-lg font-bold font-heading text-blue-500">
                    <span data-config-id="price4">$199.90</span>
                    <span className="text-xs text-gray-500 font-semibold font-heading line-through" data-config-id="price4-old">$33.69</span>
                  </p>
                </a>
                <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-1"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
export default ProductDetailsPage