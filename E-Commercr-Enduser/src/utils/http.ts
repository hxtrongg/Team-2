import axios, { AxiosInstance, HttpStatusCode } from 'axios';
import { toast } from 'react-toastify';
import {
    clearLocalStorage,
    getAccessToken,
    saveAccessToken,
    saveProfile,
} from '.';

/*
 * dùng attr access_token để lưu token thay vì dùng thẳng getAccessToken()
 * vì dùng attr trong class thì nó sẽ lưu trên ram, còn localStorage thì lưu trên disk
 * đọc từ ram sẽ luôn nhanh hơn đọc từ disk
 */

class Http {
    instance: AxiosInstance;
    private accessToken: string;
    constructor() {
        this.accessToken = getAccessToken();
        this.instance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 10000, // 10 seconds
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.instance.interceptors.request.use(
            (config) => {
                const access_token = localStorage.getItem('access_token')
                if (access_token) {
                    config.headers.Authorization = `Bearer ${access_token}`
                  }
                  return config
            },
            (error) => {
                return Promise.reject(error);
            },
        );
        // this.instance.interceptors.response.use(
        //     (response) => {
        //         const { url } = response.config;
        //         if (url === path.login || url === path.register) {
        //             const data = (response.data as AuthResponse).data;
        //             this.accessToken = data.access_token as string;
        //             saveAccessToken(this.accessToken);
        //             saveProfile(data.user);
        //         } else if (url === path.logout) {
        //             this.accessToken = '';
        //             clearLocalStorage();
        //         }
        //         console.log("response",response)
        //         return response;
        //     },
        //     (error) => {
        //         if (error.response.status === 422) {
        //             // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //             const data: any | undefined = error.response?.data;
        //             const message = data?.message || error.message;
        //             toast.error(message, {
        //                 toastId: 'error',
        //             });
        //         }

        //         if (error.response.status === HttpStatusCode.Unauthorized) {
        //             clearLocalStorage();
        //         }

        //         return Promise.reject(error);
        //     },
        // );
        this.instance.interceptors.response.use(
            async (response) => {
              /**
               * Tùy vào response của BACKEND API trả về với cấu trúc như thế nào 
               * bạn điều chỉnh lại cho đúng với cách code của bạn
               */
              console.log('<<=== 🚀 axiosClient response.data  ===>>',response.data.data);
              const { access_token, refreshToken, user } = response.data.data;
              // khi LOGIN oK ==> LƯU token và freshTOken xuống localStorage
              if (access_token) {
                window.localStorage.setItem('access_token', access_token);
              }
              if (refreshToken) {
                window.localStorage.setItem('refreshToken', refreshToken);
              }
              if (user) {
                window.localStorage.setItem('user', user);
              }

            return response;
            }, 
            (error) => {
                if (error.response.status === 422) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const data: any | undefined = error.response?.data;
                    const message = data?.message || error.message;
                    toast.error(message, {
                        toastId: 'error',
                    });
                }

                if (error.response.status === HttpStatusCode.Unauthorized) {
                    clearLocalStorage();
                }

                return Promise.reject(error);
            },
        );   
}
}

const httpRequest = new Http().instance;

export default httpRequest;
