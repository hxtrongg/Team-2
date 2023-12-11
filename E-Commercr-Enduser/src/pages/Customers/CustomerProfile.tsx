
const CustomerProfile = () => {
  return (
    <section className="py-10 bg-gray-100 ">
<div className="w-full lg:w-11/12 md:w-11/12 mx-auto ">
    <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900 dark:text-gray-300">Personal Information
        </h2>
        <form action="#" method="post" className="">
            <div className="container px-4 mx-auto"></div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >
                    Full Name
                </label>
                <input
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                    type="text" name="" placeholder="Write a full name"/>
            </div>
            <div className="mb-6">
                <label className="mr-2">
                    <input type="radio" name="inline-radio"/>
                    <span className="ml-2 dark:text-gray-400">Male</span>
                </label>
                <label>
                    <input type="radio" name="inline-radio" value="option 2"/>
                    <span className="ml-2 dark:text-gray-400">Female</span>
                </label>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Position</label>
                <div className="relative">
                    <select
                        className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                        name="field-name">
                        <option>Manager </option>
                        <option>CEO</option>
                        <option>Assistant</option>
                        <option>Designer</option>
                    </select>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Message</label>
                <textarea
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                    name="field-name" rows={5} placeholder="Write something..."></textarea>
            </div>
            <div className="mb-6 ">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Placeholder</label>
                <div className="py-2 shrink-0">
                    <img className="object-cover w-16 h-16 rounded-full"
                        src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg"
                        alt="Current profile photo"/>
                </div>
                <label className="block pt-2">
                    <span className="sr-only ">Choose profile photo</span>
                    <input type="file"
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold dark:file:bg-gray-600 dark:file:text-gray-200 dark:hover:file:bg-gray-700 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "/>
                </label>
            </div>
            <div className="grid w-full gap-4 mb-6 lg:grid-cols-2">
                <div> <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Min-width
                    </label>
                    <input
                        className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                        type="number" name="" placeholder="min-width"/>
                </div>
                <div> <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Max-width
                    </label>
                    <input
                        className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                        type="number" name="" placeholder="max-width"/>
                </div>
            </div>

            <div className="mb-7">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Rating</label>
                <ul className="flex justify-start text-red-400">
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                            className="w-4 mr-1 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                            className="w-4 mr-1 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                            className="w-4 mr-1 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                            className="w-4 mr-1 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                            </path>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="mb-6 ">
                <div className="relative pt-1">
                    <label  className="form-label dark:text-gray-400">
                        Range</label>
                    <input type="range"
                        className="h-4 p-0 ml-3 bg-blue-100 appearance-none dark:bg-gray-800 form-range focus:outline-none focus:ring-0 focus:shadow-none"
                        id="customRange1"/>
                </div>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >
                    Field
                    Name</label>
                <input
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                    type="text" name="" placeholder="Write a text"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium dark:text-gray-400" >Instruction</label>
                <input
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:border-gray-900 dark:bg-gray-800 dark:text-gray-400"
                    type="text" name="" placeholder="Write a text"/>
            </div>
            <div className="mt-7">
                <div className="flex justify-start space-x-2">
                    <button type="button"
                        className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>

</section>
  )
}

export default CustomerProfile