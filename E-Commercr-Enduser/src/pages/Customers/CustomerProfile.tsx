// const multer  = require('multer')
// const path = require('path')
// var slugify = require('slugify');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, 'public/images')
//     },
//     filename: function (req, file, cb) {

//         //lấy thông tin file vừa up lên
//         const fileInfo = path.parse(file.originalname);
    
//         console.log('<<=== 🚀 fileInfo ===>>',fileInfo);
    
       
//         cb(null, slugify(fileInfo.name,{
//           lower: true,
//           remove: /[*+~.()'"!:@]/g,
//           strict: true,
//           locale: 'vi',
//       }) + '-' +  Date.now() + fileInfo.ext)
//       }
// })

/** Bộ lọc hình ảnh */
// const imageFilter  = function(req, file, cb) {
//     // Accept images only
//     const mimetypeAllow = ["image/png", "image/jpg", "image/gif", "image/jpeg", "image/webp"];
//     if (!mimetypeAllow.includes(file.mimetype)) {
//         req.fileValidationError = 'Only .png, .gif, .jpg, webp, and .jpeg format allowed!';
//         return cb(new Error('Only .png, .gif, .jpg, webp, and .jpeg format allowed!'), false);
//     }
//     cb(null, true);
//   };

//   const uploadSingle = multer({
//     storage: storage,
//     fileFilter: imageFilter,
//     limits: { fileSize: 2000000  }, //2MB in bytes
//    })
//    .single('photo');

//    /* Up load 1 hình */
// router.post('/photo', function (req, res, next) {
//   console.log('photos',req.file);

//   uploadSingle(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading.
//       console.log('Lỗi',err);
//     } else if (err) {
//       // An unknown error occurred when uploading.
//       console.log('Lỗi ko ro nguyen nhan',err);
//     }
  
//     res.send('UP load thanh cong');
//   })

//   res.send('form');
// })
   

const CustomerProfile = () => {





    








    return (
        <section className="py-10 bg-gray-100 lg:w-10/12 md:w-10/12">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl mx-auto ">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
                <div className="grid max-w-2xl mx-auto mt-8 sm:p-5">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                        <img
                            className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src="../../../public/images/bergkamp.jpg"
                            alt="Bordered avatar"
                        />
                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button
                                type="button"
                                className="py-2 px-4 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                            >
                                Change picture
                            </button>

                        </div>
                    </div>
                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                        <form action="">
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your first name
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your last name
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="first_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "  
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your phone number
                                    </label>
                                    <input
                                        type="number"
                                        id="last_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your birthday
                                    </label>
                                    <input
                                        type="date"
                                        id="first_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your address
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="profession"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="profession"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="********"
                                    required
                                />
                            </div>
                          
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default CustomerProfile