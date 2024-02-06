// import { path } from 'src/constants';
// import { AuthResponse } from 'src/types/auth.type';
// import httpRequest from 'src/utils/http';

import { path } from "../constants";
import { AuthResponse } from "../types/auth.type";
import httpRequest from "../utils/http";

const authService = {
    register: (body: { email: string; password: string }) => {
        return httpRequest.post<AuthResponse>(path.register, body);
    },
    login: (body: { email: string; password: string }) => {
        return httpRequest.post<AuthResponse>(path.login, body);
    },
    logout: () => {
        return httpRequest.post<AuthResponse>(path.logout);
    },
};

export default authService;
