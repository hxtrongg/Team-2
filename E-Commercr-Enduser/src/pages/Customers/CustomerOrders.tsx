import React from 'react';
import { Helmet } from "react-helmet";
import config from '../../constants/config';
import {
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const CustomerOrders = () => {

  const navigate = useNavigate();

  const getCusOrders = async () => {
    return axios.get(config.urlAPI + `/v1/oders`);
  }

  const queryCusOrders = useQuery({
    queryKey: ['products'],
    queryFn: () => getCusOrders(),
    onSuccess: (data) => {
      //Thành công thì trả lại data
      console.log(data.data.data.orders);
    },
    onError: (error) => {
      console.log(error);
    },

  })

  return (
    <section data-section-id="1" data-share="" data-category="order-history" data-component-id="cfc459fa_01_awz" className="py-4 bg-gray-100">
      <div className="w-full lg:w-11/12 md:w-11/12 mx-auto ">
        {
          queryCusOrders.data && queryCusOrders.data.data.data.orders ? queryCusOrders.data.data.data.orders.map((orderItem: any) => {
            return (
              <div className="mb-12 py-4 px-8  bg-white">
                <div className="flex flex-wrap mb-8 pb-4 border-b">
                  <div className="mr-20 mb-3">
                    <h3 className="text-gray-600" data-config-id="header1">Order Number</h3>
                    <p className="text-blue-300 font-bold font-heading" data-config-id="value1">{orderItem._id}</p>
                  </div>
                  <div className="mr-auto">
                    <h3 className="text-gray-600" data-config-id="header2">Date</h3>
                    <p className="text-blue-300 font-bold font-heading" data-config-id="value2">{orderItem.createdDate}</p>
                  </div>

                </div>
                <div className="flex flex-wrap -mx-4 mb-8 bg-sky-100 py-4 rounded-lg">
                  <div className="w-full lg:w-2/6 px-4 mb-8 lg:mb-0">
                    <div className="flex items-center justify-center h-auto border border-gray-300 bg-white">
                      <img className="h-64 object-cover" src={`../../../public/images/${orderItem.product.thumbnail}`} alt="" data-config-id="image1" />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/6 px-4">
                    <div className="flex flex-wrap items-center mb-11">
                      <div className="mr-auto">
                        <h3 className="text-xl font-bold font-heading" data-config-id="title1">{orderItem.product.name}</h3>
                        {/* <p className="text-gray-500 my-2" data-config-id="desc1">Maecenas 0.7 commodo sit</p> description */}
                      </div>
                      <span className="text-2xl font-bold font-heading text-blue-300" data-config-id="price1">${orderItem.product.price}</span>
                    </div>
                    <div className="flex flex-wrap -mx-10">
                      <div className="hidden sm:flex sm:w-96 w-full">
                        <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                          <h4 className="mb-6 font-bold font-heading" data-config-id="info1-1">Ordered on</h4>
                          <p className="text-gray-500" data-config-id="info1-1v">{orderItem.createdDate}</p>
                        </div>
                        <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                          <h4 className="mb-6 font-bold font-heading" data-config-id="info1-2">Delivered</h4>
                          <p className="text-gray-500" data-config-id="info1-2-v">{orderItem.shippedDate}</p>
                        </div>
                      </div>
                      <div className="w-full lg:w-auto ml-auto px-10 mt-7">
                        <Link to={'/customers'} className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-3 px-6 rounded-md uppercase transition duration-200"  data-config-id="secondary-action">View summary</Link>
                        <Link to={'/products'} className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-3 px-6 rounded-md uppercase transition duration-200"  data-config-id="primary-action">Buy again</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) : null
        }
      </div>
    </section>
  )
}

export default CustomerOrders