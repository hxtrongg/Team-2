import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './HomePage.module.css';
import { FaHeart } from "react-icons/fa";
import { IProduct } from "../../constants/types";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import config from '../../constants/config';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {

  //===========Category SmartPhone=======//
  const fetchProductSmartPhone = async (categoryId = '656d9f069b6e79d96e99466a', limit = 4): Promise<IProduct[]> => {
    return axios.get(config.urlAPI+`/v1/products?offset=0&limit=${limit}&${categoryId}`);
   
  };
  
  // Sử dụng useQuery để fetch data từ API
  const queryCategorySmartPhone = useQuery<IProduct[], Error>({
    queryKey: ['products_smartphone', ],
    queryFn: ()=>fetchProductSmartPhone('656d9f069b6e79d96e99466a', 4),
    onSuccess: (data)=>{
      //Thành công thì trả lại data
      console.log(data);
    },
    onError: (error)=>{
      console.log(error);
    },
  });

  return (
    <div >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <section
        data-section-id="1"
        data-share=""
        data-category="newest-products"
        data-component-id="4f76139a_01_awz"
        className="py-10 bg-gray-100 overflow-x-hidden container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
              <div className="mb-6 h-56 w-full rounded-xl overflow-hidden  bg-slate-100 border">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide className="">
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://cdn.tgdd.vn/2023/11/banner/IP15-720-220-720x220-3.png"
                      alt="Slide 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://fptshop.com.vn/Uploads/Originals/2023/11/30/638369652345682991_F-H1_800x300.png"
                      alt="Slide 2"
                    />
                  </SwiperSlide>
                </Swiper>

              </div>
              <div
                className="relative h-56 w-full bg-cover bg-center bg-no-repeat rounded-xl">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide className="">
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/12/1/638369858913409919_F-H1_800x300.png"
                      alt="Slide 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-full  rounded-xl"

                      src="https://digizone.com.vn/wp-content/uploads/2023/06/fill-banner4.jpg"
                      alt="Slide 2"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <div
                className="relative inline-block mb-6 h-80 lg:h-full w-full bg-no-repeat bg-cover rounded-xl"
                style={{ backgroundImage: `url('https://img4.thuthuatphanmem.vn/uploads/2020/06/25/mau-banner-dien-may-dep-va-chuyen-nghiep_024310892.jpg')` }}
                data-config-id="image3"
              >


              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id={1}
        data-share=""

        className="py-12 mt-6 py-md-24 bg-gray-300  container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm md:max-w-xl mx-auto lg:max-w-none contents">
            <div className="flex flex-wrap mx-4 mb-3  justify-between">

              <div>
                <h1
                  className="text-3xl text-white font-bold mb-2"
                  data-config-id="auto-txt-1-2"
                >
                  Featured Collections
                </h1>
                <span>
                  <div className="w-28 mb-6  border-b border-red-700 dark:border-gray-400"></div>
                </span>
              </div>

              <p className="text-gray-500" data-config-id="auto-txt-2-2">
                Most Selling and Trending Products in our shop
              </p>


            </div>
            <div className="flex flex-wrap -mx-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className=""
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },

                }}
              >
                <SwiperSlide> <div className="w-full  px-4 my-4">
                  <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                    <img
                      className="block w-full h-80 object-cover rounded-t-xl  "
                      src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                      alt=""
                      data-config-id="auto-img-1-2"
                    />
                    <a className="group block py-4 ms-3" href="#">
                      <h6
                        className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                        data-config-id="auto-txt-9-2"
                      >
                        Armed Luxary Chairs
                      </h6>
                      <div className="flex items-center mb-1">
                        <span
                          className="mr-2 text-sm font-bold text-black"
                          data-config-id="auto-txt-10-2"
                        >
                          $129.00
                        </span>
                        <span
                          className="mr-auto text-xs text-gray-400 line-through"
                          data-config-id="auto-txt-11-2"
                        >
                          $239.00
                        </span>
                        <img
                          className="block"
                          src="vendia-assets/images/item-cards/stars-gradient.svg"
                          alt=""
                          data-config-id="auto-img-2-2"
                        />
                      </div>
                    </a>

                    <a
                      className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                      href="#"
                    >
                      <span className="text-2xl font-bold"><FaHeart /></span>
                    </a>
                  </div>

                </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                  <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                    <img
                      className="block w-full h-80 object-cover rounded-t-xl  "
                      src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                      alt=""
                      data-config-id="auto-img-1-2"
                    />
                    <a className="group block py-4 ms-3" href="#">
                      <h6
                        className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                        data-config-id="auto-txt-9-2"
                      >
                        Armed Luxary Chairs
                      </h6>
                      <div className="flex items-center mb-1">
                        <span
                          className="mr-2 text-sm font-bold text-black"
                          data-config-id="auto-txt-10-2"
                        >
                          $129.00
                        </span>
                        <span
                          className="mr-auto text-xs text-gray-400 line-through"
                          data-config-id="auto-txt-11-2"
                        >
                          $239.00
                        </span>
                        <img
                          className="block"
                          src="vendia-assets/images/item-cards/stars-gradient.svg"
                          alt=""
                          data-config-id="auto-img-2-2"
                        />
                      </div>
                    </a>

                    <a
                      className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                      href="#"
                    >
                      <span className="text-2xl font-bold"><FaHeart /></span>
                    </a>
                  </div>

                </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                  <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                    <img
                      className="block w-full h-80 object-cover rounded-t-xl  "
                      src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                      alt=""
                      data-config-id="auto-img-1-2"
                    />
                    <a className="group block py-4 ms-3" href="#">
                      <h6
                        className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                        data-config-id="auto-txt-9-2"
                      >
                        Armed Luxary Chairs
                      </h6>
                      <div className="flex items-center mb-1">
                        <span
                          className="mr-2 text-sm font-bold text-black"
                          data-config-id="auto-txt-10-2"
                        >
                          $129.00
                        </span>
                        <span
                          className="mr-auto text-xs text-gray-400 line-through"
                          data-config-id="auto-txt-11-2"
                        >
                          $239.00
                        </span>
                        <img
                          className="block"
                          src="vendia-assets/images/item-cards/stars-gradient.svg"
                          alt=""
                          data-config-id="auto-img-2-2"
                        />
                      </div>
                    </a>

                    <a
                      className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                      href="#"
                    >
                      <span className="text-2xl font-bold"><FaHeart /></span>
                    </a>
                  </div>

                </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                  <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                    <img
                      className="block w-full h-80 object-cover rounded-t-xl  "
                      src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                      alt=""
                      data-config-id="auto-img-1-2"
                    />
                    <a className="group block py-4 ms-3" href="#">
                      <h6
                        className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                        data-config-id="auto-txt-9-2"
                      >
                        Armed Luxary Chairs
                      </h6>
                      <div className="flex items-center mb-1">
                        <span
                          className="mr-2 text-sm font-bold text-black"
                          data-config-id="auto-txt-10-2"
                        >
                          $129.00
                        </span>
                        <span
                          className="mr-auto text-xs text-gray-400 line-through"
                          data-config-id="auto-txt-11-2"
                        >
                          $239.00
                        </span>
                        <img
                          className="block"
                          src="vendia-assets/images/item-cards/stars-gradient.svg"
                          alt=""
                          data-config-id="auto-img-2-2"
                        />
                      </div>
                    </a>

                    <a
                      className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                      href="#"
                    >
                      <span className="text-2xl font-bold"><FaHeart /></span>
                    </a>
                  </div>

                </div></SwiperSlide>
                <SwiperSlide> <div className="w-full  px-4 my-4">
                  <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                    <img
                      className="block w-full h-80 object-cover rounded-t-xl  "
                      src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                      alt=""
                      data-config-id="auto-img-1-2"
                    />
                    <a className="group block py-4 ms-3" href="#">
                      <h6
                        className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                        data-config-id="auto-txt-9-2"
                      >
                        Armed Luxary Chairs
                      </h6>
                      <div className="flex items-center mb-1">
                        <span
                          className="mr-2 text-sm font-bold text-black"
                          data-config-id="auto-txt-10-2"
                        >
                          $129.00
                        </span>
                        <span
                          className="mr-auto text-xs text-gray-400 line-through"
                          data-config-id="auto-txt-11-2"
                        >
                          $239.00
                        </span>
                        <img
                          className="block"
                          src="vendia-assets/images/item-cards/stars-gradient.svg"
                          alt=""
                          data-config-id="auto-img-2-2"
                        />
                      </div>
                    </a>

                    <a
                      className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                      href="#"
                    >
                      <span className="text-2xl font-bold"><FaHeart /></span>
                    </a>
                  </div>

                </div></SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id={1}
        data-share=""
        data-category="banner"
        data-component-id="842e895d_11_awz"
        className="py-6 bg-white"
      >
        <div className="container  mx-auto">
          <div className="max-w-md lg:max-w-none mx-auto shadow overflow-hidden">
            <div className="flex flex-wrap items-center ">
              <div className="w-full lg:w-1/3">
                <a className="group block h-full relative uppercase hover:italic" href="#">
                  <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-40 transition duration-500 " />
                  <img
                    className="img-fluid w-full object-cover" style={{ height: '410px' }}
                    src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg"
                    alt=""
                    data-config-id="auto-img-1-11"
                  />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4
                      className="text-5xl font-black text-white"
                      data-config-id="auto-txt-2-11"
                    >
                      Phone
                    </h4>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/3 ">
                <a className="group block h-full relative uppercase hover:italic" href="#">
                  <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-40 transition duration-500" />
                  <img
                    className="img-fluid w-full object-cover" style={{ height: '410px' }}
                    src="https://cdn.tgdd.vn/Files/2022/07/07/1445532/laptop-like-new-99-la-gi-co-tot-khong-co-nen-1.jpg"
                    alt=""
                    data-config-id="auto-img-2-11"
                  />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4
                      className="text-5xl font-black text-white"
                      data-config-id="auto-txt-4-11"
                    >
                      Laptop
                    </h4>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/3 ">
                <a className="group block h-full relative uppercase hover:italic" href="#">
                  <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-40 transition duration-500" />
                  <img
                    className="img-fluid w-full object-cover" style={{ height: '410px' }}
                    src="https://i02.appmifile.com/482_operator_sg/14/11/2022/e1d64270ad76f0e56d4f64f5db222058.png"
                    alt=""
                    data-config-id="auto-img-3-11"
                  />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4
                      className="text-5xl font-black text-white"
                      data-config-id="auto-txt-2-11"
                    >
                      Houseware
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        data-section-id={1}
        data-share=""

        className="py-12 mt-6 py-md-24 bg-gray-300  container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm md:max-w-xl mx-auto lg:max-w-none contents">
            <div className="flex flex-wrap mx-4 mb-3  justify-between">

              <div>
                <h1
                  className="text-3xl text-white font-bold mb-2"
                  data-config-id="auto-txt-1-2"
                >
                  Featured Collections
                </h1>
                <span>
                  <div className="w-28 mb-6  border-b border-red-700 dark:border-gray-400"></div>
                </span>
              </div>

              <p className="text-gray-500" data-config-id="auto-txt-2-2">
                Most Selling and Trending Products in our shop
              </p>


            </div>
            <div className="flex flex-wrap -mx-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className=""
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },

                }}
              >
                {
                  queryCategorySmartPhone.data &&  queryCategorySmartPhone.data.data.data.products.map((product: IProduct) => (
                    <SwiperSlide> <div key={`queryCategorySmartPhone${product._id}`} className="w-full  px-4 my-4">
                  <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                    <Link to={`/products/${product.slug}`}>
                    <img
                      className="block w-full h-80 object-contain rounded-t-xl  "
                      src={`../../../public/images/${product.thumbnail}`}
                      alt={product.name}
                      data-config-id="auto-img-1-2"
                    />
                    </Link>
                    <a className="group block py-4 ms-3" href="#">
                      <h6
                        className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600 overflow-hidden whitespace-nowrap overflow-ellipsis w-52"
                        data-config-id="auto-txt-9-2"
                      >
                        {product.name}
                      </h6>
                      <div className="flex items-center mb-1">
                        <span
                          className="mr-2 text-sm font-bold text-black"
                          data-config-id="auto-txt-10-2"
                        >
                          {product.price}
                        </span>
                        <span
                          className="mr-auto text-xs text-gray-400 line-through"
                          data-config-id="auto-txt-11-2"
                        >
                          {product.discount}
                        </span>
                        <img
                          className="block"
                          src="vendia-assets/images/item-cards/stars-gradient.svg"
                          alt=""
                          data-config-id="auto-img-2-2"
                        />
                      </div>
                    </a>

                    <a
                      className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                      href="#"
                    >
                      <span className="text-2xl font-bold"><FaHeart /></span>
                    </a>
                  </div>

                </div></SwiperSlide>
                  ))
                }
               

              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section
        data-section-id={1}
        data-share=""
        data-category="ta-banners"
        data-component-id="b753d053_01_awz"
        className="py-8"
      >
        <picture className="relative">
          <img className='opacity-80 object-cover w-full' style={{ height: '500px' }} src="../../../public/images/model-iphone.PNG" alt="" />

          <div className="absolute xl:top-[35%] xl:left-[5%] lg:top-[35%] lg:left-[-7%] md:top-[38%] md:left-[-28%] top-[50%] left-[-20%] -translate-x-[-50%] -translate-y-[-50%] transform md:-translate-x-[-50%] md:-translate-y-[-50%]  text-center">
            <div className="w-full">
            <h3 className="mb-1 text-4xl md:text-8xl font-black text-white opacity-90">
                <span className="" data-config-id="header-p1">
                  E COLLECTION
                </span>
              </h3>


            </div>
            <div className="mt-8 mb-8">
            <a className="text-white font-medium py-3 px-6 bg-red-600 hover:bg-red-400 rounded-md md:text-lg" href="#">
                <span data-config-id="primary-action">SHOP NOW</span>
              </a>
            </div>

          </div>

        </picture>
      </section>



      <section
        data-section-id={1}
        data-share=""
        data-category="item-cards-gradient"
        data-component-id="61ca2afa_02_awz"
        className="py-12 py-md-24 bg-gray-300 container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm md:max-w-xl mx-auto lg:max-w-none contents">
            <div className="flex flex-wrap mx-4 mb-3  justify-between">

              <div>
                <h1
                  className="text-3xl text-white font-bold mb-2"
                  data-config-id="auto-txt-1-2"
                >
                  Featured Collections
                </h1>
                <span>
                  <div className="w-28 mb-6  border-b border-red-700 dark:border-gray-400"></div>
                </span>
              </div>

              <p className="text-gray-500" data-config-id="auto-txt-2-2">
                Most Selling and Trending Products in our shop
              </p>


            </div>
            <div className="-mx-4 grid grid-cols-1 sm:gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
              <div className="w-full  px-4 my-4">
                <div className="block relative bg-white  rounded-xl overflow-hidden hover:scale-105 ease-in duration-300">
                  <img
                    className="block w-full h-80 object-cover rounded-t-xl  "
                    src="https://www.cnet.com/a/img/resize/21b025009743623c628852f5c9c5406f7185b444/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&width=1200"
                    alt=""
                    data-config-id="auto-img-1-2"
                  />
                  <a className="group block py-4 ms-3" href="#">
                    <h6
                      className="inline-block text-lg font-bold  text-black mb-2 hover:text-red-600"
                      data-config-id="auto-txt-9-2"
                    >
                      Armed Luxary Chairs
                    </h6>
                    <div className="flex items-center mb-1">
                      <span
                        className="mr-2 text-sm font-bold text-black"
                        data-config-id="auto-txt-10-2"
                      >
                        $129.00
                      </span>
                      <span
                        className="mr-auto text-xs text-gray-400 line-through"
                        data-config-id="auto-txt-11-2"
                      >
                        $239.00
                      </span>
                      <img
                        className="block"
                        src="vendia-assets/images/item-cards/stars-gradient.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                      />
                    </div>
                  </a>

                  <a
                    className="absolute top-0 right-0 m-3 inline-block text-white hover:text-red-600 transform duartion-200"
                    href="#"
                  >
                    <span className="text-2xl font-bold"><FaHeart /></span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-section-id={4}
        data-share=""
        data-category="features"
        data-component-id="4d2f33a1_05_awz"
        className="py-20 overflow-x-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -mx-3">
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="h-full p-6 md:p-12 border">
                <div className="flex items-center">
                  <span className="flex-shrink-0 inline-flex mr-4 md:mr-10 items-center justify-center w-20 h-20 bg-blue-300 rounded-full">
                    <svg
                      width={37}
                      height={37}
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-1-5"
                    >
                      <path
                        d="M34.9845 11.6702C33.7519 10.3368 32 9.60814 30.0543 9.60814H24.9767V6.75543C24.9767 6.2438 24.5581 5.8252 24.0465 5.8252H0.930233C0.418605 5.8252 0 6.2438 0 6.75543V27.2128C0 27.7244 0.418605 28.143 0.930233 28.143H4.63566C4.93798 29.864 6.43411 31.174 8.24031 31.174C10.0465 31.174 11.5426 29.864 11.845 28.143H24.0465H26.0853C26.3876 29.864 27.8837 31.174 29.6899 31.174C31.4961 31.174 32.9922 29.864 33.2946 28.143H36.0698C36.5814 28.143 37 27.7244 37 27.2128V17.6004C36.9922 15.143 36.3023 13.0888 34.9845 11.6702ZM1.86047 7.68566H23.1163V10.5384V26.2903H11.6822C11.1783 24.8795 9.82171 23.864 8.24031 23.864C6.65892 23.864 5.30233 24.8795 4.79845 26.2903H1.86047V7.68566ZM8.24031 29.3136C7.24806 29.3136 6.44186 28.5074 6.44186 27.5151C6.44186 26.5229 7.24806 25.7167 8.24031 25.7167C9.23256 25.7167 10.0388 26.5229 10.0388 27.5151C10.0388 28.5074 9.23256 29.3136 8.24031 29.3136ZM29.6899 29.3136C28.6977 29.3136 27.8915 28.5074 27.8915 27.5151C27.8915 26.5229 28.6977 25.7167 29.6899 25.7167C30.6822 25.7167 31.4884 26.5229 31.4884 27.5151C31.4884 28.5074 30.6822 29.3136 29.6899 29.3136ZM35.1318 26.2826H33.1318C32.6279 24.8717 31.2713 23.8562 29.6899 23.8562C28.1085 23.8562 26.7519 24.8717 26.2481 26.2826H24.9845V11.4686H30.062C33.1938 11.4686 35.1395 13.8174 35.1395 17.6004V26.2826H35.1318Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="mb-4 text-xl font-bold font-heading"
                      data-config-id="header1"
                    >
                      Free Shipping
                    </h3>
                    <p data-config-id="label1">From $45</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="h-full p-6 md:p-12 border">
                <div className="flex items-center">
                  <span className="flex-shrink-0 inline-flex mr-4 md:mr-10 items-center justify-center w-20 h-20 bg-indigo-300 rounded-full">
                    <svg
                      width={39}
                      height={36}
                      viewBox="0 0 39 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-2-5"
                    >
                      <path
                        d="M33.7601 5.67776C30.3819 2.38616 25.8883 0.572266 21.1139 0.572266C16.2512 0.572266 11.7014 2.44089 8.30713 5.83414C7.93802 6.20161 7.94604 6.79581 8.32318 7.16329C8.70032 7.52294 9.31017 7.51512 9.68731 7.14765C12.7205 4.12188 16.7727 2.45653 21.1139 2.45653C29.9165 2.44871 37.0742 9.42284 37.0742 17.9998C37.0742 26.5767 29.9165 33.5508 21.1139 33.5508C12.3113 33.5508 5.15359 26.5767 5.15359 17.9998V17.8043L6.7424 19.3524C6.92696 19.5322 7.17571 19.626 7.42446 19.626C7.67322 19.626 7.91395 19.5322 8.10653 19.3524C8.48367 18.9849 8.48367 18.3907 8.10653 18.0232L4.88077 14.8724C4.50363 14.5049 3.89378 14.5049 3.51664 14.8724L0.282856 18.0232C-0.0942853 18.3907 -0.0942853 18.9849 0.282856 19.3524C0.467414 19.5322 0.716167 19.626 0.96492 19.626C1.21367 19.626 1.4544 19.5322 1.64698 19.3524L3.23579 17.8043V17.9998C3.23579 22.6518 5.09742 27.0302 8.47565 30.3218C11.8539 33.6134 16.3475 35.4273 21.1219 35.4273C25.8964 35.4273 30.39 33.6134 33.7682 30.3218C37.1464 27.0302 39 22.6518 39 17.9998C39 13.3477 37.1384 8.96937 33.7601 5.67776Z"
                        fill="white"
                      />
                      <path
                        d="M20.4014 8C17.272 8 14.7283 10.4785 14.7283 13.5277V16.1938H12.9629C12.4333 16.1938 12 16.616 12 17.132V26.4908C12 27.0068 12.4333 27.429 12.9629 27.429H27.848C28.3776 27.429 28.8109 27.0068 28.8109 26.4908V17.1399C28.8109 16.6238 28.3776 16.2016 27.848 16.2016H26.0826V13.5355C26.0826 10.4863 23.5309 8 20.4014 8ZM16.6541 13.5355C16.6541 11.5183 18.3392 9.88427 20.4014 9.88427C22.4637 9.88427 24.1488 11.5262 24.1488 13.5355V16.2016H16.6541V13.5355ZM26.885 25.5526H13.9258V18.0703H26.885V25.5526Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="mb-4 text-xl font-bold font-heading"
                      data-config-id="header2"
                    >
                      Secure Shopping
                    </h3>
                    <p data-config-id="label2">100% Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="h-full p-6 md:p-12 border">
                <div className="flex items-center">
                  <span className="flex-shrink-0 inline-flex mr-4 md:mr-10 items-center justify-center w-20 h-20 bg-pink-300 rounded-full">
                    <svg
                      width={31}
                      height={37}
                      viewBox="0 0 31 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-5"
                    >
                      <path
                        d="M9.59532 15.086C9.59532 14.5819 9.18285 14.1694 8.67872 14.1694H1.33066C0.826531 14.1694 0.414062 14.5819 0.414062 15.086C0.414062 15.5902 0.826531 16.0026 1.33066 16.0026H8.67872C9.18285 16.0026 9.59532 15.5902 9.59532 15.086Z"
                        fill="white"
                      />
                      <path
                        d="M29.669 14.1694H22.3209C21.8168 14.1694 21.4043 14.5819 21.4043 15.086C21.4043 15.5902 21.8168 16.0026 22.3209 16.0026H29.669C30.1731 16.0026 30.5856 15.5902 30.5856 15.086C30.5856 14.5819 30.1807 14.1694 29.669 14.1694Z"
                        fill="white"
                      />
                      <path
                        d="M15.4996 9.18126C16.0037 9.18126 16.4162 8.76879 16.4162 8.26466V0.916598C16.4162 0.412469 16.0037 0 15.4996 0C14.9955 0 14.583 0.412469 14.583 0.916598V8.26466C14.583 8.76879 14.9955 9.18126 15.4996 9.18126Z"
                        fill="white"
                      />
                      <path
                        d="M20.3199 11.1828C20.5567 11.1828 20.7858 11.0911 20.9691 10.9155L26.1708 5.71376C26.5298 5.35476 26.5298 4.77425 26.1708 4.41525C25.8118 4.05625 25.2313 4.05625 24.8723 4.41525L19.6706 9.61694C19.3116 9.97594 19.3116 10.5565 19.6706 10.9155C19.8539 11.0911 20.0907 11.1828 20.3199 11.1828Z"
                        fill="white"
                      />
                      <path
                        d="M10.0305 10.9155C10.2062 11.0911 10.443 11.1828 10.6798 11.1828C10.9166 11.1828 11.1457 11.0911 11.329 10.9155C11.688 10.5565 11.688 9.97594 11.329 9.61694L6.12733 4.41525C5.76833 4.05625 5.18782 4.05625 4.82882 4.41525C4.46982 4.77425 4.46982 5.35476 4.82882 5.71376L10.0305 10.9155Z"
                        fill="white"
                      />
                      <path
                        d="M26.5146 20.8679C25.8195 20.2721 24.9411 19.9437 24.0474 19.9437H23.2149H20.2206H18.7999V16.2391C18.7999 14.467 18.2729 13.1761 17.2264 12.4046C15.5765 11.1978 13.3385 11.8776 13.2392 11.9082C12.8573 12.0304 12.5976 12.3817 12.5976 12.7789V17.2473C12.5976 18.607 11.9483 19.7603 10.6575 20.6846C9.67976 21.3873 8.67914 21.7081 8.54929 21.7463L8.45763 21.7692C8.1139 21.3797 7.60978 21.1352 7.04454 21.1352H3.56147C2.52266 21.1352 1.6748 21.9831 1.6748 23.0219V34.4488C1.6748 35.4876 2.52266 36.3355 3.56147 36.3355H7.05982C7.51812 36.3355 7.94586 36.1674 8.26667 35.8925C8.9694 36.5799 9.92419 37 10.9554 37H14.4308H14.7898H21.9011C23.001 37 23.971 36.7327 24.712 36.2362C25.6591 35.5946 26.2473 34.5787 26.4153 33.2802L27.8284 24.4961C28.0499 23.1365 27.5458 21.7463 26.5146 20.8679ZM7.11329 34.4488C7.11329 34.4794 7.09037 34.5023 7.05982 34.5023H3.56147C3.53092 34.5023 3.508 34.4794 3.508 34.4488V23.0219C3.508 22.9914 3.53092 22.9684 3.56147 22.9684H7.05982C7.09037 22.9684 7.11329 22.9914 7.11329 23.0219V34.4488ZM26.0181 24.2135L24.605 33.0128C24.605 33.0205 24.605 33.0357 24.5974 33.051C24.5363 33.5781 24.3377 35.1745 21.9011 35.1745H14.7898H14.4308H10.9554C9.97765 35.1745 9.12216 34.4412 8.9694 33.4711C8.96176 33.4329 8.95412 33.3947 8.94648 33.3642V23.5413L8.99995 23.526C9.01523 23.526 9.02287 23.5184 9.03814 23.5184C9.09161 23.5031 10.3901 23.1365 11.681 22.2122C13.476 20.9366 14.4308 19.218 14.4308 17.2473V13.5351C14.9349 13.4816 15.63 13.5046 16.1418 13.8788C16.6917 14.2837 16.9667 15.0781 16.9667 16.2314V20.8526C16.9667 21.3568 17.3792 21.7692 17.8833 21.7692H20.2206H23.2149H24.0474C24.5057 21.7692 24.9564 21.9449 25.323 22.2504C25.873 22.724 26.1327 23.4726 26.0181 24.2135Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="mb-4 text-xl font-bold font-heading"
                      data-config-id="header3"
                    >
                      Customer Satisfaction
                    </h3>
                    <p data-config-id="label3">100% Positive Feedbacks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0">
              <div className="h-full p-6 md:p-12 border">
                <div className="flex items-center">
                  <span className="flex-shrink-0 inline-flex mr-4 md:mr-10 items-center justify-center w-20 h-20 bg-orange-300 rounded-full">
                    <svg
                      width={35}
                      height={37}
                      viewBox="0 0 35 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-4-5"
                    >
                      <path
                        d="M30.1582 14.0693V12.6468C30.1582 9.24223 28.9534 6.07857 26.7691 3.73109C24.5305 1.32143 21.4523 0 18.0944 0H16.9206C13.5626 0 10.4845 1.32143 8.24583 3.73109C6.06158 6.07857 4.85675 9.24223 4.85675 12.6468V14.0693C2.20612 14.2481 0.0996094 16.4557 0.0996094 19.1529V21.3761C0.0996094 24.1821 2.3849 26.4674 5.191 26.4674H8.05927C8.5723 26.4674 8.99205 26.0477 8.99205 25.5347V14.9866C8.99205 14.4735 8.5723 14.0538 8.05927 14.0538H6.7223V12.6468C6.7223 6.49832 11.1063 1.86555 16.9128 1.86555H18.0866C23.9009 1.86555 28.2771 6.49832 28.2771 12.6468V14.0538H26.9402C26.4271 14.0538 26.0074 14.4735 26.0074 14.9866V25.5269C26.0074 26.0399 26.4271 26.4597 26.9402 26.4597H28.246C27.8652 31.3256 24.5149 32.4527 22.9603 32.7092C22.5328 31.3956 21.2969 30.4473 19.8433 30.4473H17.5114C15.708 30.4473 14.2389 31.9164 14.2389 33.7197C14.2389 35.5231 15.708 37 17.5114 37H19.8511C21.3591 37 22.6261 35.9739 23.007 34.5903C23.7687 34.4815 24.9736 34.2095 26.1706 33.5099C27.8574 32.5227 29.8551 30.5095 30.1194 26.4519C32.7855 26.2887 34.8998 24.0733 34.8998 21.3683V19.1452C34.9076 16.4557 32.8089 14.2403 30.1582 14.0693ZM7.14205 24.5941H5.20654C3.4265 24.5941 1.9807 23.1483 1.9807 21.3683V19.1452C1.9807 17.3651 3.4265 15.9193 5.20654 15.9193H7.14205V24.5941ZM19.8511 35.1345H17.5114C16.7341 35.1345 16.1044 34.5048 16.1044 33.7275C16.1044 32.9502 16.7341 32.3206 17.5114 32.3206H19.8511C20.6284 32.3206 21.258 32.9502 21.258 33.7275C21.258 34.5048 20.6284 35.1345 19.8511 35.1345ZM33.042 21.3683C33.042 23.1483 31.5962 24.5941 29.8162 24.5941H27.8807V15.9193H29.8162C31.5962 15.9193 33.042 17.3651 33.042 19.1452V21.3683Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="mb-4 text-xl font-bold font-heading"
                      data-config-id="header4"
                    >
                      Support
                    </h3>
                    <p data-config-id="label4">Online Support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3">
              <div className="h-full p-6 md:p-12 border">
                <div className="flex items-center">
                  <span className="flex-shrink-0 inline-flex mr-10 items-center justify-center w-20 h-20 bg-red-300 rounded-full">
                    <svg
                      width={37}
                      height={29}
                      viewBox="0 0 37 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-5-5"
                    >
                      <path
                        d="M20.0991 22.5451H2.54649C2.14481 22.5451 1.81892 22.2192 1.81892 21.8176V7.97858H32.7785V9.79751C32.7785 10.2977 33.1878 10.707 33.688 10.707C34.1882 10.707 34.5974 10.2977 34.5974 9.79751V3.2418C34.5974 1.83972 33.453 0.695312 32.0509 0.695312H2.54649C1.13683 0.695312 0 1.83972 0 3.2418V21.8176C0 23.2196 1.14441 24.364 2.54649 24.364H20.1067C20.6069 24.364 21.0161 23.9548 21.0161 23.4546C21.0161 22.9544 20.6069 22.5451 20.0991 22.5451ZM2.54649 2.51424H32.0509C32.4526 2.51424 32.7785 2.84013 32.7785 3.2418V6.15966H1.81134V3.2418C1.81134 2.84013 2.14481 2.51424 2.54649 2.51424Z"
                        fill="white"
                      />
                      <path
                        d="M18.2046 14.7312C18.2046 14.231 17.7954 13.8218 17.2952 13.8218H6.36649C5.86629 13.8218 5.45703 14.231 5.45703 14.7312C5.45703 15.2314 5.86629 15.6407 6.36649 15.6407H17.2952C17.803 15.6407 18.2046 15.2314 18.2046 14.7312Z"
                        fill="white"
                      />
                      <path
                        d="M6.36649 17.0806C5.86629 17.0806 5.45703 17.4898 5.45703 17.99C5.45703 18.4902 5.86629 18.8995 6.36649 18.8995H10.7395C11.2397 18.8995 11.6489 18.4902 11.6489 17.99C11.6489 17.4898 11.2397 17.0806 10.7395 17.0806H6.36649Z"
                        fill="white"
                      />
                      <path
                        d="M6.26005 12.3438H17.1887C17.6889 12.3438 18.0982 11.9346 18.0982 11.4344C18.0982 10.9342 17.6889 10.5249 17.1887 10.5249H6.26005C5.75984 10.5249 5.35059 10.9342 5.35059 11.4344C5.35059 11.9346 5.75226 12.3438 6.26005 12.3438Z"
                        fill="white"
                      />
                      <path
                        d="M36.0982 18.6043H34.7644V16.4822C34.7644 13.8523 32.6196 11.7075 29.9897 11.7075C27.3598 11.7075 25.215 13.8523 25.215 16.4822V18.6043H23.8811C23.3809 18.6043 22.9717 19.0135 22.9717 19.5137V27.3957C22.9717 27.8959 23.3809 28.3052 23.8811 28.3052H36.0907C36.5909 28.3052 37.0001 27.8959 37.0001 27.3957V19.5137C37.0077 19.0059 36.5984 18.6043 36.0982 18.6043ZM27.0339 16.4746C27.0339 14.8452 28.3602 13.5189 29.9897 13.5189C31.6191 13.5189 32.9454 14.8452 32.9454 16.4746V18.5967H27.0339V16.4746ZM35.1888 26.4787H24.7906V20.4156H35.1812V26.4787H35.1888Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="mb-4 text-xl font-bold font-heading"
                      data-config-id="header5"
                    >
                      Free Shipping
                    </h3>
                    <p data-config-id="label5">Secure transaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id={1}
        data-share=""

        className="py-12 mt-6 py-md-24 bg-gray-300  container mx-auto"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm md:max-w-xl mx-auto lg:max-w-none contents">
            <div className="flex flex-wrap mx-4 mb-3  justify-between">

              <div>
                <h1
                  className="text-3xl text-white font-bold mb-2"
                  data-config-id="auto-txt-1-2"
                >
                  Featured Collections
                </h1>
                <span>
                  <div className="w-28 mb-6  border-b border-red-700 dark:border-gray-400"></div>
                </span>
              </div>

              <p className="text-gray-500" data-config-id="auto-txt-2-2">
                Most Selling and Trending Products in our shop
              </p>


            </div>
            <div className="flex flex-wrap -mx-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className=""
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },

                }}
              >
                <SwiperSlide>  <div className="w-full ">
                  <a className="block px-4 group" href="#">
                    <img
                      className="block w-full h-40 mb-4"
                      src="https://shuffle.dev/saturn-assets/images/blog/image-sm-blog-2.png"
                      alt=""
                      data-config-id="auto-img-3-5"
                    />
                    <span
                      className="block text-gray-500 mb-2"
                      data-config-id="auto-txt-4-5"
                    >
                      Jul 20, 2022
                    </span>
                    <h4
                      className="text-xl font-semibold text-gray-900 group-hover:text-orange-900 mb-4"
                      data-config-id="auto-txt-5-5"
                    >
                      Consectures Content Velit officia consequat duis enim velit mollit
                    </h4>
                    <p className="text-gray-500" data-config-id="auto-txt-6-5">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit...
                    </p>
                  </a>
                </div></SwiperSlide>
                <SwiperSlide>  <div className="w-full ">
                  <a className="block px-4 group" href="#">
                    <img
                      className="block w-full h-40 mb-4"
                      src="https://shuffle.dev/saturn-assets/images/blog/image-sm-blog-2.png"
                      alt=""
                      data-config-id="auto-img-3-5"
                    />
                    <span
                      className="block text-gray-500 mb-2"
                      data-config-id="auto-txt-4-5"
                    >
                      Jul 20, 2022
                    </span>
                    <h4
                      className="text-xl font-semibold text-gray-900 group-hover:text-orange-900 mb-4"
                      data-config-id="auto-txt-5-5"
                    >
                      Consectures Content Velit officia consequat duis enim velit mollit
                    </h4>
                    <p className="text-gray-500" data-config-id="auto-txt-6-5">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit...
                    </p>
                  </a>
                </div></SwiperSlide>
                <SwiperSlide>  <div className="w-full ">
                  <a className="block px-4 group" href="#">
                    <img
                      className="block w-full h-40 mb-4"
                      src="https://shuffle.dev/saturn-assets/images/blog/image-sm-blog-2.png"
                      alt=""
                      data-config-id="auto-img-3-5"
                    />
                    <span
                      className="block text-gray-500 mb-2"
                      data-config-id="auto-txt-4-5"
                    >
                      Jul 20, 2022
                    </span>
                    <h4
                      className="text-xl font-semibold text-gray-900 group-hover:text-orange-900 mb-4"
                      data-config-id="auto-txt-5-5"
                    >
                      Consectures Content Velit officia consequat duis enim velit mollit
                    </h4>
                    <p className="text-gray-500" data-config-id="auto-txt-6-5">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit...
                    </p>
                  </a>
                </div></SwiperSlide>
                <SwiperSlide>  <div className="w-full ">
                  <a className="block px-4 group" href="#">
                    <img
                      className="block w-full h-40 mb-4"
                      src="https://shuffle.dev/saturn-assets/images/blog/image-sm-blog-2.png"
                      alt=""
                      data-config-id="auto-img-3-5"
                    />
                    <span
                      className="block text-gray-500 mb-2"
                      data-config-id="auto-txt-4-5"
                    >
                      Jul 20, 2022
                    </span>
                    <h4
                      className="text-xl font-semibold text-gray-900 group-hover:text-orange-900 mb-4"
                      data-config-id="auto-txt-5-5"
                    >
                      Consectures Content Velit officia consequat duis enim velit mollit
                    </h4>
                    <p className="text-gray-500" data-config-id="auto-txt-6-5">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis enim velit...
                    </p>
                  </a>
                </div></SwiperSlide>
               

              </Swiper>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default HomePage;
