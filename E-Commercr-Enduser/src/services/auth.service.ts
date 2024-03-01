// import { path } from 'src/constants';
// import { AuthResponse } from 'src/types/auth.type';
// import httpRequest from 'src/utils/http';

import { path } from "../constants";
import { axiosClient } from "../library/axiosClient";
import { AuthResponse } from "../types/auth.type";
import httpRequest from "../utils/http";

const URL = '/api/v1/auth'

const authService = {
    register: (body: { email: string; password: string }) => {
        return httpRequest.post<AuthResponse>(path.register, body);
    },
    login: (body: { email: string; password: string }) => {
        return httpRequest.post<AuthResponse>(`${URL}${path.login}`,body);
    },
    logout: async() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refreshToken');
    },
};

export default authService;
