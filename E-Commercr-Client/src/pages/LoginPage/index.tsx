import { RiGoogleFill, RiFacebookCircleFill } from "react-icons/ri";

const LoginPage = () =>{
    return(
        <>
              <section data-section-id="1" data-share="" data-category="sign-up" data-component-id="6c5b97a6_06_awz" className="relative py-20 lg:py-10 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 xl:items-end">
              <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-2xl h-full">
                  <img className="block w-full h-166 sm:h-full object-cover rounded-3xl" src="../../../public/images/image-yellow.png" alt="" data-config-id="auto-img-1-6"/>
                  <div className="absolute top-0 left-0 h-full w-full p-8 pb-16 xs:p-16">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex items-start justify-between">
                        <a className="inline-block mt-2" href="#">
                          <img className="h-8" src="" alt="" data-config-id="auto-img-2-6"/>
                        </a>
                        
                      </div>
                      <div className="max-w-sm">
                        <div className="flex mb-6 items-center">
                          <img className="h-8" src="saturn-assets/images/sign-up/avatar-small-5.png" alt="" data-config-id="auto-img-3-6"/>
                          <div className="ml-4">
                            <span className="block text-white font-medium leading-none" data-config-id="auto-txt-1-6">Maria Jola</span>
                            <span className="text-sm text-yellow-100" data-config-id="auto-txt-2-6">Customer Accounting</span>
                          </div>
                        </div>
                        <p className="text-white font-medium" data-config-id="auto-txt-3-6">I&rsquo;m impressed with the result I&rsquo;ve seen since starting to use this product, I begin receiving client and project in the first week.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-16">
                <div className="max-w-md mx-auto lg:mr-0 lg:py-12 xl:py-0">
                  <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4" data-config-id="auto-txt-4-6">Sign in to your account</h3>
                  <p className="text-lg text-gray-500 mb-10" data-config-id="auto-txt-5-6">See our software in action with the demo version</p>
                  <form action="">
                    <div className="mb-5">
                      <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="Enter your email" data-config-id="auto-input-7-6"/>
                    </div>
                    <div className="mb-10">
                      <div className="relative">
                        <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="password" placeholder="Enter your password" data-config-id="auto-input-8-6"/>
                        <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                          <img src="saturn-assets/images/sign-up/icon-eye.svg" alt="" data-config-id="auto-img-4-6"/>
                        </button>
                      </div>
                    </div>
                    <button className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-600 rounded-full overflow-hidden" type="submit">
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative" data-config-id="auto-txt-6-6">Login</span>
                    </button>
                    <div className="flex mb-6 items-center">
                      <div className="w-full h-px bg-gray-300"></div>
                      <span className="mx-4 text-sm font-semibold text-gray-500" data-config-id="auto-txt-7-6">Or</span>
                      <div className="w-full h-px bg-gray-300"></div>
                    </div>
                    <div className="mb-20">
                      <a className="inline-flex w-full mb-5 py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100" href="#">
                        <span className="text-base mt-1 font-semibold text-gray-600"><RiGoogleFill /></span>
                        <span className="ml-4 text-sm font-semibold text-gray-600" data-config-id="auto-txt-8-6">Login with Google</span>
                      </a>
                      <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100" href="#">
                      <span className=" text-base mt-1 font-semibold text-gray-600"><RiFacebookCircleFill /></span>
                        <span className="ml-4 text-sm font-semibold text-gray-600" data-config-id="auto-txt-9-6">Login with Facebook</span>
                      </a>
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-semibold text-gray-900">
                        <span data-config-id="auto-txt-10-6">Don&rsquo;t have an account?</span>
                        <a className="inline-block ml-1 text-orange-500 hover:text-orange-700" href="#" data-config-id="auto-txt-11-6">Sign up</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default LoginPage