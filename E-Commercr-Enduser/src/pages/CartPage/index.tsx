import { useCartStore } from '../../hooks/useCartStore';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const CartPage = () => {
  const navigate = useNavigate();
  const { items, total, itemCount, removeItem, increaseQuantity, decreaseQuantity } = useCartStore();
  return (
    <section
      data-section-id={1}
      data-share=""
      data-category="ecommerce-cart"
      data-component-id="f67b75c7_02_awz"
      className="pt-12 pb-24 overflow-hidden "
    >
       {/* ====================== */}
       {itemCount === 0 ? (
        <div className='flex justify-center items-center min-h[300px] mt-10'>
          <strong className='text-2xl'>Empty Cart</strong>
        </div>
      ) : (
        <div className="container px-4 mx-auto">
      
      <div className="flex flex-wrap justify-between -mx-4 bg-slate-600 py-12 px-4 rounded-lg">
        <div className="w-full xl:w-9/12 2xl:w-8/12 px-4 mb-16 xl:mb-0">
          
        {
          items.map((item)=>{
            return(
              
              <div className="relative flex w-full -mx-4 mb-8 pb-8 flex-wrap items-center justify-between border-b border-gray-200 border-opacity-40">
              
              <div className="w-full md:w-1/2">
                <div className="md:flex md:items-center">
                  <div className="relative w-full md:w-auto px-4 mb-6 xl:mr-10 md:mb-10 lg:mb-0">
                    <a className="block mx-auto max-w-max" href="#">
                      <img
                        className="w-24 h-full object-contain"
                        src={`../../../public/images/${item.thumb}`} alt={item.name}
                        data-config-id="auto-img-1-2"
                      />
                    </a>
                    <button
                    onClick={() => {
                      removeItem(item.id);
                    }}
                     className="md:hidden absolute top-0 right-0 text-gray-300 hover:text-gray-400">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-3-2"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width={27}
                          height={27}
                          rx="13.5"
                          stroke="currentColor"
                        />
                        <line
                          x1="20.495"
                          y1="8.49497"
                          x2="8.49498"
                          y2="20.495"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                        <line
                          x1="19.505"
                          y1="20.495"
                          x2="7.50503"
                          y2="8.49498"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="px-4 mb-6 lg:mb-0">
                    <a
                      className="block mb-5 text-xl font-heading font-medium hover:underline"
                      href="#"
                      data-config-id="auto-txt-10-2"
                    >
                      {item.name}
                    </a>
                  
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-auto px-4 mb-6 md:mb-0">
                <div className="flex items-center">
                  <h4
                    className="mr-4 font-heading font-medium"
                    data-config-id="auto-txt-16-2"
                  >
                    Qty:
                  </h4>
                  <div className="flex items-center">
                    <button onClick={() => {
                          decreaseQuantity(item.id);
                        }} className="inline-flex items-center justify-center w-5 h-5 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-full">
                      <svg
                        width={10}
                        height={2}
                        viewBox="0 0 10 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-4-2"
                      >
                        <line
                          x1={10}
                          y1="1.03564"
                          y2="1.03564"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                    <input
                      className="w-16 px-3 py-2 mx-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                      type="text"
                      value={item.quantity}
                    />
                    <button onClick={() => {
                          increaseQuantity(item.id);
                        }} className="inline-flex items-center justify-center w-5 h-5 text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-600 rounded-full">
                      <svg
                        width={10}
                        height={11}
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-5-2"
                      >
                        <line
                          x1="5.03516"
                          y1="0.285645"
                          x2="5.03516"
                          y2="10.9999"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <line
                          x1={10}
                          y1="6.03564"
                          y2="6.03564"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-auto px-4">
                <span className="text-xl font-heading font-medium text-blue-500">
                  
                  <span data-config-id="auto-txt-19-2">${item.price * item.quantity}</span>
                </span>
                <button className="hidden lg:block absolute top-0 right-0 -mt-10 -mr-6 text-gray-300 hover:text-gray-400">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-6-2"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width={27}
                      height={27}
                      rx="13.5"
                      stroke="currentColor"
                    />
                    <line
                      x1="20.495"
                      y1="8.49497"
                      x2="8.49498"
                      y2="20.495"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <line
                      x1="19.505"
                      y1="20.495"
                      x2="7.50503"
                      y2="8.49498"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </button>
              </div>
              <button className="hidden md:block lg:hidden absolute top-0 right-0 -mr-6 text-gray-300 hover:text-gray-400">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-config-id="auto-svg-7-2"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={27}
                    height={27}
                    rx="13.5"
                    stroke="currentColor"
                  />
                  <line
                    x1="20.495"
                    y1="8.49497"
                    x2="8.49498"
                    y2="20.495"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <line
                    x1="19.505"
                    y1="20.495"
                    x2="7.50503"
                    y2="8.49498"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </button>
            </div>
            )
          })
        }
         
        
        </div>
        <div className="w-full xl:w-3/12 px-4">
          <div className="py-10 bg-purple-500 rounded-3xl">
            <div className="px-10 pb-8 mb-6 border-b border-white border-opacity-20">
              <h2
                className="mb-5 text-2xl font-heading font-medium text-white"
                data-config-id="auto-txt-51-2"
              >
                Cart totals
              </h2>
              <div className="flex justify-between items-center mb-3">
                <h4
                  className="font-heading font-medium text-white text-opacity-50"
                  data-config-id="auto-txt-52-2"
                >
                  Items
                </h4>
                <span className="text-xl font-heading font-medium text-white">
                  <span data-config-id="auto-txt-53-2">Qty: {itemCount}</span>
                </span>
              </div>
              {/* <div className="flex justify-between items-center">
                <h4
                  className="font-heading font-medium text-white text-opacity-50"
                  data-config-id="auto-txt-55-2"
                >
                  Shipping
                </h4>
                <span className="text-xl font-heading font-medium text-white">
                  <span className="text-base" data-config-id="auto-txt-57-2">
                    $
                  </span>
                  <span data-config-id="auto-txt-56-2">10,00</span>
                </span>
              </div> */}
            </div>
            <div className="px-10">
              <div className="flex pb-4 mb-6 justify-between items-center border-b border-white border-opacity-20">
                <h4
                  className="font-heading font-medium text-white"
                  data-config-id="auto-txt-58-2"
                >
                  Total
                </h4>
                <span className="text-xl font-heading font-medium text-white">
                  <span className="text-base" data-config-id="auto-txt-60-2">
                    $
                  </span>
                  <span data-config-id="auto-txt-59-2">{total}</span>
                </span>
              </div>
            </div>
            <div className="text-center px-10 ">
              <a onClick={()=>{
                  navigate(`/checkout`)
                }}
                className="inline-block w-full md:w-auto hover:bg-sky-300 hover:text-white py-3 px-10 text-base leading-6 font-medium tracking-tighter font-heading text-center bg-white  focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 rounded-xl"
                href="#"
                data-config-id="auto-txt-61-2"
              >
                CHECKOUT
              </a>
            </div>
            <a href='#' className='text-center hover:text-white flex justify-center items-center mt-5'>
              <span className='font-semibold'>Continue Shopping</span>
              <span className='mt-1 ml-1'><FaArrowRight /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
      
      )}
    </section>

  )
}

export default CartPage

