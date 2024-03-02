import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios';
import { toast } from 'react-toastify';
import { clearLocalStorage, getAccessToken, saveAccessToken, saveProfile } from '.';
import { path } from '../constants';
import { AuthResponse } from '../types/auth.type';
import { User } from '../types/user.type';
import { get } from 'lodash';

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
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => {
          const {access_token, customer} = (response.data as AuthResponse).data
          console.log('dataResponse',response)
          if(access_token){
            saveAccessToken(access_token)
          }
          if(customer){
            saveProfile(customer)
          }
        return response
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
    )
  }
}

const httpRequest = new Http().instance;

export default httpRequest;
