import axios from 'axios';
const API_URL = 'http://localhost:3000/api/v1/auth/login';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST
axiosClient.interceptors.request.use(
  (config) => {
    const access_token = window.localStorage.getItem('access_token');
    //Check nếu có token thì đính kèm token vào header
    if (access_token&&config.headers) {
      config.headers.Authorization = 'Bearer ' + access_token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE TRẢ VỀ

axiosClient.interceptors.response.use(
  async (response) => {
    /**
     * Tùy vào response của BACKEND API trả về với cấu trúc như thế nào 
     * bạn điều chỉnh lại cho đúng với cách code của bạn
     */
    // console.log('<<=== 🚀 axiosClient response.data  ===>>',response);
    const { access_token, refreshToken } = response.data.data;
    // khi LOGIN oK ==> LƯU token và freshTOken xuống localStorage
    if (access_token) {
      window.localStorage.setItem('access_token', access_token);
    }
    if (refreshToken) {
      window.localStorage.setItem('refreshToken', refreshToken);
    }

    return response;
  },
  async (error) => {

    //Khi lỗi, và lỗi không phải 401 --> trả lại lỗi

    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }

    const originalConfig = error.config;

     //Khi lỗi, và lỗi 401 --> ko có quyền truy cập ==> đi làm mới lại token

    if (error?.response?.status === 401 && !originalConfig.sent) {
      console.log('Error 🚀', error);
      originalConfig.sent = true;
      try {
        // Trường hợp không có token thì chuyển sang trang LOGIN
        const access_token = window.localStorage.getItem('access_token');
        if (!access_token) {
          console.log('Token not found',window.location.pathname);
          //Nếu trang hiện tại đang đứng không phải là login thì chuyển hướng login
          if(window.location.pathname !== '/login'){
            window.location.href = '/login';
          }
          return Promise.reject(error);
        }
        //Nếu tồn tại token, thì làm mới token sau mỗi request
        //Để quá trình login ko bị gián đoạn
        
        const refreshToken = window.localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axiosClient.post('/auth/refresh-token', {
            refreshToken: refreshToken,
          });

          const { access_token } = response.data.data;
          window.localStorage.setItem('access_token', access_token);

          originalConfig.headers = {
            ...originalConfig.headers,
            authorization: `Bearer ${access_token}`,
          };

          return axiosClient(originalConfig);
        } else {
          return Promise.reject(error);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
  },
);

export { axiosClient };