import { useCartStore } from '../../hooks/useCartStore';
import { useNavigate } from 'react-router-dom';


const CheckoutPage = () => {

    const navigate = useNavigate();
    const { items, total, itemCount} = useCartStore();

    
  return (
    <div className="container p-12 mx-auto">
    <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Information
            </h2>
            <form className="justify-center w-full mx-auto">
                <div className="">
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label  className="block mb-3 text-sm font-semibold text-gray-500">First
                                Name</label>
                            <input name="firstName" type="text" placeholder="First Name"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label  className="block mb-3 text-sm font-semibold text-gray-500">Last
                                Name</label>
                            <input name="lastName" type="text" placeholder="Last Name"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                        <div className="w-full lg:w-1/2">
                            <label  className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                            <input name="email" type="email" placeholder="Email"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label  className="block mb-3 text-sm font-semibold text-gray-500">Phone number</label>
                            <input name="phoneNumber" type="text" placeholder="Phone number"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label
                                className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                            <input
                                className="w-full px-4 py-2 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                name="Address" placeholder="Address"></input>
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                        <div className="w-full lg:w-1/2">
                            <label 
                                className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                            <input name="city" type="text" placeholder="City"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label  className="block mb-3 text-sm font-semibold text-gray-500">
                                Postcode</label>
                            <input name="postcode" type="text" placeholder="Post Code"
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <label className="flex items-center text-sm group text-heading">
                            <input type="checkbox"
                                className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                            <span className="ml-2">Save this information for next time</span></label>
                    </div>
                    <div className="relative pt-3 xl:pt-6"><label
                            className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                            (Optional)</label><textarea name="note"
                            className="flex items-center w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            rows={2} placeholder="Notes for delivery"></textarea>
                    </div>
                    <h2 className="mt-8 font-bold md:text-xl text-heading ">Payment methods
            </h2>   
                    <div className="mt-4 flex justify-between">
                        <div className="w-full lg:w-1/3 flex items-center gap-x-4">
                            <input className='h-5 w-5' id='paymentCash' type="radio" name="paymentType" value="CASH" />
                            <label  htmlFor='paymentCash'>Cash</label>
                        </div>
                        
                        <div className="w-full lg:w-1/3 flex items-center gap-x-4">
                            <input className='h-5 w-5' id='paymentCod' type="radio" name="paymentType" value="COD" />
                            <label  htmlFor='paymentCod'>COD</label>
                        </div>
                        <div className="w-full lg:w-1/3 flex items-center gap-x-4">
                            <input className='h-5 w-5' id='paymentCredit' type="radio" name="paymentType" value="CREDIT CARD" />
                            <label  htmlFor='paymentCredit'>Credit Card</label>
                        </div>
                    </div>
                    <h2 className="mt-8 font-bold md:text-xl text-heading ">Promotion Code
            </h2>   
                    <div className="my-5 flex gap-x-5">
                        <div className="flex-1">
                            <input placeholder='Enter your promotion code' type="text" className='w-full px-4 py-2 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' name="promotionCode" />
                        </div>
                        <div className="w-1/2">
                            <button className='bg-white px-4 py-2 text-slate-900 border-slate-200 border hover:bg-slate-100 rounded'>Apply</button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button
                            className="w-full px-6 py-3 text-white bg-indigo-600 hover:bg-indio-900 rounded font-bold text-xl">Place Order</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-3/5 bg-slate-100 p-4 rounded" >
            <div className="pt-12 md:pt-0 2xl:ps-4">
                <h2 className="text-xl font-bold">Order Summary
                </h2>
                <div className="mt-8">
                    <div className="flex flex-col space-y-4">
                        {items.map((item)=> {
                            return (
                                <div className="flex space-x-4">
                                <div className="w-28">
                                    <img src={item.thumb} alt={item.name}
                                        className="w-full" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl">{item.name}</h2>
                                    <p className="text-sm">Attributes</p>
                                    <p className='flex justify-between'>
                                    <span className="text-red-600">Price</span>
                                    <span>${item.price} *  {item.quantity} = ${item.price * item.quantity}</span>
                                    </p>  
                                    
                                </div>
                               
                            </div>
                            )
                        })}
                       

                       
                    </div>
                </div>
                <div className="flex items-center justify-end w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 text-heading last:border-b-0 last:text-base last:pb-0">
                    Subtotal<span className="ml-2">${total}</span>
                </div>
                <div className="flex items-center justify-end w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 text-heading last:border-b-0 last:text-base last:pb-0">
                    Shipping Tax<span className="ml-2">+ $10</span>
                </div>
                <div className="flex items-center justify-end w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 text-heading last:border-b-0 last:text-base last:pb-0">
                   Discount<span className="ml-2">- $0</span>
                </div>
                <div className="flex items-center justify-end w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 text-heading last:border-b-0 last:text-base last:pb-0">
                    Total<span className="ml-2">$50.00</span>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default CheckoutPage;
