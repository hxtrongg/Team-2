import { useCartStore } from '../../hooks/useCartStore';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const navigate = useNavigate();
  const { items, total, itemCount, removeItem, increaseQuantity, decreaseQuantity } = useCartStore();
  return (
    <section className="bg-white">
    {
      itemCount === 0 ? (
        <div className='grid text-center items-center min-h[300px] mt-20'>
          <strong className='text-5xl'>You have no items saved in your wishlist</strong>

          <span className='mt-10'>
          <button type='button' className='bg-red-600 py-2 px-4 text-white text-base hover:bg-red-400 transition duration-200'>
                  SHOP NOW
          </button>
          </span>
        </div>
      ) : (
        
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Wish List
          </h2>
          {
            items.map((item) => {
              return(
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item.thumb} alt={item.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                   
                      <span aria-hidden="true" className=" inset-0" />
                      {item.name}
                   
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-900">${item.price * item.quantity}</p>
              </div>
              <div className="sm:flex items-center mt-2 justify-between">
                <div className="inline-flex py-2 px-4 font-bold text-gray-400 border border-blueGray-800 ">
                  <button className="inline-block"  onClick={() => {
                          decreaseQuantity(item.id);
                        }}>
                   <span className='text-base font-bold'>-</span>
                  </button>
                  <input
                    className="w-12 px-2 text-base font-bold text-center bg-transparent outline-none"
  
  
                    value={item.quantity}
                  />
                  <button className="inline-block">
                   <span className='text-base font-bold'  onClick={() => {
                          increaseQuantity(item.id);
                        }}>+</span>
                  </button>
                </div>
                <button type='button' className='bg-red-600 py-2 px-4 text-white text-base hover:bg-red-400 transition duration-200'>
                  ADD TO BAG
                </button>
              </div>
            </div>
           
            
          </div>
              )
            })
          }
        </div>
     
      )
    }
   </section>

  )
}

export default WishlistPage