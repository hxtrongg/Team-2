// import { SuccessResponseApi } from 'src/types/util.type.ts';
// import httpRequest from 'src/utils/http';
// import { User } from 'src/types/user.type';

import { axiosClient } from "../library/axiosClient.ts";
import { SuccessResponseApi } from "../types/util.type.ts";
import { User } from "../utils";
import httpRequest from "../utils/http";

interface BodyUpdateProfile
    extends Omit<
        User,
        '_id' | 'roles' | 'createdAt' | 'updatedAt' | '__v' | 'email'
    > {
    password?: string;
    newPassword?: string;
}

const userService = {
    getProfile() {
        return httpRequest.get<SuccessResponseApi<User>>('/api/v1/auth/profileClient');
    },
    updateProfile(body: BodyUpdateProfile) {
        return httpRequest.put<SuccessResponseApi<User>>('user', body);
    },
    uploadAvatar(body: FormData) {
        return httpRequest.post<SuccessResponseApi<string>>(
            'user/upload-avatar',
            body,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );
    },
};

export default userService;
